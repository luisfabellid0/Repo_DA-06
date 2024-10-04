import './App.css';

import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.newItem],
      newItem: '',
    }));
  };

  removeItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.handleChange}
          placeholder="Agregar nuevo ítem"
        />
        <button onClick={this.addItem}>Agregar</button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => this.removeItem(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
