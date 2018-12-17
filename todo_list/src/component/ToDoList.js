import React, { Component } from 'react';
import TodoItems from './ToDoItems';
import "./ToDoList.css";

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={ data => this._inputElement = data} placeholder="Eintrag eingeben" />
                        <button type="submit">Hinzufügen</button>
                  </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }

    addItem(item) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items);

        item.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter((item) => {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
}

export default ToDoList;