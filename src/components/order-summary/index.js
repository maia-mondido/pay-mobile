import React from 'react'

const OrderSummary = (props) => (  
    <div className="card card-order col-xs-12 col-lg-3" >
        <div className="card-body row card-content">
            <div className="col-xs-3 ">
                <h6 className="card-title">Order summary</h6>
            </div>
            <div className="offset-1 mr-0">
                1 234,00 SEK
            </div>          
        </div> 
        { props.isDetailVisible ? <>
        <div className="row card-content">
            <div className="col-xs-12 ">
                <h5 className="card-title">Payment details</h5>
            </div>
        </div>
        <div className="row card-content">
            <div className="col-xs-12 ">
                <small>Payee</small>
            </div>
        </div>
        <div className="row card-content content-border">
            <div className="col-xs-12 ">
                <p>Merchant 1(1234567-8)</p>
            </div>
        </div>
        <div className="row card-content">
            <div className="col-xs-12 ">
                <small>Payer</small>
            </div>
        </div>
        <div className="row card-content content-border">
            <div className="col-xs-12 ">
                <p>John Doe</p>
            </div>
        </div>
        <div className="row card-content">
            <div className="col-xs-12 ">
                <small>Payment number</small>
            </div>
        </div>
        <div className="row card-content content-border">
            <div className="col-xs-12 ">
                <p>1234567890</p>
            </div>
        </div>
        <div className="row card-content">
            <div className="col-xs-12 ">
                <small>Timestamp</small>
            </div>
        </div>
        <div className="row card-content content-border">
            <div className="col-xs-12 ">
                <p>2019-03-26 12:14:46</p>
            </div>
        </div>
        <div className="card-body row">
            <div className="col-xs-12">
                <h5 className="card-title">Basket items</h5>
            </div>
        </div>
        <div className="row card-content margin-bottom">
            <div className="col-xs-5 ">
                <small className="special-font">Product name</small>
            </div>
            <div className="offset-2">
                <small className="special-font ml-2">1 234,00 SEK</small>
            </div>
        </div>
        <div className="row card-content">
            <div className="col-xs-5 ">
                <small>Price: 1 234,00 SEK</small>
            </div>
            <div className="offset-2 mr-1">
                <small>Disc. %: 0.00%</small>
            </div>
        </div>
        <div className="row card-content content-border">
            <div className="col-xs-6 ">
                <small>Qty: 1</small>
            </div>
            <div className="vat-margin">
                <small>VAT: 23.00%</small>
            </div>
        </div> </>: ''}
        
        {!props.isDetailVisible ? <div className="row details">
            <div className="col-xs-12 ">
                <h6 className="card-title">See order details 
                    <span className="container-down" onClick={props.showDetails}><span className="triangle-down"></span></span>
                </h6>
            </div>
        </div> : ''}
        {props.isDetailVisible ? <div className="row details details-hide">
            <div className="col-xs-12 ">
                <h6 className="card-title">Hide order details 
                    <span className="container-up" onClick={props.hideDetails}> <span className="triangle-up"></span></span>
                </h6>
            </div>
        </div> :''}
    </div>
)

export default OrderSummary