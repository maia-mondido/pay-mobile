import React, { Component } from 'react'
import Header from './components/header'
import OrderSummary from './components/order-summary'
import SelectPaymentMethod from './components/select-payment-method'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDetailVisible: false,
      isCardChecked: false,
      isSwishChecked: false,
      isPayPalChecked: false,
      isInvoiceChecked: false,
      isMasterpassChecked: false,
      choiceChecked: false
    }
  }
  showDetails = () => {
    this.setState({
      isDetailVisible: true
    })
  }
  hideDetails = () => {
    this.setState({
      isDetailVisible: false
    })
  }
  choosePaymentMethod = (e) => {
    console.log('chosen', e.target.value)
    this.setState({ choiceChecked: e.target.checked })

    if(e.target.value === 'card'){
      this.setState({
        isCardChecked: true,
        isSwishChecked: false,
        isPayPalChecked: false,
        isInvoiceChecked: false,
        isMasterpassChecked: false
      })
    } else if (e.target.value === 'swish'){
      this.setState({
        isCardChecked: false,
        isSwishChecked: true,
        isPayPalChecked: false,
        isInvoiceChecked: false,
        isMasterpassChecked: false
      })
    } else if (e.target.value === 'payPal'){
      this.setState({
        isCardChecked: false,
        isSwishChecked: false,
        isPayPalChecked: true,
        isInvoiceChecked: false,
        isMasterpassChecked: false
      })
    } else if (e.target.value === 'invoice'){
      this.setState({
        isCardChecked: false,
        isSwishChecked: false,
        isPayPalChecked: false,
        isInvoiceChecked: true,
        isMasterpassChecked: false
      })
    } else if (e.target.value === 'masterpass'){
      this.setState({
        isCardChecked: false,
        isSwishChecked: false,
        isPayPalChecked: false,
        isInvoiceChecked: false,
        isMasterpassChecked: true
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <OrderSummary isDetailVisible={this.state.isDetailVisible}
                      showDetails={this.showDetails}
                      hideDetails={this.hideDetails}/>
        <SelectPaymentMethod isCardChecked={this.state.isCardChecked}
                             isSwishChecked={this.state.isSwishChecked}
                             isPayPalChecked={this.state.isPayPalChecked}
                             isInvoiceChecked={this.state.isInvoiceChecked}
                             isMasterpassChecked={this.state.isMasterpassChecked}
                             choosePaymentMethod={this.choosePaymentMethod}
                             choiceChecked={this.state.checked} />
        <Footer />
      </div>
    );
  }
}

export default App;
