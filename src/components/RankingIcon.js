import React, { Component } from 'react';

//This component renders icons for a ranking chart bar
class RankingIcon extends Component{
  render(){
    let iconCount = this.props.iconCount; //props from RankingBar
    let topic = this.props.topic; //props passed down
    let image =  <img src={require(`images/${topic}.png`)} />   //image tag for icon
    let renderData = []; //variable to hold iconCount number of icons

    for(let i=0; i<iconCount; i++){
      renderData.push(image);
    }

    return (
      <div className="ranking-icon">
        {renderData}
      </div>
    )
  }
}

export default RankingIcon;
