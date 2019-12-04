import React from 'react'
import { FetchAuthors } from '../../services/AuthorService'


class AboutAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleAuthor: []
        }

    }
    componentDidMount() {
        FetchAuthors().then(author => this.setState({ singleAuthor: author }))

    }

    render() {
        if (this.state.singleAuthor.length === 0) {
            return <h3>LOADING</h3>


        }

        const id = this.props.match.params.authorId;

        return <main>
            <h1>Single Author</h1>
            <h1>{this.state.singleAuthor[id - 1].name}</h1>
            <h1>{this.state.singleAuthor[id - 1].username}</h1>
            <h1>{this.state.singleAuthor[id - 1].email}</h1>
            <h1>{this.state.singleAuthor[id - 1].phone}</h1>







        </main>
    }
}



export default AboutAuthor;


