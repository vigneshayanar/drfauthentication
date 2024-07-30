import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const[username,setusername]=useState('')
    const[password,setpassword1]=useState('')
    const[password2,setpassword2]=useState('')
    const[email,setemail]=useState('')
    const navigate=useNavigate()
    const[message,setmessage]=useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://127.0.0.1:8000/app1/register/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password, password2 }),
            });
    
            if (response.ok) {
                setmessage("Registration successful! You can now log in");
                navigate('/Login')
            } else {
                // Optionally, read the response to provide more specific error messages
                const errorData = await response.json();
                setmessage(`Registration failed: ${errorData.message || 'Please try again.'}`);
                navigate('/signup')
            }
        } catch (error) {
            setmessage(`Registration failed: ${error.message}`);
            navigate('/signup')
        }
    };
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <form className=' flex flex-col bg-white p-6 gap-5 rounded shadow-md' onSubmit={handleSubmit}>
        <h1 className='text-center text-2xl'>Signup!!!</h1>
        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} 
        placeholder='Username..' className='mb--4 p-2 border border-gary-300 rounded'
        required/>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}
        placeholder='Email'className='mb--4 p-2 border border-gary-300 rounded'
        required/>
        <input type="password" value={password} onChange={(e)=>setpassword1(e.target.value)}
        placeholder='Password' className='mb--4 p-2 border border-gary-300 rounded'
        required/>
        <input type="password" value={password2} onChange={(e)=>setpassword2(e.target.value)}
        placeholder='Password2' className='mb--4 p-2 border border-gary-300 rounded'
        required/>
        <button type='sumbit'  className='bg-blue-500 text-white py-2 rounded'>Sign up</button>
        {message && <p>{message}</p>}
    </form>
    </div>
  )
}

export default Signup