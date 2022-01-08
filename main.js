import './style.css'
import satFile from './input/example2.json'
import {SAT} from './src/SAT.js'
import {Transformation} from './src/Transformation.js'

const sat = new SAT(satFile)

console.log(sat)

const transformer = new Transformation(sat)


document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
