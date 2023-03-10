import type { Scene } from "three";
import type {UniformVar} from "@/effect/surroundLine";
import {color} from "@/config";
import {Cylinder} from "@/effect/cylinder";

export class Wall {
  scene: Scene

  time: UniformVar

  config = {
    radius: 50,
    height: 40,
    open: true,
    opacity: 0.6,
    color: color.wall,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    speed: 2
  }

  constructor(scene: Scene, time: UniformVar) {
    this.scene = scene
    this.time = time
    new Cylinder(this.scene, time).init(this.config)
  }
}