import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewToDoForm.css'

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', id: uuidv4(), completed: false }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)




    }

    onSubmit(evt) {
        evt.preventDefault()
        if (this.state.text !== '') {
            this.props.addItem(this.state)
            this.setState({ text: '', id: uuidv4(), completed: false })
        };
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {


        return (
            <form className='NewTodoForm' onSubmit={this.onSubmit}>
                <p>Write your todo's below...</p>
                <div>
                    <input onChange={this.handleChange} value={this.state.text} placeholder={'New ToDo'} name='text'></input>
                    <button>Add Todo</button>
                </div>
            </form>
        )
    }
}

export default NewToDoForm