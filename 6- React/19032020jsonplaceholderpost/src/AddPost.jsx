import React, { Component } from 'react'
import axios from "axios"

class addPost extends Component {
    state={
        post:[]
    }
    submitHandler = e => {
        e.preventDefault();
        
        this.setState = post={ title: e.target.title.value, body: e.target.body.value }
        const post = {
          title: e.target.state.title,
          body: e.target.state.body
        }
        console.log(post);
        axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Add Post</h1>
                <label htmlFor="post">Title</label>
                <input type="text" name="title" />
                <label htmlFor="body">Body:</label>
                <textarea name="body" cols="32" rows="5" name="body"></textarea>
                <input type="submit" className="submit" value="Submit" />
                <hr/>
            </form>
            
        )
    }
}

export default addPost
