import * as THREE from 'three'
import type {Scene, PointsMaterial, BufferGeometry, Points} from "three";

export class Rain {
  scene: Scene;

  range = 1000;

  total = 800;

  geometry: BufferGeometry | undefined;

  pointList: any[] = []

  points: Points | undefined

  material: PointsMaterial | undefined

  constructor(scene: Scene) {
    this.scene = scene

    this.init()
  }

  init() {
    this.material = new THREE.PointsMaterial({
      size: 10,
      map: new THREE.TextureLoader().load('/imgs/rain.png'),
      transparent: true,
      opacity: 0.4,
      depthTest: false
    })

    this.geometry = new THREE.BufferGeometry()
    for (let i = 0; i < this.range; i++) {
      const position = new THREE.Vector3(
        Math.random() * this.range - this.range / 2,
        Math.random() * this.range,
        Math.random() * this.range - this.range / 2
      )
      this.pointList.push(position)
    }

    this.geometry.setFromPoints(this.pointList)

    this.points = new THREE.Points(this.geometry, this.material)

    this.scene.add(this.points)
  }

  animation() {
    this.pointList.forEach(position => {
      position.y -= 10;
      if (position.y <= 0) {
        position.y = this.range / 2
      }
    })
    this.geometry?.setFromPoints(this.pointList)
  }
}
