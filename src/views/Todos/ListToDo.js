import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListToDo extends React.Component {
    state = {
        TodoList: [
            { id: '1', title: 'Doing homework' },
            { id: '2', title: 'Playing game' },
            { id: '3', title: 'Cho ca an' },
        ],
        EditToDo: {}
    }
    AddToDoList = (todo) => {
        this.setState({
            TodoList: [...this.state.TodoList, todo]
        })
        toast.success("them thanh cong")
    }
    handleDelete = (todo) => {
        let currenTodo = this.state.TodoList
        this.setState({
            TodoList: currenTodo.filter(item => item.id !== todo.id)
        })
        toast.success('xoa thanh cong')
    }
    handleOnClickEdit = (todo) => {

        let { EditToDo, TodoList } = this.state
        let isEmptyObj = Object.keys(EditToDo).length === 0
        if (isEmptyObj === false && EditToDo.id === todo.id) {
            let listTodoCopy = [...TodoList]
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))
            listTodoCopy[objIndex].title = EditToDo.title
            this.setState({
                ListToDo: listTodoCopy,
                EditToDo: {}
            })
            toast.success("sua thanh cong")
            return;
        }
        this.setState({
            EditToDo: todo
        })
    }
    handleOnEdit = (event) => {
        let ToDoCopy = { ...this.state.EditToDo }
        ToDoCopy.title = event.target.value
        this.setState({
            EditToDo: ToDoCopy
        })
    }
    render() {
        let { TodoList, EditToDo } = this.state;
        let isEmptyObj = Object.keys(EditToDo).length === 0
        return (
            <>
                <p>
                    <h1> ToDo App</h1>
                </p>
                <div className="todo-app-container">
                    <AddTodo
                        AddToDoList={this.AddToDoList}
                    />
                    <div className="list-todo-content">
                        {TodoList && TodoList.length > 0 &&
                            TodoList.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {EditToDo.id === item.id ?
                                                    < span >
                                                        {index + 1} - <input value={EditToDo.title}
                                                            onChange={(event) => this.handleOnEdit(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleOnClickEdit(item)}
                                        >
                                            {isEmptyObj === false && EditToDo.id === item.id
                                                ? 'Save' : 'Edit'
                                            }
                                        </button>
                                        <button
                                            onClick={() => this.handleDelete(item)}
                                            className="delete">Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default Color(ListToDo);