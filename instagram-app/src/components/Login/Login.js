import React from 'react';

const Login = (props) => {
    
    return (
        <div>
            <form onSubmit={props.login}>
                <input
                type='text'
                name='username'
                placeholder='username'
                onChange={props.handleChangeU}
                value={props.user}
                />
                <input 
                type="password"
                name='password'
                placeholder='password'
                onChange={props.handleChangeP}
                value={props.password}
                />
                <button onClick={props.toggleLogin}>Log In</button>
            </form>
        </div>
    );
}

export default Login;