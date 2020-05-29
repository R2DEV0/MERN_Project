import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import './login.css';


export default () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const login = (e) => {
        navigate('/')
        // axios.post('http://localhost:8000/api/login',{
        //     email,
        //     password
        // })
        //     .then(res=>{
        //         navigate('/')
        //     })
        //     .catch(err => {console.log(err)})
    };

    const register = (e) => {
        navigate('/')
        // axios.post('http://localhost:8000/api/login',{
        //     name,
        //     email,
        //     password,
        //     confirmPassword
        // })
        // .then(res=>{
        //     navigate('/')
        // })
        // .catch(err => {console.log(err)})
    };

    return(
        <div style={{marginLeft: '5%' }}>
            <div className='login'>
                <h3 style={{color:'whitesmoke', marginBottom:'20px', textShadow:'3px 3px 5px red'}}>Login: </h3>
                <form>
                    <div className='form-group'>
                        <input type="email" className="form-control" placeholder='Enter Email Address'onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" className="form-control" placeholder='Enter Password'onChange={(e)=> {setPassword(e.target.value)}}/>
                    </div>
                </form>
                <button className='btn btn-danger btn-md col-12' style={{background:'darkred'}} onClick={login}>Login</button>
            </div>

            <div className='register'>
                <h3 style={{color:'whitesmoke', marginBottom:'20px', textShadow:'3px 3px 5px red'}}>Register: </h3>
                <form>
                    <div className='form-group'>
                        <input type="text" className="form-control" placeholder='Enter Full Name'onChange={(e)=> {setName(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <input type="email" className="form-control" placeholder='Enter Email Address'onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" className="form-control" placeholder='Enter Password'onChange={(e)=> {setPassword(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" className="form-control" placeholder='Confirm Password'onChange={(e)=> {setConfirmPassword(e.target.value)}}/>
                    </div>
                </form>
                <button className='btn btn-danger btn-md col-12' style={{background:'darkred'}} onClick={register}>Register</button>
            </div>
        </div>
    )
}