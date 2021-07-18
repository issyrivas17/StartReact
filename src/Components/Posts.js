import React, { Component } from 'react'

export default class Posts extends Component {

    constructor(props) {
        super(props)
        console.log('POST VIEW!!!')
    }
    state = {
        posts: []
    }
    async componentDidMount(){ 
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json (); 
         this.setState({posts:data}) 
    }

    render() {
        return (
            <div>
            <h1>Posts</h1>     
        {
            this.state.posts.map(post => {
                return <div>
                    <h1>{post.title}</h1> 
                    <p>{post.body}</p>
                </div> 
            })
        }
            </div>
        )
    }
}

