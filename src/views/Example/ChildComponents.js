import React from "react";
import './demo.scss'
class ChildComponents extends React.Component {
    state = {
        showJobs: false
    }
    handleOnClick = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }
    render() {
        let { arrJobs } = this.props; //dinh nghia de truyen du lieu tu component cha
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleOnClick()} >Show</button>
                    </div>
                    :
                    <>
                        <div className="jobs-list">{
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} $ 
                                        <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button className="btn-show" onClick={() => this.handleOnClick()} >Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponents;