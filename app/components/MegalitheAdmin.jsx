import React, {Component} from 'react';
import {connect} from 'react-redux';

class MegalitheAdmin extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render () {

    return (
      <div>
        <header>
          <h2>Boilerplate</h2>
        </header>
      </div>
    )
  }

}


function mapStateToProps(state) {
};

export default connect(mapStateToProps) (MegalitheAdmin);
