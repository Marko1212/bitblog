import React from 'react'
import { Switch, Route } from "react-router-dom";
import PostSnippet from '../components/post/PostSnippet'


class SinglePost extends React.Component {
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        return <>
            <h1>Post {this.props.match.params.postId}</h1>
        </>


    }
}

export default SinglePost