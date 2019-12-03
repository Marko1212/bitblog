import React from 'react'
import Post from '../components/post/Post'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return <>
            <h2>POSTS</h2>
            <Post />
            <Post />
            <Post />
        </>
    }
}


export default Home;
