import React, { Component } from 'react';

import Aux from './../../../High Order Components/Auxillary';
import Button from './../../Button/Button';


class OrderSummary extends Component{
    render(){
        const Igd = this.props.indegridents;
        const Summary = Object.keys(Igd).map(igkey=>{
            return (
                <li key={igkey}><span style={{textTransform:"capitalize"}}>{igkey}</span>: {Igd[igkey]}</li>
            );
        });
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Your Delicious Burger Contain Following Indegrients:</p>
                <ul>
                    {Summary}
                </ul>
                <p><b>Total Price: {this.props.price}$</b></p>
                <p>Continue to checkout?</p>
                <Button type="Danger" click={this.props.purchaseCancel}>CANCEL</Button>
                <Button type="Success" click={this.props.buyingHandler}>CONFIRM</Button>
            </Aux>
        );
    }
}


export default OrderSummary;