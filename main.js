import './style.css'
import {SAT} from './src/SAT.js'
import {Transformation} from './src/Transformation.js'
import {saveAs} from 'file-saver';

const file = document.querySelector('#file')
let sat3 = {}

file.addEventListener('change', function() {
  const fr = new FileReader();
  fr.onload = function() {
    const sat = new SAT(JSON.parse(fr.result))
    const transformer = new Transformation(sat)
    sat3 = transformer.transform()
  }  
  fr.readAsText(this.files[0]);
})

const saveFile = () => {
  const content = JSON.stringify(sat3, null, 2)
  const filename = "3SAT.json"
  const blob = new Blob([content], {
    type: "application/json;charset=utf-8"
  })
  saveAs(blob, filename)
}

const button = document.querySelector('button')
button.addEventListener('click',() => saveFile())
