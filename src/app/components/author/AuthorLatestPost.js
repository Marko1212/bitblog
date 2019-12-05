import React from 'react'
import { fetchAuthorPost } from '../../../services/PostService';
import { Link } from 'react-router-dom'



class AuthorLatestPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPostsAuthor: []

        }

    }

    componentDidMount() {
        fetchAuthorPost(this.props.postId).then(allPost => this.setState({ allPostsAuthor: allPost }))
    }



    render() {

        if (this.state.allPostsAuthor.length === 0) {
            return <h4>loading...</h4>
        }

        const latestPost = this.state.allPostsAuthor.map(res => {

            return <p><Link to={`/posts/${res.id}`}>{res.title}  </Link></p >


        })


        return <>

            <h3>3 more posts from same author</h3>

            {latestPost.slice(0, 3)}


        </>
    }

}


export default AuthorLatestPost;