import React, { useState } from 'react'
import { useInputState } from '../hooks/useInput'

const Home = () => {
    const [user,setUser] = useState({
        id:"",
        password:"",
    });
    const chgInputHadelr = e => {
        const {value,name} = e.target;
        setUser(old => {
        return {...old,[name]:value}
        })
    }

    return (
    <div>
        <h1>hello</h1>
        <useInputState 
        type="text" 
        value={user.id}
        name='id'
        onChange={chgInputHadelr} 
        required
        />
    </div>
  )
}

export default Home