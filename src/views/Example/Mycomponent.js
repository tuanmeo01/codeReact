import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponent from "./AddComponent";
class Mycomponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'manager', salary: '1000' },
            { id: 'job2', title: 'Oops', salary: '2000' },
            { id: 'job3', title: 'BA', salary: '3000' },
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currenJob = this.state.arrJobs;
        this.setState({
            arrJobs: currenJob.filter(item => item.id !== job.id)
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponents
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>

        )
    }
}
export default Mycomponent;