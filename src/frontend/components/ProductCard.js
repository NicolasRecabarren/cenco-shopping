import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // Cuando hagan click en el botón de agregar, llamaremos la función que agrega el producto al carrito.
    handleClick(e) {
        e.preventDefault();
        this.props.fAddToCart(this.props.productInfo);
    }

    render(){
        const {productInfo} = this.props;

        return (
            <div className="product-card">
                <div className="product-image">
                    <img src="https://home.ripley.cl/store/Attachment/WOP/D307/2000371100628/2000371100628-1.jpg"></img>
                </div>
                <div className="product-description">
                    <p className="product-title">{productInfo.name}</p>
                    <p className="product-price">$ {productInfo.price - productInfo.discount}</p>
                    <div className="add-cart" onClick={this.handleClick}>
                        <a href="#">
                            <span>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
                                    <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd" d="M7.5 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-2z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

ProductCard.propTypes = {
    productInfo: PropTypes.object.isRequired
};

export default ProductCard;