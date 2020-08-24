import React, { Component } from 'react';
import CartDetails from './CartDetails';

export default class Cart extends Component {

    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }

        this.viewCartDetails = this.viewCartDetails.bind(this);
        this.hideCartDetails = this.hideCartDetails.bind(this);
    }

    viewCartDetails(e){
        e.preventDefault();
        this.setState({ showDetails: true });
    }

    hideCartDetails(){
        this.setState({ showDetails: false });
    }
    
    render(){
        return (
            <div>
                <a href="#" onClick={this.viewCartDetails}>
                    <svg width="26" height="26" viewBox="0 0 16 16" className="bi bi-bag-fill text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
                    </svg>
                </a>
                <CartDetails 
                    showModal={this.state.showDetails} 
                    fHideCartDetails={this.hideCartDetails} 
                    fAddToCart={this.props.fAddToCart} 
                    fDiscountFromCart={this.props.fDiscountFromCart} 
                    totalToPay={this.props.totalToPay} 
                    cartProducts={this.props.cartProducts} 
                />
            </div>
        )
    }
}