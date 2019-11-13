import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setfriends] = useState('')
    
    useEffect (() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                console.log(response)
                setfriends(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Friends!</h2>
            <Link to='addFriends'><button>Add New Friends</button></Link>
            {Array.from(friends).map((friend, index) => (
                <div key={index}>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList