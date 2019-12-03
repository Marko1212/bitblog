import React from 'react'

import { Link } from 'react-router-dom'
import PostPage from '../components/post/PostPage'
import PostSnippet from '../components/post/PostSnippet';



class Home extends React.Component {
    render() {
        return (
            <main>
                <h1>POSTS</h1>

                <PostSnippet post={{ id: 345, title: "sdkfj" }} />
                <PostSnippet post={{ id: 456, title: 'fff' }} />
                <PostSnippet post={{}} />
                <PostSnippet post={{}} />
                <PostSnippet post={{}} />
            </main>
        );
    }
}


export default Home;
