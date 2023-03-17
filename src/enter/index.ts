import * as THREE from 'three'
import {City} from "@/city";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export function initCity() {
  const canvas = document.getElementById('webgl') as HTMLCanvasElement

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 100, 100000)

  camera.position.set(1018, 357, -24)

  scene.add(camera)

  scene.add(new THREE.AmbientLight(0xadadadad))

  const directionLight = new THREE.DirectionalLight(0xffffff, 1)

  directionLight.position.set(0, 0, 1000)

  directionLight.castShadow = true

  scene.add(directionLight)

  const render = new THREE.WebGLRenderer({
    canvas
  })

  render.setSize(window.innerWidth, window.innerHeight)

  render.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  render.setClearColor(new THREE.Color(0x000000), 1)

  const controls = new OrbitControls(camera, canvas)

  controls.enableDamping = true
  controls.enableZoom = true
  controls.minDistance = 100
  controls.maxDistance = 2000

  const city = new City(scene, camera)

  const clock = new THREE.Clock()

  if (import.meta.env.DEV) {
    const axesHelper = new THREE.AxesHelper(100)

    scene.add(axesHelper)
  }

  const start = () => {
    city.start(clock.getDelta())
    render.render(scene, camera)
    controls.update()
    camera.updateProjectionMatrix()
  }

  render.setAnimationLoop(start)

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    render.setSize(window.innerWidth, window.innerHeight)
    render.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}