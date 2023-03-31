import Card from "../components/card/card";
import { Product } from "../components/data/Product";
// import { Category } from "../components/data/Category";
import Header from "../components/header/header";
import "./app.scss";
import React, { Component } from "react";
// import  from "react-bootstrap/Offcanvas";
import SelectCard from "../components/card/Select_card";
import { ToastContainer, toast } from "react-toastify";
import { Alert, Offcanvas } from "react-bootstrap";
import { Cardprducts } from "../components/const/index";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      cartProducts: JSON.parse(localStorage.getItem(Cardprducts)) || [],
    };
  }
  render() {
    const handleClose = () => {
      this.setState({ show: false });
    };
    const handleShow = () => {
      this.setState({ show: true });
    };

    const sum = () => {
      this.state.cartProducts.reduce((acc, el) => {
        return acc + el.price * el.quantity;
      }, 0);
    };

    const getProduct = (id) => {
      let newCartProducts;
      let productInCart = this.state.cartProducts.find((el) => el.id === id);
      if (productInCart) {
        toast.info("it exists cart");
        newCartProducts = this.state.cartProducts.map((pr) => {
          if (pr.id === id) {
            pr.quantity++;
          }
          return pr;
        });
      } else {
        let findProduct = Product.find((el) => el.id === id);
        findProduct.quantity = 1;
        newCartProducts = [...this.state.cartProducts, findProduct];
        toast.success("Product added successfully");
      }
      this.setState({ cartProducts: newCartProducts });
      localStorage.setItem(Cardprducts, JSON.stringify(newCartProducts));
    };

    const increase = (id) => {
      let newCartProducts = this.state.cartProducts.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });
      this.setState({ cartProducts: newCartProducts });
      localStorage.setItem(Cardprducts, JSON.stringify(newCartProducts));
    };

    const decrease = (id) => {
      let newCartProducts;
      let findCartProduct = this.state.cartProducts.find((el) => el.id === id);
      if (findCartProduct.quantity === 1) {
        newCartProducts = this.state.cartProducts.filter((el) => el.id !== id);
      } else {
        newCartProducts = this.state.cartProducts.map((pr) => {
          if (pr.id === id) {
            pr.quantity--;
          }
          return pr;
        });
      }
      this.setState({ cartProducts: newCartProducts });
      localStorage.setItem(Cardprducts, JSON.stringify(newCartProducts));
    };

    return (
      <>
        <div className="heds">
          <Header handleShow={handleShow} sum={sum} />
        </div>
        <main>
          <ToastContainer autoClose={300} />

          <section className="pizzaa">
            <div className="container">
              <div className="filter">
                <h2>Пицца</h2>
                <button>Фильтры</button>
              </div>
              <div className="row">
                {Product.map((el) => (
                  <div
                    key={el.id}
                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                  >
                    <Card {...el} getProduct={getProduct} />
                  </div>
                ))}
              </div>
              <Offcanvas
                placement="end"
                show={this.state.show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Ваш заказ</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {this.state.cartProducts.length !== 0 ? (
                    this.state.cartProducts.map((el) => (
                      <SelectCard
                        key={el.id}
                        {...el}
                        decrease={decrease}
                        increase={increase}
                      />
                    ))
                  ) : (
                    <Alert variant="warning">Empty porduct </Alert>
                  )}
                  <div className="allSum_footer">
                    <p className="allSum">
                      {" "}
                      Итого:{" "}
                      {this.state.cartProducts.reduce((acc, el) => {
                        return acc + el.price * el.quantity;
                      }, 0)}{" "}
                      ₽
                    </p>
                    <button className="bton">Оформить заказ</button>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
