import React, {useState} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriends = () => {
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const addFriend = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    
    return(
        <form onSubmit={addFriend}>
            <input
                type='text'
                name='name'
                placeholder='name'
                onChange={handleChange}
            />
            <input 
                type='text'
                name='age'
                placeholder='age'
                onChange={handleChange}
            />
            <input
                type='text'
                name='email'
                placeholder='email'
                onChange={handleChange}
            />
            <button>Add New Friend</button>
        </form>
    )
};

export default AddFriends