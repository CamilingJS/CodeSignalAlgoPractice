'use strict';

console.log("Hello 🌎");

// Let's talk this
window.name = "Window"

/* 
Definiton: 
*/

function justAFunctionDeclaration() {
  console.log("in justAFunctionDeclaration, do we have this?", this); // no - undefined
  if(this) {
    console.log("in justAFunctionDeclaration:", this.name) // we never reach this
  }
}

function aFunctionCalledWithNew() {
  console.log("in aFunctionCalledWithNew, do we have this?", JSON.stringify(this)); // yes - empty object
  if(this) {
    console.log("in aFunctionCalledWithNew:", this.name) // undefine
  }
  this.name = "aFunctionCalledWithNew";
  console.log("in aFunctionCalledWithNew own this:", this.name) // "aFunctionCalledWithNew"
  this.aNestedFcInsideAFunctionCalledWithNew = function() {
    console.log("in aNestedFcInsideAFunctionCalledWithNew", this)
  }
  this.aNestedFcInsideAFunctionCalledWithNew()
}

// this is the same as aFunctionCalledWithNew
class aClass {
  constructor() {
    this.name = "aClass"
  }
  aNestedFcInsideAClassCalled() {
    
  }
}

// this in global scope is window
function x() {
  // this in x is undefined
  const z = () => {
    console.log("z", this) // undefined
  }
  
  z()
}

// const xx = new x()
x()

/* 
Definiton: 
Arrow functions don't have their own bindings to this,
arguments or super, and should not be used as methods.
*/
const anArrowFunction = () => {
  console.log("in anArrowFunction, do we have this?", this); // yes - the window
  if(this) {
    console.log("in anArrowFunction:", this.name) // "Window"
  }
}


const ob = { name: "my object" };
ob.objFunction = function() {
  console.log("in objFunction", this.name) // my object
}
ob.objFunction()


justAFunctionDeclaration();
const object = new aFunctionCalledWithNew();
console.log(object.name); // "aFunctionCalledWithNew"
anArrowFunction();

// this is our fake react, you can use it to build many apps
class FakeReact {
  constructor() {
    this.registeredThings = [];
    this.state = {};
    this.currentStateIdCounter = 0;
  }
  registerClick(id, func) {
    this.registeredThings.push([id, func]);
  }
  registerClicks(id, func) {
    this.registeredThings.forEach(([id, func]) => {
      const element = document.getElementById(id);
      if(!element) {
        console.log(`Could not find element with id ${id}`)
      }
      element.addEventListener("click", func);
    }
    )                                                           
  }
  deregisterClicks() {
    this.registeredThings.forEach(([id, func]) => {
      const element = document.getElementById(id);
      element.removeEventListener("click", func);
    })
    this.registeredThings = [];
  }
  rerender() {
    this.currentStateIdCounter = 0;
    this.deregisterClicks();
    this.element.innerHTML = this.RootComponent();
    this.registerClicks();
    console.log("THE Mysterious React state", this.state)
  }
 useState(defaultValue) {
   let stateId = this.currentStateIdCounter + 1 // App-0 App-1
   this.currentStateIdCounter = stateId

    if(this.state[stateId]) {
      console.log(`omg found!!! ${stateId}`)
      return this.state[stateId];
    }
    let value = defaultValue;
    let self = this;
    function setValue(newValue) {
      const [lastValue, func] = self.state[stateId] 
      self.state[stateId] = [newValue, func]
      self.rerender();
    }
    this.state[stateId] = [value, setValue]
    return [value, setValue];
  }
  render(id, RootComponent) {
    this.element = document.getElementById(id);
    if(!this.element) {
      throw Error("element for id not found");
    } 
    this.RootComponent = RootComponent;
    this.rerender();
  }
}

const React = new FakeReact();

// this is the app code you write using FakeReact
function App() {  
  const [addValue, setAddValue] = React.useState(0);
  const [substractValue, setSubstractValue] = React.useState(0);

  const addOneToValue = () => {
    setAddValue(addValue + 1);
  }
  
  const substractOneFromValue = () => {
    setSubstractValue(substractValue - 1)
  }

  return `
    <nav>
    <ul>
      <li><a href="/home.html">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/resume.html">Resume</a></li>
    </ul>
  </nav>
  <h1 class="heading-one">Home</h1>
  ${Button({
    id: "button-1",
    value: `Add ${addValue}`,
    isPrimary: true,
    classes: "margin-right",
    onClick: addOneToValue
  })}
  ${Button({
    id: "button-2",
    value: `Substract ${substractValue}`,
    onClick: substractOneFromValue
  })}
  `;
}

function Button({ id, onClick, value, isPrimary = false, classes = "" }) {
  React.registerClick(id, onClick);
  return `
  <button id=${id} class="button ${isPrimary ? "button-primary" : ''} ${classes}">
  ${value}
  </button>`
}


React.render('app', App)