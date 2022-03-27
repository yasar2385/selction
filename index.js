// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var p = document.getElementById('p');
let range = new Range();

// Each demonstrated method is represented here:
let methods = {
  deleteContents() {
    range.deleteContents();
  },
  extractContents() {
    let content = range.extractContents();
    result.innerHTML = '';
    result.append('extracted: ', content);
  },
  cloneContents() {
    let content = range.cloneContents();
    result.innerHTML = '';
    result.append('cloned: ', content);
  },
  insertNode() {
    let newNode = document.createElement('u');
    newNode.innerHTML = 'NEW NODE';
    range.insertNode(newNode);
  },
  surroundContents() {
    let newNode = document.createElement('u');
    try {
      range.surroundContents(newNode);
    } catch (e) {
      console.log(e);
    }
  },
  resetExample() {
    p.innerHTML = `Example: <i>italic</i> and <b>bold</b>`;
    result.innerHTML = '';

    range.setStart(p.firstChild, 2);
    range.setEnd(p.querySelector('b').firstChild, 3);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  },
};

for (let method in methods) {
  document.write(
    `<div><button onclick="methods.${method}()">${method}</button></div>`
  );
}

methods.resetExample();
