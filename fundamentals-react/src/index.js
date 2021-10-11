import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from'./components/basics/WithParameter'
import Fragments from'./components/basics/Fragments'


ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter title="Grades" student="Mark Doe" grades='9.0'></WithParameter>
        <WithParameter title="Grades" student="Jhon  Doe" grades='7.9'></WithParameter>
        <WithParameter title="Grades" student="Susan Doe" grades='8.0'></WithParameter>
        <Fragments></Fragments>

    </div>,
    document.getElementById('root')
)