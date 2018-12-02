import React, { Component } from 'react';
import TodoItems from './ToDoItems';

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    render() {
        return (
            <div className="todolist">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={ data => this._inputElement = data} placeholder="Eintrag eingeben" />
                        <button type="submit">Hinzufügen</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
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
}

export default ToDoList;