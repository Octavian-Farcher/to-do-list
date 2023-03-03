import React, { Component } from 'react'
import './ToDo.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task }
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)

    }

    handleToggle() {
        this.props.toggleTodo(this.props.id)
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm()
    };

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = <div className='Todo-edit-form'>
                <form onSubmit={this.handleUpdate}>
                    <li><input
                        type='text'
                        name='task'
                        placeholder='edit...'
                        value={this.state.task}
                        onChange={this.handleChange} /><button>Save</button></li>
                </form>
            </div>
        } else {
            result = <div className='Todo'>
                <li className={this.props.completed ? 'Todo-task-completed' : 'Todo-task'}
                    onClick={this.handleToggle}> {this.props.task}</li> <div><img
                        onClick={this.toggleForm}
                        src='https://icons.veryicon.com/png/o/miscellaneous/iconfonts/edit-423.png'
                        alt='edit'
                        className='Todo-buttons'
                    /><img
                        className='Todo-buttons'
                        src='https://www.svgrepo.com/show/78963/rubbish-bin.svg'
                        onClick={() => this.props.removeItem(this.props.id)}
                        alt='bin' /></div>

            </div>
        }
        return result

    }
}


export default ToDo