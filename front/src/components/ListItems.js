import React, { Component } from 'react'
import Item from './Item'

class ListItems extends Component {
  

  render() {
    const {items} = this.props
    console.log(items)
    return (
      <div>
      {
        this.props.items.map(
          (item) => <Item  item={item}/>
        )
      }
      </div>
    )
  }
}

export default ListItems
