import { color } from '@/config';
import type {Scene} from "three";
import type {UniformVar} from "@/effect/surroundLine";
import * as THREE from "three";

export class Cone {
  scene: Scene

  top: UniformVar

  private height: UniformVar

  constructor(scene: Scene, top: UniformVar, height: UniformVar) {
    this.scene = scene
    this.top = top
    this.height = height

    this.init({
      color: color.cone,
      height: 60,
      position: {
        x: 0,
        y: 20,
        z: 0
      }
    })
  }

  init(options: any) {
    const geometry = new THREE.ConeGeometry(
      15,
      30,
      4
    )

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_color: {
          value: new THREE.Color(options.color)
        },
        u_height: this.height,
        u_top: this.top
      },
      side: THREE.DoubleSide,
      depthTest: false,
      vertexShader: `
        uniform float u_height;  
        uniform float u_top;  
        void main() {
          float f_angle = u_height / 10.0;
          float new_x = position.x * cos(f_angle) - position.z * sin(f_angle);
          float new_y = position.y;
          float new_z = position.z * cos(f_angle) + position.x * sin(f_angle);

          vec4 v_position = vec4(new_x, new_y + u_top, new_z, 1.0);

          gl_Position = projectionMatrix * modelViewMatrix * v_position;
        }
      `,
      fragmentShader: `
        uniform vec3 u_color;        
      
        void main() {
          gl_FragColor = vec4(u_color, 0.6);
        }
      `,
      transparent: true
    })

    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.copy(new THREE.Vector3(options.position.x, options.position.y, options.position.z))

    mesh.rotateZ(Math.PI)

    this.scene.add(mesh)
  }
}