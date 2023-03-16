import type {Scene} from "three";
import type {UniformVar} from "@/effect/surroundLine";
import {color} from "@/config";
import * as THREE from 'three'

interface FlyOptions {
  range: number
  height: number
  color: string
  size: number
}

export class Road {
  scene: Scene

  time: UniformVar
  constructor(scene: Scene, time: UniformVar) {
    this.scene = scene
    this.time = time
    this.init({
      range: 50,
      height: 300,
      color: color.fly,
      size: 30
    })
  }

  init(options: FlyOptions) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-320, 0, 160),
      new THREE.Vector3(-150, 0, -40),
      new THREE.Vector3(-10, 0, -35),
      new THREE.Vector3(40, 0, 40),
      new THREE.Vector3(30, 0, 150),
      new THREE.Vector3(-100, 0, 310)
    ])

    const points = curve.getPoints(400)

    const positions: number[] = []
    const aPositions: number[] = []
    points.forEach((item, index) => {
      positions.push(item.x, item.y, item.z)

      aPositions.push(index)
    })

    const geometry = new THREE.BufferGeometry()

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('a_position', new THREE.Float32BufferAttribute(aPositions, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_color: {
          value: new THREE.Color(options.color)
        },
        u_range: {
          value: options.range
        },
        u_size: {
          value: options.size
        },
        u_total: {
          value: 400
        },
        u_time: this.time
      },
      transparent: true,
      vertexShader: `
        attribute float a_position;
        
        uniform float u_range;
        uniform float u_size;
        uniform float u_total;
        uniform float u_time;
        
        varying float v_opacity;
        
        void main() {
          float size = u_size;
          float total_number = u_total * mod(u_time, 1.0);
          
          if (total_number > a_position && total_number < a_position + u_range) {
            float index = (a_position + u_range - total_number) / u_range;
            size *= index;
            
            v_opacity = 1.0;
          } else {
            v_opacity = 0.0;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size / 10.0;
        }
      `,
      fragmentShader: `
        uniform vec3 u_color;
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, v_opacity);  
        }
      `,
      depthTest: false
    })

    const mesh = new THREE.Points(geometry, material)

    this.scene.add(mesh)
  }

}