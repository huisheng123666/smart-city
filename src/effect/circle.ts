import type {Scene} from "three";
import type {UniformVar} from "@/effect/surroundLine";
import {Cylinder} from "@/effect/cylinder";
import {color} from "@/config";

export class Circle {
  scene: Scene

  time: UniformVar

  config = {
    radius: 50,
    color: color.circle,
    opacity: 0.6,
    height: 1,
    open: false,
    position: {
      x: 300,
      y: 0,
      z: 300
    },
    speed: 2.0
  }

  constructor(scene: Scene, time: UniformVar) {
    this.scene = scene
    this.time = time

    new Cylinder(scene, time).init(this.config)
  }
}