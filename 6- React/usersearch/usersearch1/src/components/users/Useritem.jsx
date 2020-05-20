import React, { Component } from 'react'

class Useritem extends Component {
    constructor(){
        super()
        // this.state = {
        //    "id": 1,
        //    "login": "mojombo",
        //    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4", "gravatar_id": "",
        //    "html_url": "https://github.com/mojombo",
        // }
    }
    render() {
        const {login, avatar_url, html_url} = this.props.user
        return (
            <div className = "card text-center">
                <img src={avatar_url} className="round-img" style = {{width:"60px"}} alt=""/>{/*this.state.avatar_url*/}
                <h3>{login}</h3>
                <a target = "_blank" href = {html_url} className = "btn btn-dark btn-sm my-1">more ...</a>
            </div>
        )
    }
}

export default Useritem
