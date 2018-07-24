import React, { Component } from 'react'


class FormItem extends Component {
  state = {
    name: "",
    picture: ""
  }
    

  handleSubmit = (event) => {
    event.preventDefault()
      fetch('/api/items', {
          method: 'POST',
          headers: new Headers({
          'Content-Type': 'application/json'
          }),
          body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(item => {
          console.log(item)
      })
    }

  handleChange = (event) => {
      const value = event.target.value
      const name = event.target.name
      this.setState({
        [name]: value
      })
    }
 
    render() {
    return (
     <div className="PlayaList-list">
        <form onSubmit={this.handleSubmit}>
        <h5>Ajouter un item</h5>
        <div>
            <input name="name" placeholder="Nom" onChange={this.handleChange}/>
            <input name="picture" placeholder="image" onChange={this.handleChange}/>
            <button type="submit">
            <span className="icon-checkmark"></span>
            </button>
        </div>
        </form>
    </div>
    )}
}

export default FormItem