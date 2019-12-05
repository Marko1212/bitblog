import React from 'react'

const AuthorAddress = (props) => (
    <>
        <h3>Address : </h3>

        <p>Street: {props.address.street} </p>
        <p>city: {props.address.city} </p>
        <p>zipcode: {props.address.zipcode}</p>


    </>

)

export default AuthorAddress

