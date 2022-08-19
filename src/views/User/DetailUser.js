import React from "react";
import { withRouter } from "react-router-dom"
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        Users: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({
            Users : res && res.data && res.data.data ? res.data.data : {}
        })
    }
    handleBack=()=>{
        this.props.history.push("/user")
    }
    render() {
        let { Users } = this.state;
        let isEmptyObject = Object.keys(Users).length === 0;
        return (
            <>
                <div>HEllo detail user</div>
                {isEmptyObject === false &&
                    <>
                        <div>
                            user name: {Users.first_name} - {Users.last_name}
                        </div>
                        <div>
                            Email: {Users.email}
                        </div>
                        <div>
                            <img src={Users.avatar} />
                    </div>
                    <div>
                        <button type="button"
                        onClick={()=> this.handleBack()}
                        >Back</button>
                    </div>
                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser);