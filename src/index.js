import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import * as Vibrant from 'node-vibrant'
import Album from './media/img/kl.jpg';


let v = new Vibrant(Album)

v.getPalette().then((palette) => console.log(palette))


ReactDOM.render(<App />, document.getElementById('root'))
