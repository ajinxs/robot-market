import React, { Component } from 'react'
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

export class Cart extends Component {

    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {

        const { cart, increase, decrease, removeRobot, total } = this.context;

        if(cart.length === 0){
            return <h2 className="norobots">No Robots Selected</h2>
        }else{

            return (
                <>
                    {
                        cart.map(robot => (
                            <div className="details" key={robot.name}>
                                <img src={robot.image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{robot.name}</h2>
                                    </div>
                                    <span>฿{robot.price}</span>
                                    <p>{robot.material}</p>
                                    
                                    <div className="amount">
                                        <button className="count" onClick={() => decrease(robot.name)}> - </button>
                                        <span>{robot.stock}</span>
                                        <button className="count" onClick={() => increase(robot.name)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeRobot(robot.name)}>X</div>
                            </div>
                        ))
                    }
    
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ฿{total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h3>
                    </div>
                </>
            )
        }
    }      
}

export default Cart
