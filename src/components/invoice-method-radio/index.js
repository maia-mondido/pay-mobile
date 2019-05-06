import React from 'react'

const InvoiceMethodRadio = (props) => (  
    <div className="row card-content payment-method-radio">
        <div className="col-xs-11 offset-1 invoice-border-select">
            <label class="radio-button ">
                <input type="radio" name="invoiceMethod" />
                <span className="custom-radio"></span>
                {props.label} 
                <div className="invoice-condition ">
                    <small>{props.condition}</small>
                </div>
            </label>
            
        </div> 
        
    </div> 
      
 
)

export default InvoiceMethodRadio