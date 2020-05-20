import React, { Component } from 'react'
import axios from "axios"

class Content extends Component {
    state={
        posts:[]
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }

    render() {
        return (
            <>
                <h1>Posts</h1>
                { this.state.posts.map(posts =>
                <div key={posts.id}>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                    
                </div>)}
            </>
        )
    }
}

export default Content
