
import React, { Component } from 'react'
import "./card.scss"

export class Card extends Component {
  render() {
   
      let {img, name, desc, price,id, getProduct} = this.props
    return (
<div className='c'>
<div className="card">
<img src={img} className ="productimg" alt=".." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{desc}</p>
     <div className="cardFooter">
    <button  className=" btnColor" onClick={()=> getProduct(id)}>Выбрать</button>
   <h4 className='price'>от {price}₽</h4>
  </div>
  </div>
 
</div>
    </div> 
      
    )
  }
}

export default Card


