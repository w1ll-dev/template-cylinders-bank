import React from 'react'
import CustomSelect from '../custom/customSelect/customSelect'
import "./rolls.css"

const Rolls = () =>
    <div className="rolls">
        <div className="roll-header">ROLOS</div>
        <div className="rolls-line-1">
            <div className="l1c1">
                <input type="radio" />
                <label>250</label>
            </div>
            <div className="l1c2">
                <input type="radio" />
                <label>300</label>
            </div>
        </div>
        <div className="rolls-line-2">
            <CustomSelect options={[`${"300 RS"}`]} />
            <CustomSelect options={[`${"300 RS"}`]} />
            <CustomSelect options={[`${"SEM"}`]} />
            <CustomSelect options={[`${"SEM"}`]} />
        </div>
        <div className="rolls-line-3">
            <CustomSelect options={[`${"300 RS"}`]} />
            <CustomSelect options={[`${"300 RS"}`]} />
            <CustomSelect options={[`${"SEM"}`]} />
            <CustomSelect options={[`${"SEM"}`]} />
        </div>
        <div className="rolls-line-4">
            <CustomSelect options={["45°-65°"]} />
            <CustomSelect options={["45°-65°"]} />
            <CustomSelect options={["--"]} />
            <CustomSelect options={["--"]} />
        </div>
        <div className="rolls-line-5">
            <CustomSelect options={[]} />
        </div>
        <div className="rolls-line-6">
            <CustomSelect options={[]} />
        </div>
        <div className="rolls-line-7">
            <CustomSelect options={[]} />
        </div>
    </div>

export default Rolls
