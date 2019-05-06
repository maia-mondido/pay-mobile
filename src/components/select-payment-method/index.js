import React from 'react'
import PaymentMethodRadio from '../payment-method-radio'
import card from '../../assets/card.png'
import swish from '../../assets/swish.png'
import payPal from '../../assets/paypal.png'
import afterpay from '../../assets/afterpay.png'
import masterpass from '../../assets/masterpass.png'

const SelectPaymentMethod = (props) => (  
    <div className="card card-select-pay-method radio col-xs-12 col-lg-3" >
        <div className="card-body row">
            <div className="col-xs-12">
                <h5 className="card-title">Select payment method</h5>
            </div>      
        </div> 
        <PaymentMethodRadio offset="offset-3" 
                            choiceChecked={props.choiceChecked} 
                            isCardChecked={props.isCardChecked} 
                            choosePaymentMethod={props.choosePaymentMethod} 
                            img={card} alt="card" value="card" label="Card" />
        <PaymentMethodRadio offset="offset-3" 
                            choiceChecked={props.choiceChecked} 
                            isSwishChecked={props.isSwishChecked} 
                            choosePaymentMethod={props.choosePaymentMethod} 
                            img={swish} alt="swish" value="swish" label="Swish"/>
        <PaymentMethodRadio offset="offset-3" 
                            choiceChecked={props.choiceChecked} 
                            isPayPalChecked={props.isPayPalChecked} 
                            choosePaymentMethod={props.choosePaymentMethod} 
                            img={payPal} alt="payPal" value="payPal" label="PayPal"/>
        <PaymentMethodRadio offset="offset-3" 
                            choiceChecked={props.choiceChecked} 
                            isInvoiceChecked={props.isInvoiceChecked} 
                            choosePaymentMethod={props.choosePaymentMethod} 
                            img={afterpay} alt="invoice" value="invoice" label="Invoice"/>
        <PaymentMethodRadio offset="offset-1" 
                            choiceChecked={props.choiceChecked} 
                            isMasterpassChecked={props.isMasterpassChecked} 
                            choosePaymentMethod={props.choosePaymentMethod} 
                            img={masterpass} alt="masterpass" value="masterpass" label="Masterpass"/>
        
    </div>
)

export default SelectPaymentMethod