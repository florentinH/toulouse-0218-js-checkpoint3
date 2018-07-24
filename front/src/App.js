import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ListItemsContainer from './containers/ListItemsContainer'
import './PlayaList.css'
import logo from './mojito.ico'

// const items = [
//   {
//     name: 'Tongs',
//     picture: '/images/tongs.jpg'
//   },
//   {
//     name: 'Ballon de plage',
//     picture: '/images/ballon.jpg'
//   },
//   {
//     name: 'Raquettes de plage',
//     picture: '/images/raquettes.jpg'
//   },
//   {
//     name: 'Bouée grenouille',
//     picture: '/images/bouee-grenouille.jpg'
//   },
// ]

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

        {/*<div className="PlayaList-list">
          <form>
            <h5>Ajouter un item</h5>
            <div>
              <input name="name" placeholder="Nom" />
              <input name="picture" placeholder="image" />
              <button type="submit">
                <span className="icon-checkmark"></span>
              </button>
            </div>
          </form>
        </div>*/}
        <BrowserRouter>
          <div className="PlayaList-list">
          {/* <Switch> */}
            <Route exact path="/" component={ListItemsContainer} />
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
