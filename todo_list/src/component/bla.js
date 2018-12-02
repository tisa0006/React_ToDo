import React, { Component } from 'react';
import TodoItems from './ToDoItems';

class Bla extends Component {

    render() {
        return (
            <div className="todolist">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Eintrag eingeben" />
                        <button type="submit">Hinzufügen</button>
                    </form>
                </div>
            </div>
        );
    }
    
    addItem(item) {

    }
}

export default Bla;