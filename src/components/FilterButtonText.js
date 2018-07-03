import React, { Component } from 'react';
//This component displays a category in primary categories
class FilterButtonText extends Component{
  constructor(props){
      super(props);
    }
  render() {
    let catTextStyle = {
      textAlign: 'center',
      fontSize: '12pt',
      margin: 0
    };
    let category = this.props.category;
    let topic = this.props.topic;
    let dbtext = "";
    let text = "";

    if (this.props.name === "stepOne"){
      dbtext = `${category}`;
      text = dbtext.toUpperCase();
    }else {
      dbtext = `${topic}`;
      text = dbtext.toUpperCase();
  }
    return (
      <p style={catTextStyle}>
        {text}
      </p>
      ); 
    }
  }



export default FilterButtonText;