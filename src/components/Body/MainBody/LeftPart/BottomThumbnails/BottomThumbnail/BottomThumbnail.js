import React ,{Component} from 'react';
import UserInformation from './UserInformation';
import "./BottomThumbnail.css";

class BottomThumbnail extends Component{
  render(){
    var divStyle = {
  		height : "200px",
  		width : "210px",
  		content : 'url(' +this.props.imgsrc + ')'
  	};
    return(
      <div className="bottom-thumbnail">
        <div className= "photo" style={divStyle}></div>
        <b>{this.props.title}</b><br/>
        {this.props.content}
        <UserInformation
          pp= {this.props.pp}
          name= {this.props.name}
          cp= {this.props.cp}
          link = {this.props.profilelink}
        />
      </div>
    )
  }
}

export default BottomThumbnail;
