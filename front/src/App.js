import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ListItemsContainer from './containers/ListItemsContainer'
import './PlayaList.css'
import logo from './mojito.ico'


class App extends Component {
 

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="PlayaList">

        <header className="PlayaList-header">
          <img src={logo} className="PlayaList-logo" alt="logo" />
          <h1 className="PlayaList-title">PlayaList</h1>
        </header>
        <BrowserRouter>
          <div className="PlayaList-list">
          {/* <Switch> */}
            <Route path="/" component={ListItemsContainer} />
          {/* </Switch> */}
          {/* <Item item={items[0]} />
          <Item item={items[1]} />
          <Item item={items[2]} />
          <Item item={items[3]} /> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
