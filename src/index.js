//COMMON JS
//const React = require('react';)

//ES6

// 1) TENER REACT EN SCOPE
import React from "react"

// 2) Tener REACT_DOM en scope
import ReactDOM from "react-dom"


import NavBar from "./NavBar.js" 
// 3) Crear un componente
// const App = () => "Hola Mundo"

// 4) Renderizar la aplicación UNA ÚNICA VEZ
ReactDOM.render(<NavBar/>, document.getElementById('root'))