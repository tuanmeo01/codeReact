import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleSalaryChange = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleClickSubmit = (event) => {
        event.preventDefault() // ngan k load lai trang
        if (!this.state.title || !this.state.salary) {
            alert("missing input")
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary:''
        })
    }

    render() {
        return (
            <div><form>
                <label htmlFor="fname">Job title</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleTitleChange(event)}
                /><br />
                <br />
                <label htmlFor="lname">Job salary</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleSalaryChange(event)}
                /><br />
                <br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleClickSubmit(event)}
                />
            </form></div>
        )
    }
}
export default AddComponent;