import React, { Component } from 'react'
import Useritem from "./Useritem.jsx"

class Users extends Component {
    state = {
        users:[
                {
                    "id": 1,
                    "login": "mojombo",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4", "gravatar_id": "",
                    "html_url": "https://github.com/mojombo",
                },{
                    "id": 2,
                    "login": "defunkt",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4", "gravatar_id": "",
                    "html_url": "https://github.com/defunkt",
                },{
                    "id": 3,
                    "login": "pjhyett",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4", "gravatar_id": "",
                    "html_url": "https://github.com/pjhyett",
                }
            ]
    }
    
    render() {
        const userStyle ={
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem"
        }    
        return (
            <div style={userStyle}>
                {this.state.users.map(item => (
                    <Useritem key={item.id} user={item} />
                ))}
            </div>
        )
    }
}

export default Users
