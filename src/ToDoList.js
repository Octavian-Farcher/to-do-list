import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'
import "./TodoList.css"


class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = { toDo: [] }
        this.addItem = this.addItem.bind(this)
        this.generateTodo = this.generateTodo.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)


    }

    generateTodo(state) {

        return state.toDo.map(item => <ToDo
            completed={item.completed}
            task={item.text} id={item.id}
            removeItem={this.removeItem}
            updateTodo={this.updateTodo}
            toggleTodo={this.toggleCompletion} />)

    }

    removeItem(id) {
        this.setState({
            toDo: this.state.toDo.filter(item => item.id !== id)
        })

    }

    addItem(state) {
        this.setState({ toDo: [...this.state.toDo, state] })
    }
    //  updateing the todo.task by first verifying if the todo has the same id as the one passed in
    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.toDo.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: updatedTask }
            }
            return todo;
        });
        this.setState({ toDo: updatedTodos })
    }
    // as the in the function above we update our todo.completion to toggle an text effect on completed tasks 
    toggleCompletion(id) {
        const updatedTodos = this.state.toDo.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });

        this.setState({ toDo: updatedTodos })
    }


    render() {


        return (
            <div className='TodoList'>
                <h1>Todo List!<span>Your React App for Everyday tasks.</span></h1>

                <ul>
                    {this.generateTodo(this.state)}
                </ul>

                <NewToDoForm addItem={this.addItem} />

            </div >
        )
    }
}

export default ToDoList