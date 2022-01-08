import './style.css'
import satFile from './input/example2.json'
import {SAT} from './src/SAT.js'
import {Transformation} from './src/Transformation.js'
import { saveAs } from 'file-saver';

const sat = new SAT(satFile)

console.log(sat)

const transformer = new Transformation(sat)
const sat3 = transformer.transform()

const saveFile = () => {
  const content = JSON.stringify(sat3, null, 2)
  // any kind of extension (.txt,.cpp,.cs,.bat)
  const filename = "3SAT.json"

  const blob = new Blob([content], {
    type: "application/json;charset=utf-8"
  })

  saveAs(blob, filename)
}

const button = document.querySelector('button')
button.addEventListener('click',() => saveFile())
