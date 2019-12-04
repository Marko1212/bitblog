import React from 'react'
import { Link } from "react-router-dom";
import { FetchAuthors } from '../../services/AuthorService'


class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allAuthor: []
        }
    }

    componentDidMount() {
        FetchAuthors().then(authors => this.setState({ allAuthor: authors }))

    }

    render() {

        console.log(this.state.allAuthor);

        if (this.state.allAuthor.length === 0) {
            return <h3>Loading...</h3>
        }

        return <>
            <main>
                <h1 className='homeHeader'>AUTHORS</h1>

                {this.state.allAuthor.map(author => {

                    return <p className='authorName'><Link to={`/authors/${author.id}`}>{author.name}</Link></p >



                })}

            </main>


        </>

    }
}






export default AuthorsPage;