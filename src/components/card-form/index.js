import React from 'react'
import lock from '../../assets/lock.png'
import PrimaryButton from '../primary-button'

const CardForm = () => (  
    <div className="col-xs-12 " >
        <div className="form-group">
            <label htmlFor="firstNameLastName"><small>Firstname Lastname</small></label>
            <input type="text" className="form-control" id="firstNameLastName" aria-describedby="firstLastName" placeholder="Firstname Lastname" />
        </div>
        <div className="form-group">
            <label htmlFor="cardNumber"><small>Card number</small></label>
            <input type="number" className="form-control" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required pattern="[0-9]{16}"/>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="cardNumber input-half"><small>Month/Year</small></label>
                    <input type="number" className="form-control input-half" id="month-year" placeholder="MM/YYYY" required pattern="[0-9]"/>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="cardNumber"><small>CVV code <span className="circled-mark">&#63;</span></small></label>
                    <input type="number" className="form-control input-half" id="cvv-code" placeholder="XXX" required pattern="[0-9]{3}"/>
                </div>
            </div>
        </div>
    
        <div className="col-xs-12">
        
            <div className="form-group">
                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                    <span className="terms-conditions">I agree to the Terms and Conditions</span>
                </label>
            </div>
            <div className="form-group">
                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                    <span className="terms-conditions">I agree to the Terms and Conditions</span>
                </label>
            </div>
        </div>

        <PrimaryButton name="Pay" />
        <small id="emailHelp" className="form-text text-muted encrypted ml-3"> 
            <img className="lock" src={lock} alt="lock"/>Your credit card information is encrypted
        </small>  
    </div>
)

export default CardForm
