import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import '../css/Robots.css';

export class Robots extends Component {

    static contextType = DataContext;

    render() {
       const {robots} = this.context;

       return (
           
            <div id="robot">
                {
                    robots.map(robot =>(
                        <div className="card" key={robot.name}>
                            
                            <Link to={`/robot/${robot.name}`}>
                                <img src={robot.image} alt=""/>
                            </Link>
                            
                            <div className="content">
                                <h3>{robot.name}</h3>
                                <span> ฿{robot.price.split(".").join(".")}</span>
                                
                                <p>{robot.stock}</p>
                                <p>{robot.createdAt.slice(0,-14).split('-').reverse().join('-')}</p>
                                
                                <p>{robot.material}</p>
                            </div>
                            
                            <div>
                                <button onClick={()=> this.context.addCart(robot.name)}>Add To Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
   }
}

export default Robots
