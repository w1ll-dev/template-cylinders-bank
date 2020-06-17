import React from 'react'
import "./cylindersBank.css"

const CylindersBank = () =>
    <div className="cylinders">
        <div className="header"></div>
        <div className="content">
            <div className="config"></div>
            <div className="feeder">
                <div className="row1">
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="row2">
                    <input type="radio" />
                    <label>800</label>
                    <input type="radio" />
                    <label>800</label>
                    <input type="radio" />
                    <label>800</label>
                    <input type="radio" />
                    <label>800</label>
                </div>
                <div className="row3"></div>
                <div className="row4"></div>
                <div className="row5"></div>
            </div>
            <div className="rools"></div>
        </div>
        <div className="footer"></div>
    </div>

export default CylindersBank