import React from "react"
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import Random from "./components/basics/Random"

export default _ =>
    <div id="app">
        <h1>Fundamentals React</h1>
        <Random min={1} max={60} />
        <Fragments></Fragments>
        <WithParameter title="Grades" student="Susan Doe" grades='8.0'></WithParameter>
        <First></First>
    </div>
