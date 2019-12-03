import React from 'react'
import { Switch, Route } from "react-router-dom";
import PostSnippet from './PostSnippet'


class PostPage extends React.Component {
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        return <>
            <h1>Post Page {this.props.match.params.postId}</h1>
        </>


    }
}

export default PostPage