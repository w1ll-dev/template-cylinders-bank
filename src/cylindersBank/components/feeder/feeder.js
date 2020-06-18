import React from 'react'
import CustomSelect from '../custom/customSelect/customSelect'
import "./feeder.css"

const Feeder = () =>
    <div className="feeder">
        <div className="row-header">
            <span>ALIMENTADOR</span>
        </div>
        <div className="row1">
            <CustomSelect options={["1 BOCA", "2", "3"]} />
            <CustomSelect options={["DIVIDIDA", "2", "3"]} />
            <CustomSelect options={["ASPIRADA", "2", "3"]} />
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
        <div className="row3">
            <div className="row-3-1">
                <CustomSelect options={["TEG. ANT", "2", "3"]} />
                <CustomSelect options={["P SIM", "2", "3"]} />
            </div>
            <div className="row-3-2">
                <CustomSelect options={["TEG.POS", "2", "3"]} />
                <CustomSelect options={["P NÃO", "2", "3"]} />
            </div>
        </div>
        <div className="row4">
            <div className="container-4-1">
                <CustomSelect options={["T1:1,25", "2", "3"]} />
            </div>
            <div className="container-4-2">
                <CustomSelect options={["T1:2,4", "2", "3"]} />
            </div>
        </div>
        <div className="row5">
            <CustomSelect options={["TIPO 10S", "2", "3"]} />
            <CustomSelect options={["TIPO 10S", "2", "3"]} />
            <CustomSelect options={["TIPO 10S", "2", "3"]} />
            <CustomSelect options={["TIPO BR", "2", "3"]} />
        </div>
    </div>

export default Feeder