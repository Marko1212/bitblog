import React from 'react'
import { fetchSingleAuthor } from '../../services/AuthorService'


class AboutAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.authorId;
        this.state = {
            author: null
        }

    }
    componentDidMount() {
        fetchSingleAuthor(this.id).then(author => this.setState({ author: author }))

    }

    render() {

        if (!this.state.author) {
            return <h3>LOADING</h3>


        }


        return <main>
            <h1>Single Author</h1>

            <h1>{this.state.author.name}</h1>
            <h1>{this.state.author.username}</h1>
            <h1>{this.state.author.email}</h1>
            <h1>{this.state.author.phone}</h1>



        </main>
    }
}



export default AboutAuthor


