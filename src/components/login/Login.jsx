import React from 'react';
import '../../App.css';
import { signInWithGooglePopup } from '../../utils/firebase/Firebase.utils';


const Login = () => {
const logGoogleUser = async ()=>{
    const response = await signInWithGooglePopup();
    console.log(response)
}


    return (
        <div>
             <button onClick={logGoogleUser} >Sign-In with Google</button>
            <form className='container bg-primary-subtle '>
                <h1 className='App'  >Login</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
               
            </form>

        </div>
    );
}

export default Login;
