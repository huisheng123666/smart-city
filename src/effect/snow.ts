import * as THREE from 'three'
import type {Scene, PointsMaterial, BufferGeometry, Points} from "three";

export class Snow {
  scene: Scene;

  range = 1000;

  count = 600;

  material: PointsMaterial | undefined;

  geometry: BufferGeometry | undefined;

  points: any[] = [];

  point: Points | undefined;

  constructor(scene: Scene) {
    this.scene = scene
    this.init()
  }

  init() {
    this.material = new THREE.PointsMaterial({
      size: 30,
      map: new THREE.TextureLoader().load('/imgs/snow.png'),
      transparent: true,
      opacity: 0.8,
      depthTest: false
    })

    this.geometry = new THREE.BufferGeometry()

    // 添加顶点信息
    for (let i = 0; i < this.count; i++) {
      const position: any = new THREE.Vector3(
        Math.random() * this.range - this.range / 2,
        Math.random() * this.range,
        Math.random() * this.range - this.range / 2,
      )
      position.speedX = Math.random() - 0.5
      position.speedY = Math.random() + 0.4
      position.speedZ = Math.random() - 0.5
      this.points.push(position)
    }
    this.geometry.setFromPoints(this.points)

    this.point = new THREE.Points(this.geometry, this.material)
    this.scene.add(this.point)
  }

  animation() {
    this.points.forEach(item => {
      item.x -= item.speedX;
      item.y -= item.speedY;
      item.z -= item.speedZ;

      if (item.y <= 0) {
        item.y = this.range / 2
      }
    })
    this.geometry?.setFromPoints(this.points)
  }
}