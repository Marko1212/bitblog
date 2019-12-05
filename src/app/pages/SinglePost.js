import React from 'react'
import { Switch, Route } from "react-router-dom";
import PostSnippet from '../components/post/PostSnippet'
import { fetchSinglePost } from '../../services/PostService';
import AuthorName from '../components/author/AuthorName'


class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.id = this.props.match.params.postId;

        this.state = {
            post: null
        }
    }

    componentDidMount() {
        fetchSinglePost(this.id)
            .then(post => this.setState({ post: post }))
    }

    render() {
        if (!this.state.post) {
            return <h3>LOADING</h3>

        }

        return <main>
            <h1>{this.state.post.title}</h1>

            <AuthorName authorId={this.state.post.userId} />

            <div>sdlfkjdsflkdjsfld</div>

            {/*  <UserLatestPosts authorId={this.state.post.userId} /> */}
        </main>
    }
}





export default SinglePost