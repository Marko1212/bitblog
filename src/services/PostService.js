import React from 'react'
import Post from '../entities/Post'


const FetchPosts = () => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.map(post => new Post(post)))

}


export { FetchPosts };