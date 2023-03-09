import type { Scene } from "three";
import type {UniformVar} from "@/effect/surroundLine";
import * as THREE from 'three'
import {color} from "@/config";

export class Wall {
  scene: Scene

  time: UniformVar

  config = {
    radius: 50,
    height: 20,
    open: true,
    opacity: 0.6
  }

  constructor(scene: Scene, time: UniformVar) {
    this.scene = scene
    this.time = time
    this.createWall()
  }

  createWall() {
    const geometry = new THREE.CylinderGeometry(
      this.config.radius,
      this.config.radius,
      this.config.height,
      32,
      1,
      this.config.open
    )

    geometry.translate(0, this.config.height / 2, 0)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_color: {
          value: new THREE.Color(color.wall)
        },
        u_height: {
          value: this.config.height
        },
        u_opacity: {
          value: this.config.opacity
        },
        u_time: this.time,
      },
      side: THREE.DoubleSide,
      depthTest: false,
      vertexShader: `
        uniform float u_time;
        uniform float u_height;
        
        varying float v_opacity;
        
        void main() {
          vec3 v_position = position * mod(u_time, 1.0);
          
          v_opacity = mix(1.0, 0.0, position.y / u_height);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 u_color;
        uniform float u_opacity;
        
        varying float v_opacity;
      
        void main() {
          gl_FragColor = vec4(u_color, u_opacity * v_opacity);
        }
      `,
      transparent: true
    })

    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.set(0, 0, 0)

    this.scene.add(mesh)
  }
}