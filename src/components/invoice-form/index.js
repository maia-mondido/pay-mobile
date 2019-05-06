import React from 'react'
import PrimaryButton from '../primary-button'
import InvoiceMethodRadio from '../invoice-method-radio'

const InvoiceForm = (props) => (  
    <div className="col-xs-12 " >
        <div className="form-group">
            <InvoiceMethodRadio label="Pay after delivery" value="payAfterDelivery" condition="Experience first, pay later Pay within 14 days"/>
            <InvoiceMethodRadio label="Flex - pay at your own pace" value="flexPayAtYourOwnPace" condition="Starting at 150.00 kr/month"/>
            <InvoiceMethodRadio label="Split - 439.00 kr/month" value="split439" condition="Split over 3 months"/>
            <InvoiceMethodRadio label="Split - 234.00 kr/month" value="split234" condition="Split over 6 months"/>
            <InvoiceMethodRadio label="Split - 137.11 kr/month" value="split137" condition="Split over 12 months"/> 
            
        </div>
       
        <div className="col-xs-12">
            <div className="form-group">
                <label htmlFor="firstNameLastName"><small>Your SSN</small></label>
                <input type="text" className="form-control" id="SSN" aria-describedby="SSN" placeholder="SSN" />
            </div>
        </div>
        
        <div className="col-xs-12">
            <div className="form-group">
                <label class="checkbox">
                    <input type="checkbox" />
                    <span class="custom-checkbox"></span>
                    <span className="terms-conditions">I have read and agree to the <a href="#">Terms and Conditions of AfterPay</a></span>
                </label>
            </div>
        </div>
        <PrimaryButton name="Pay" />
        
    </div>
)

export default InvoiceForm