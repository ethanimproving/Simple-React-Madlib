import React from 'react';
import { ProductsRepository } from '../api';
import { Madlib } from './Madlib';
import { MadlibForm } from './MadlibForm';


export class Home extends React.Component {

  productsRepository = new ProductsRepository();

  state = {
    answers: [''],
    madlib: [
      'Our office cabinets have really ',
      ' food. Just thinking about it makes my stomach ',
      '. The snacks are ',
      ' and tastes like ',
      '. One day, I swear one of my meatballs started to ',
      '!'
    ]
  }

  render() {
    return (
      <>
        <div>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Madlib</a>
              </li>
            </ol>
          </nav>
          <div className="container p-5 bg-light">
            <div className="d-flex">
            </div>
          </div>
          <MadlibForm handleClick={this.handleClick.bind(this)}/>
          <Madlib madlib={ this.state.madlib } answers={ this.state.answers }/>
        </div>
      </>
    );
  }

  handleClick(event, answers) {
    this.setState({ answers: answers });
    event.preventDefault();
  };

  componentDidMount() {
    let productId = this.props.match.params.productId;
    if (productId) {
      this.productsRepository.getProduct(productId)
        .then(product => this.setState({product}));
    }
  }

}