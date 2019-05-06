import React from 'react'
import CardForm from '../card-form'
import SwishForm from '../swish-form'
import PrimaryButton from '../primary-button'
import InvoiceForm from '../invoice-form'
import Masterpass from '../masterpass'

const PaymentMethodRadio = (props) => (  
    <div className="row payment-method-radio card-content content-border-select">
        <div className="col-xs-12">
            <label className="radio-button">
                <input type="radio" name="paymentMethod" className="radio-border" value={props.value} checked={props.choiceChecked} onChange={props.choosePaymentMethod}/>
                <span className="custom-radio"></span>
                {props.label} 
            </label>
            <img src={props.img} alt={props.alt} className={props.offset}/>
        </div> 
        
        {props.isCardChecked ? <CardForm /> : 
         props.isSwishChecked ? <SwishForm /> : 
         props.isPayPalChecked ? <PrimaryButton name="Pay with PayPal"/> :
         props.isInvoiceChecked ? <InvoiceForm /> :
         props.isMasterpassChecked ? <Masterpass /> : ''}      
    </div> 
 
)

export default PaymentMethodRadio