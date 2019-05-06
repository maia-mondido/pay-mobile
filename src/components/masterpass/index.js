import React from 'react'
import masterpass from '../../assets/masterpass-btn.png'

const Masterpass = () => (  
    <div className="col-xs-12 offset-2" >
        <div className="form-group">
            <img className="masterpass-btn" src={masterpass} alt="masterpass"/>
            <div>
                <small>
                    <a href="#">Learn more about Masterpass</a>
                </small>
            </div>
        </div>
            
        
    </div>
)

export default Masterpass