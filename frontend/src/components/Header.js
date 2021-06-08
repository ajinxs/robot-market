import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import { DataContext } from './Context'
import './css/Header.css'

export class Header extends Component {

    static contextType = DataContext;

    state = {
        toggle: false,
    }

    //burger menu when in mobile mode
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    };

    render() {

        const {toggle} = this.state;
        const {cart} = this.context;

        //show alert when 5 robots selected
        if(cart.length === 5){
            alert("5 Robots Selected");
        }

        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                
                <div className="logo">
                    <h1><Link to="/">ROBOT MARKET</Link></h1>
                </div>
                   
                <nav>
                    <ul className={toggle ? "toggle" : ""}> 
                        <li><Link to="/robot">Robots</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20" />   
                        </li>
                    </ul>
                    
                    <div className="navcart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
