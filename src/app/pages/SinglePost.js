import React from 'react'
import { Switch, Route } from "react-router-dom";
import PostSnippet from '../components/post/PostSnippet'
import { FetchPosts } from '../../services/PostService'


class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePost: []
        }
    }

    componentDidMount() {

        FetchPosts().then(post => this.setState({ singlePost: post }))
    }

    render() {

        if (this.state.singlePost.length === 0) {
            return <h3>LOADING</h3>

        }



        const id = this.props.match.params.postId;

        return <main>
            <h1>{this.state.singlePost[id - 1].title}</h1>
        </main>


    }
}





export default SinglePost