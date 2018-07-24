import React, { Component } from 'react'
import Item from './Item'
import FormItem from '../containers/FormItem'


class ListItems extends Component {
  

  render() {
    const {items} = this.props
    console.log(items)
    // const item = items.find(item => item.id === this.props.item.id)
    return (
      <div>
        <FormItem 
        items={items} />
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
