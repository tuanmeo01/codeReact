import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClick = () => {
        if (!this.state.title) {
            toast.error("thieu du lieu dau vao")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.AddToDoList(todo)
        this.setState({
            title: ''
        })
        
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type='text' value={title}
                    onChange={(event) => this.handleOnChange(event)}
                />
                <button className="add" type='button'
                    onClick={() => this.handleClick()}
                >Add</button>
            </div>
        )
    }
}
export default AddTodo;