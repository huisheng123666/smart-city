import { Cone } from './../effect/cone';
import { Ball } from './../effect/ball';
import {loadFBX} from "@/utils";
import type { Scene } from "three";
import * as THREE from 'three'
import {SurroundLine} from "@/effect/surroundLine";
import {Background} from "@/effect/background";
import gsap from "gsap";
import type {PerspectiveCamera} from "three";
import {Radar} from "@/effect/radar";
import {Wall} from "@/effect/wall";
import {Circle} from "@/effect/circle";
import {Fly} from "@/effect/fly";

export class City {
  scene: Scene
  camera: PerspectiveCamera

  height = {
    value: 5.0
  }

  time = {
    value: 0.0
  }

  top = {
    value: 5.0
  }

  flag = false

  constructor(scene: Scene, camera: PerspectiveCamera) {
    this.loadCity()
    this.scene = scene
    this.camera = camera
  }

  loadCity() {
    loadFBX('/beijing.fbx')
      .then(object => {
        // console.log(object)
        object.traverse((child: any) => {
          if (child.isMesh) {
            new SurroundLine(this.scene, child, this.height, this.time)
          }
        })
        this.initEffect()
      })
  }

  initEffect() {
    new Background(this.scene)
    new Radar(this.scene, this.time)
    new Wall(this.scene, this.time)
    new Circle(this.scene, this.time)
    new Ball(this.scene, this.time)
    new Cone(this.scene, this.top, this.height)
    new Fly(this.scene, this.time)

    // this.clickEvent()
  }

  clickEvent() {
    let flag1 = false, flag2 = false
    document.onmousedown = () => {
      flag1 = true
    }
    document.onmousemove = () => {
      if (flag1) flag2 = true
    }
    document.onmouseup = (event) => {
      if (flag1 && flag2) {
        flag1 = false
        flag2 = false
        return
      }
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      const standardVector = new THREE.Vector3(x, y, 0.5)
      const wordVector = standardVector.unproject(this.camera)

      const ray = wordVector.sub(this.camera.position).normalize()

      const rayCaster = new THREE.Raycaster(this.camera.position, ray)

      const intersects = rayCaster.intersectObjects(this.scene.children, true)
      let point3d: any = null
      if (intersects.length) {
        point3d = intersects[0]
      }
      if (point3d) {
        const proportion = 2
        gsap.to(this.camera.position, {
          x: point3d.point.x * proportion,
          y: point3d.point.y * proportion,
          z: point3d.point.z * proportion,
          duration: 1,
          ease: 'linear'
        })
        // gsap.to(this.camera.rotation, {
        //   x: this.camera.rotation.x,
        //   y: this.camera.rotation.y,
        //   z: this.camera.rotation.z,
        //   duration: 1,
        //   ease: 'linear'
        // })
      }
    }
  }

  start(delta: number) {
    this.height.value += 0.4
    if (this.height.value > 160) {
      this.height.value = 5
    }

    this.time.value += delta

    if (this.top.value > 15 || this.top.value < 0) {
      this.flag = !this.flag
    }
    this.top.value += this.flag ? -0.4 : 0.4

  }
}