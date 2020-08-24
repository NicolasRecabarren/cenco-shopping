import React, { Component } from 'react';
import Cart from '../Cart';

export default class Navbar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src="img/logo.png"></img></a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                    <Cart 
                        cartProducts={this.props.cartProducts} 
                        fAddToCart={this.props.fAddToCart} 
                        fDiscountFromCart={this.props.fDiscountFromCart} 
                        totalToPay={this.props.totalToPay} 
                    />
                </div>
            </nav>
        )
    }
}