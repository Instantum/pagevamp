import React ,{Component} from 'react';
import "./UserInformation.css";

class UserInformation extends Component{
  render(){
    return(
      <div className="user-information">
        <div className="pp">
          <img src={this.props.pp} height= "50px" width= "50px"/>
        </div>
        <div className= "name">
          {this.props.name}<br/>
          {this.props.cp}
        </div>
          <button className="btn-rm"> Read More</button>
      </div>
    )
  }
}

export default UserInformation;
