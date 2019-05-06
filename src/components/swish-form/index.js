import React from 'react'
import PrimaryButton from '../primary-button'

const SwishForm = (props) => (  
    <>
        <label htmlFor="mobileNumber" ><small>Your mobile number</small></label>
        <input type="text" className="form-control" id="mobileNumber" aria-describedby="mobileNumber" placeholder="07X X XXX XXX" />
        <PrimaryButton name="Pay"/>
    </>
 
)

export default SwishForm