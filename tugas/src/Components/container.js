import React from 'react';
import Inner from './inner.js';

class Container extends React.Component {

  render(){
    return(
      <div className='container'>
        <Inner power={50}/>
        <Inner power={10}/>
        <Inner power={3}/>
      </div>
    )
  }
}

export default Container;