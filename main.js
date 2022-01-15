import './style.css'
import {SAT} from './src/SAT.js'
import {Transformation} from './src/Transformation.js'
import {saveAs} from 'file-saver';

const file = document.querySelector('#file')
const jsonInput = document.querySelector('.json-input')
const jsonOutput = document.querySelector('.json-output')
let sat3, sat = {}


file.addEventListener('change', function() {
  const fr = new FileReader();
  fr.onload = function() {
    sat = new SAT(JSON.parse(fr.result))
    jsonInput.innerHTML = syntaxHighlight(JSON.stringify(sat, null, 2))
    jsonOutput.innerHTML = '';
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

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}

const downloadButton = document.querySelector('.download')
downloadButton.addEventListener('click',() => saveFile())

// -------------------------------
const transformButton = document.querySelector('.transform')
transformButton.addEventListener('click',() => {
  const transformer = new Transformation(sat)
  sat3 = transformer.transform()
  jsonOutput.innerHTML = syntaxHighlight(JSON.stringify(sat3, null, 2))
  downloadButton.style.display = 'inline'
})




