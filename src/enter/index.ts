import * as THREE from 'three'

export function initCity() {
  const canvas = document.getElementById('webgl') as HTMLCanvasElement

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000)

  scene.add(camera)

  const render = new THREE.WebGLRenderer({
    canvas
  })

  render.setSize(window.innerWidth, window.innerHeight)

  render.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  render.setClearColor(new THREE.Color(0x000000), 1)

  render.render(scene, camera)
}