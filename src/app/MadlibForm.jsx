import React from 'react';
import { Redirect } from 'react-router-dom';

export class MadlibForm extends React.Component {
  
  state = {
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: ''
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
          pathname: this.state.redirect,
          state: {
              message: this.state.message
          }
      }} />
    }

    return (
      <>
        <div className="card">
          <div className="card-body">
            <form>
              <h2>Please enter a(n):</h2>
              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="word1">adjective</label>
                  <input
                    type="text"
                    className="form-control"
                    name="word1"
                    id="word1"
                    value={this.state.word1}
                    onChange={e => this.setState({ word1: e.target.value })}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="word2">verb</label>
                  <input
                    type="text"
                    className="form-control"
                    name="word2"
                    id="word2"
                    value={this.state.word2}
                    onChange={e => this.setState({ word2: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="word3">adjective</label>
                  <input
                    type="text"
                    className="form-control"
                    name="word3"
                    id="word3"
                    value={this.state.word3}
                    onChange={e => this.setState({ word3: e.target.value })}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="word4">noun</label>
                  <input
                    type="text"
                    className="form-control"
                    name="word4"
                    id="word4"
                    value={this.state.word4}
                    onChange={e => this.setState({ word4: e.target.value })}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="word5">verb</label>
                  <input
                    type="text"
                    className="form-control"
                    name="word5"
                    id="word5"
                    value={this.state.word5}
                    onChange={e => this.setState({ word5: e.target.value })}
                  />
                </div>
              </div>
            </form>
            <button className="btn btn-primary"
              onClick={ e => this.props.handleClick(e, [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5])}>
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}