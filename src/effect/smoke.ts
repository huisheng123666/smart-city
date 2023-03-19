import * as THREE from 'three'
import type { Scene, BufferGeometry, PointsMaterial, Points } from 'three'

export class Smoke {
  scene: Scene

  geometry: BufferGeometry | undefined;
  material: PointsMaterial | undefined;
  points: Points | undefined;
  smokes: any[] = []

  constructor(scene: Scene) {
    this.scene = scene
    this.init()
  }

  init() {
    this.geometry = new THREE.BufferGeometry()

    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
      0, 0, 0
    ]), 3))

    this.material = new THREE.PointsMaterial({
      size: 50,
      map: new THREE.TextureLoader().load('/imgs/smoke.png'),
      transparent: true,
      depthTest: false
    })

    this.material.onBeforeCompile = (shader) => {
      const vertex1 = `
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;
        
        void main() {
          v_opacity = a_opacity;
      `

      const glPosition = `
        gl_PointSize = a_size * a_scale;
      `

      shader.vertexShader = shader.vertexShader.replace('void main() {', vertex1)
      shader.vertexShader = shader.vertexShader.replace('gl_PointSize = size', glPosition)

      const fragment1 = `
        varying float v_opacity;
        
        void main() {
      `

      const fragment2 = `
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `
      shader.fragmentShader = shader.fragmentShader.replace('void main() {', fragment1)
      shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4(outgoingLight, diffuseColor.a)', fragment2)
    }

    this.points = new THREE.Points(this.geometry, this.material)

    this.scene.add(this.points)
  }

  createParticle() {
    this.smokes.push({
      size: 50,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0,
      speed: {
        x: Math.random(),
        y: Math.random() + 0.3,
        z: Math.random()
      },
      scale: 0.1
    })
  }

  setAttribute(pointList: any[], opacityList: any[], sizeList: any[], scaleyList: any[]) {
    this.geometry?.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pointList), 3))
    this.geometry?.setAttribute('a_opacity', new THREE.BufferAttribute(new Float32Array(opacityList), 1))
    this.geometry?.setAttribute('a_size', new THREE.BufferAttribute(new Float32Array(sizeList), 1))
    this.geometry?.setAttribute('a_scale', new THREE.BufferAttribute(new Float32Array(scaleyList), 1))
  }

  update() {
    const pointList: any[] = []
    const opacityList: any[] = []
    const sizeyList: any[] = []
    const scaleyList: any[] = []
    this.smokes = this.smokes.filter(item => {
      item.opacity -= 0.01
      item.x += item.speed.x
      item.y += item.speed.y
      item.z += item.speed.z
      item.scale += 0.5
      pointList.push(item.x, item.y, item.z)
      opacityList.push(item.opacity)
      sizeyList.push(item.size)
      scaleyList.push(item.scale)
      return item.opacity >= 0;
    })
    this.setAttribute(pointList, opacityList, sizeyList, scaleyList)
  }

  animation() {
    this.createParticle()
    this.update()
  }
}
