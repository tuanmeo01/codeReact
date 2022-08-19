import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from "../../assets/images/testimg.jpg"
import {connect} from 'react-redux'
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 1000)
    }

    render() {
        console.log('>>> redux', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div> home page  </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
export default (Color(Home));