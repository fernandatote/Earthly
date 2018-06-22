import React, { Component } from 'react';
// import { db } from './Db';
import RankingIcon from 'components/RankingIcon';

// This component calculate the number of icons to be displayed for each bar
class RankingBar extends Component{
  render(){
    let iconCount = parseInt(this.props.barLength / 5); //supposing No.1 = 100% is 20 icons

    return (
      <div className="ranking-bar" key="ranking-bar">
        <RankingIcon iconCount={iconCount} {...this.props}/>
      </div>
    )
  }
}


export default RankingBar;
