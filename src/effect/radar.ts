import type { Scene } from "three";
import type {UniformVar} from "@/effect/surroundLine";
import * as THREE from 'three'
import {color} from "@/config";


export class Radar {
  scene: Scene

  time: UniformVar

  constructor(scene: Scene, time: UniformVar) {
    this.scene = scene
    this.time = time
    this.init()
  }

  init() {
    const radius = 100
    const geometry = new THREE.PlaneGeometry(radius * 2, radius * 2, 32, 32)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_color: {
          value: new THREE.Color(color.radarColor)
        },
        u_radius: {
          value: radius
        },
        u_time: this.time
      },
      transparent: true,
      side: THREE.DoubleSide,
      vertexShader: `
        varying vec2 v_position;
        void main() {
          v_position = vec2(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying vec2 v_position;
        
        uniform float u_radius;
        uniform float u_time;
        uniform vec3 u_color;
        
        void main() {
          float angle = atan(v_position.x, v_position.y);
          // 饼图可以基于这段
          // float new_angle = mod(angle + 3.14 / 2.0, 3.1415926 * 2.0);
          float new_angle = mod(angle + u_time, 3.1415926 * 2.0);
          // 计算距离
          float dis = distance(vec2(0.0, 0.0), v_position);
          // 外层圆环的宽度
          float borderWidth = 5.0;
          float f_opacity = 0.0;
          if (dis > u_radius - borderWidth) {
            f_opacity = 1.0;
          }
          // 雷达扫描的显示
          if (dis < u_radius - borderWidth) {
            // 饼图可以基于这段
            // if (new_angle > 3.14 / 2.0) {
            //   f_opacity = 0.0;
            // } else {
            //   f_opacity = 1.0;
            // }
            f_opacity = 1.0 - new_angle;
          }
          if (dis > u_radius) {
            f_opacity = 0.0;
          }
          gl_FragColor = vec4(u_color, f_opacity);
        }
      `
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = Math.PI / 2
    mesh.position.set(300, 1, 0)

    this.scene.add(mesh)
  }
}