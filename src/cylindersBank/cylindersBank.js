import React from 'react'
import "./cylindersBank.css"
import Feeder from './components/feeder/feeder'
import Rolls from './components/rolls/rolls'

const CylindersBank = () =>
    <div className="cylinders">
        <div className="header"></div>
        <div className="content">
            <div className="config"></div>
            <Feeder/>
            <Rolls/>
        </div>
        <div className="footer"></div>
    </div>

export default CylindersBank
