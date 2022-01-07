import './style.css'
import sat from '../input/example1.json';
import {readFile} from './src/readFile.js';

readFile(sat)

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
