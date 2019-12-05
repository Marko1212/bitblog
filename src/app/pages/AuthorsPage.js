import React from 'react'
import { Link } from "react-router-dom";
import { FetchAuthors } from '../../services/AuthorService'
import { fetchNumberOfPosts } from '../../services/PostService'


class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allAuthor: [],
            counterPostsPerAuthor: []
        }
    }

    componentDidMount() {
        const array = []
        FetchAuthors().then(authors => this.setState({ allAuthor: authors }))
        for (let i = 0; i < this.state.allAuthor.length; i++) {
        fetchNumberOfPosts(this.state.allAuthor[i].id).then(data => array.push(data)).then(data => this.setState({counterPostsPerAuthor: data}))
        }
        console.log(array)
    }

    render() {

        console.log(this.state.allAuthor);
        console.log(this.state.counterPostsPerAuthor);

        if (this.state.allAuthor.length === 0) {
            return <h3>Loading...</h3>
        }

        return <>
            <main>
                <h1 className='homeHeader'>AUTHORS ({this.state.allAuthor.length})</h1>

                {this.state.allAuthor.map(author => {

                    return <p className='authorName'><Link to={`/authors/${author.id}`}>{author.name}</Link></p >



                })}

            </main>


        </>

    }
}






export default AuthorsPage;