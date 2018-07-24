import React, { Component } from 'react'


class FormItem extends Component {
    constructor(props){
        super(props)
        
        this.setState = {
            name: "",
            picture: ""
        }

    newItem = () => {
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
} 
    render() {
    return (
     <div className="PlayaList-list">
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
    </div>
    )}
}

export default FormItem