import React, { Component } from 'react'
import Robots from './section/Robots';
import Cart from './section/Cart';
import Payment from './section/Payment';
import { Route } from "react-router-dom";

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Robots} exact />
                <Route path="/robot" component={Robots} exact />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
            </section>
        )
    }
}

export default Section
