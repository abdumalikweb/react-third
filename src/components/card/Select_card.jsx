import React, { Component } from 'react'
import "./SelectCard.scss";

export class SelectCard extends Component {
  render() {
      let {img, name, desc, price,quantity, id,increase,decrease} = this.props

    return (
                        <div className="card mb-3 Select_card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={img}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="cart-title">{name} </h5>
                          <p className="cart-text">
                            {desc}     
                          </p>
                       <div className="pricee">
                        <p className="carl-text">
                            <button className='btn ' onClick={()=> decrease(id)}>-</button>
                            <small className="text-muted mx-2">
                              {quantity}
                            </small>
                            <button className='btn 'onClick={()=> increase(id)}>+</button>

                          </p>
                           <p className="carl-tt">
                            {price}₽  
                          </p>
                          
                       </div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
  }
}

export default SelectCard