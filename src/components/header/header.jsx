import "./header.scss"
import React from 'react'
import logo from "../../assets/images/header/logo.png"
import card from "../../assets/images/header/card.png"
import list from "../../assets/images/header/list.svg"

import aksiya from "../../assets/images/header/aksiya.png"
import pitsa from "../../assets/images/header/pitsa.png"
import sushii from "../../assets/images/header/Sushi.png"
import natipka from "../../assets/images/header/napitka.png"
import zakuzka from "../../assets/images/header/zakuzka.png"
import kombo from "../../assets/images/header/kambo.png"
import disert from "../../assets/images/header/disert.png"
import sous from "../../assets/images/header/sous.png"
import  { Component } from 'react'

export class Header extends Component {
  render() {
        let {handleShow, }=this.props;

    return (
    <>
    <header>
      <div className="container">
        <nav>
          <div className="logo"><img src={logo} alt="" />  <p>Куда пицца</p></div>
        <ul className="navbar">
          <li>
            <a href="#aksiya">Акции</a>
          </li>
          <li>
            <a href="#pitsa">Пицца</a>
          </li>
          <li>
            <a href="#sushi">Суши</a>
          </li>
            <li>
            <a href="#napitka">Напитки</a>
          </li>
            <li>
            <a href="#zakuzka">Закуски</a>
          </li>
 <li>
            <a href="#kombo">Комбо</a>
          </li>
           <li>
            <a href="#disert">Десерты</a>
          </li>
          <li>
            <a href="#sous">Соусы</a>
          </li>
            <li>
            <a href="#drukoy">Другое</a>
          </li>
            </ul>
            <button onClick={handleShow} className="btnn"> <img src={card} alt="" /> <span>0</span> ₽</button> 
            <img className="list" src={list} alt="" />
        </nav>
      </div>
      
    </header>

     <div className="container">
    <div className="img">
          <button><img src={aksiya} alt="" /></button>
          <button><img src={pitsa} alt="" /></button>
          <button><img src={sushii} alt="" /></button>
          <button><img src={natipka} alt="" /></button>
          <button><img src={zakuzka} alt="" /></button>
          <button><img src={kombo} alt="" /></button>
          <button><img src={disert} alt="" /></button>
          <button><img src={sous} alt="" /></button>

       
    </div>



      </div> 
      </>
    )
  }
}


export default Header