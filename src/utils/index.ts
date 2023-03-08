import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import type {Group} from "three";

const fbxLoader = new FBXLoader()
export const loadFBX = (url: string): Promise<Group> => {
  return new Promise((resolve, reject) => {
    fbxLoader.load(url, (object) => {
      resolve(object)
    }, () => {}, (err) => {
      reject(err)
    })
  })
}