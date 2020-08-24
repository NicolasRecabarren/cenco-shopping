import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import ProductCard from './components/ProductCard';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            cart: [],
            totalToPay: 0
        };

        this.addToCart = this.addToCart.bind(this);
        this.discountFromCart = this.discountFromCart.bind(this);
    }
    
    // Agregamos el producto al carrito.
    addToCart(product) {
        const cart = this.state.cart;

        const productoEnCarrito = cart.findIndex( e => e._id === product._id)
        
        if( productoEnCarrito > -1 ){
            // Si el producto ya está en el carrito solo aumentamos la cantidad.
            cart[productoEnCarrito].quantity += 1;
        } else {
            // Sino, lo agregaremos al arreglo "cart" del estado.
            product.quantity = 1;
            cart.push(product);
        }
        
        this.setState({ cart })
        this.calculateTotalToPay();
        alert("Producto agregado.");
    }

    // Quitamos los productos uno a uno según su cantidad.
    discountFromCart(productId) {
        const cart = this.state.cart;
        const productoEnCarrito = cart.findIndex( e => e._id === productId);

        cart[productoEnCarrito].quantity -= 1;
        if(cart[productoEnCarrito].quantity === 0){
            
            this.setState({ 
                cart: cart.filter( e => e.quantity > 0)
            });
        } else {
            this.setState({ cart });
        }
        this.calculateTotalToPay();
    }

    // Calculamos el total a pagar.
    calculateTotalToPay() {
        let total = 0;
        this.state.cart.forEach( e => {
            total += ((e.price - e.discount) * e.quantity);
        });

        this.setState({totalToPay: total})
    }

    async componentDidMount() {
        // Vamos a buscar el listado de productos a nuestra API.
        fetch('http://localhost:3000/api/products')
            .then( res => res.json() )
            .then( products => this.setState({products}));
    }

    render() {
        return (
            <div className="content">
                <Navbar cartProducts={this.state.cart} fDiscountFromCart={this.discountFromCart} fAddToCart={this.addToCart} totalToPay={this.state.totalToPay} />
                <div className="container">
                    <div className="product-list-container grid-cols-xxl-4 grid-cols-md-3 grid-cols-xs-2">
                        { 
                            this.state.products.map( 
                                product => <ProductCard 
                                                key={product.code} 
                                                productInfo={product} 
                                                fAddToCart={this.addToCart} 
                                            /> 
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;