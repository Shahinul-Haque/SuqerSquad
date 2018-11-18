import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../action'
class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Hero Squad</h4>
        <ul className='list-group'>
          {
            this.props.heros.map(hero =>{
              return(
                 <li key={hero.id} className='list-group-item'>
                   <div className='list-item'>{hero.name}
                   </div>
                   <div className='list-item right-button'
                   onClick={()=> this.props.removeCharacterById(hero.id)}
                   >
                    × </div>
                 </li>
                
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    heros:state.heros
  }
}

export default connect(mapStateToProps,{ removeCharacterById },null)(HeroList);