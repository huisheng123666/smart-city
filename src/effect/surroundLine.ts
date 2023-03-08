import * as THREE from "three";
import type {Scene, Mesh} from "three";

export class SurroundLine {
  scene: Scene
  child: Mesh

  constructor(scene: Scene, child: Mesh) {
    this.scene = scene
    this.child = child
    this.render()
  }

  render() {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        city_color: {
          value: new THREE.Color('#1b3045')
        }
      },
      vertexShader: `
                void main() {
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,
      fragmentShader: `
                uniform vec3 city_color;
                void main() {
                  gl_FragColor = vec4(city_color, 1.0);
                }
              `
    })
    const mesh = new THREE.Mesh(this.child.geometry, material)
    mesh.position.copy(this.child.position)
    mesh.rotation.copy(this.child.rotation)
    mesh.scale.copy(this.child.scale)
    this.scene.add(mesh)
  }
}