import React from 'react'
import { fetchSingleAuthor } from '../../services/AuthorService'
import AuthorAddress from '../components/author/AuthorAddress'


class AboutAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: null
        }

    }
    componentDidMount() {
        fetchSingleAuthor(this.props.match.params.authorId).then(author => this.setState({ author: author }))

    }

    render() {

        if (!this.state.author) {
            return <h3>LOADING</h3>


        }


        return <main>

            <div className='nameSurname flex-container'>

                <img src='https://www.primepost.ng/wp-content/uploads/2018/12/writer.jpg' />

                <div className='nameSurnameBox'>
                    <h1>Name: {this.state.author.name}</h1>
                    <h1>Username: {this.state.author.username}</h1>
                    <h1>email: {this.state.author.email}</h1>
                    <h1>phone: {this.state.author.phone}</h1>

                </div>

            </div>

            <AuthorAddress address={this.state.author} />


        </main>
    }
}



export default AboutAuthor


