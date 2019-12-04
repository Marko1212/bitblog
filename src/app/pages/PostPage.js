import React from 'react'

import { Link } from 'react-router-dom'
import PostSnippet from '../components/post/PostSnippet';
import { FetchPosts } from '../../services/PostService'



class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allPosts: []
        }
    }
    a

    componentDidMount() {
        FetchPosts().then(posts => this.setState({ allPosts: posts }))
    }

    render() {



        if (this.state.allPosts.length === 0) {
            return <h2>Loading...</h2>
        }
        const mapPost = this.state.allPosts.map(post => {
            return <PostSnippet post={{ id: post.id, title: post.title, text: post.body }} />


        })


        return (
            <main>
                <h1>POSTS</h1>

                {mapPost}


                {/*        <PostSnippet post={{ id: this.state.allPosts[0].id, title: this.state.allPosts[0].title, text: this.state.allPosts[0].body }} />
                <PostSnippet post={{
                    id: this.state.allPosts[1].id, title: this.state.allPosts[1].title, text: this.state.allPosts[1].body
                }} />
                <PostSnippet post={{ id: this.state.allPosts[2].id, title: this.state.allPosts[2].title, text: this.state.allPosts[2].body }} />
                <PostSnippet post={{}} />
                <PostSnippet post={{}} /> */}
            </main>
        );
    }
}


export default PostPage;
