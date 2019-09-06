import React, { Component } from 'react';

class DashboardPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-6 col-sm-offset-3">
            <br></br><br></br> <h2 style={{"color":"#0fad00"}}>Success</h2>
            <span style={{"font-size":"76px","color": "#3c9610"}}>&#10003;</span>
            <h3>You are on DashboardPage</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
