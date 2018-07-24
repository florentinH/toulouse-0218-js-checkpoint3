import React, { Component } from 'react'
import ListItems from '../components/ListItems'
// import FormItem from './FormItem'

class ListItemsContainer extends Component {
  state = {
    items: []
  }

    componentDidMount () {
      fetch('/api/items')
      .then(res => res.json())
      .then(items => this.setState({
        items: items
    }))
  }

  render () {
    return (
    <div>
      <ListItems
        items={this.state.items}  />
      {/* <FormItem 
        items={this.state.items}/> */}
    </div>
    )}
}

export default ListItemsContainer