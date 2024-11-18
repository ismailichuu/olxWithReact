import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { fireBaseContext } from '../../Store/Context';
import 'firebase/auth'
import { createUserWithEmailAndPassword,getAuth,updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { USER_COLLECTION } from '../../Collections/Collections';
import {useNavigate} from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {db} = useContext(fireBaseContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(getAuth(),email,password).then(result=>{
      updateProfile(getAuth().currentUser,{displayName:userName}).then(()=>{
        addDoc(collection(db, USER_COLLECTION),
        {
          id:result.user.uid,
          username: userName,
          phone: phone
        }).then(()=>{
          navigate('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
