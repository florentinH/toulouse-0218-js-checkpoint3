import React, { Component } from 'react'
import Item from './ListItems'

class ListItems extends Component {
  

  render() {
    const {items} = this.props
    
    return (

      this.props.items.map(
        (item) => <Item  />
      )
    )
  }
}

export default ListItems
