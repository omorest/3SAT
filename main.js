import './style.css'
import satFile from './input/example1.json';
import {SAT} from './src/SAT.js'

const sat = new SAT(satFile)

console.log("HOLA")
console.log(sat)


document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
