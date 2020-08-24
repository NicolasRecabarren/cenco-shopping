import React, {Component} from 'react';

export default class CartDetails extends Component{

    emptyCart(){
        return (
            <div className="cartsy-mini-cart-empty-message">
                <img src="https://cartsy.redq.io/furniture/wp-content/themes/cartsy/assets/images/not-found-alt.svg" alt="no product found"></img>
                <h3>No hay productos en el carro.</h3>
            </div>
        )
    }

    render(){
        const showHideClassName = this.props.showModal ? "modal d-block" : "modal d-none";
        const cartProducts = this.props.cartProducts;

        return (
            <div className={showHideClassName} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Mi Carrito</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.fHideCartDetails}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="cart-list-products">
                                {cartProducts.length > 0
                                    ? cartProducts.map( e => {
                                        return (
                                            <li key={e._id} className="cart-product">
                                                <img src="https://home.ripley.cl/store/Attachment/WOP/D307/2000371100628/2000371100628-1.jpg"></img>
                                                <div className="cart-product-info">
                                                    <p className="product-title">{e.name}</p>
                                                        <span className="product-price">Precio unitario: $ {e.price} - Descuento: $ {e.discount}</span>
                                                    <div className="product-counter-container">
                                                        <div className="product-counter">
                                                            <span data-type="minus" data-source="mini_cart" className="product-decrease" onClick={ () => this.props.fDiscountFromCart(e._id) }>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="1.25" viewBox="0 0 10 1.25">
                                                                    <path data-name="Path 9" d="M142.157,142.158h-4.375v1.25h10v-1.25h-5.625Z" transform="translate(-137.782 -142.158)" fill="#fff"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="product-counter-value">
                                                                <span className="quantity">{e.quantity}</span>
                                                            </span>
                                                            <span data-type="plus" data-source="mini_cart" className="product-increment" onClick={ () => this.props.fAddToCart(e) }>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                                                    <path data-name="Path 9" d="M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z" transform="translate(-137.782 -137.783)" fill="#fff"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="product-total">
                                                            Total $ { (e.price-e.discount) * e.quantity}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                    : this.emptyCart()
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            Total a Pagar: $ {this.props.totalToPay} <button type="button" className="btn btn-primary">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}