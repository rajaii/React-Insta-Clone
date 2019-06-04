import React from 'react';
import styled from 'styled-components';

const FormSty = styled.form`
width: 500px;
display: flex;
flex-direction: column;
margin: 0 auto;
border: 10px solid blue;
padding-top: 200px;
padding-bottom: 200px;
background: yellow;
`

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: lightblue;
`


const Login = (props) => {
    
    return (
        <div>

            <DivFlex className='frontFlex'>
                <img src='./instagram-logo.png'/>
                <p> | </p>
                <p className='p2'>AliGram LOL</p>
            </DivFlex>

            <FormSty onSubmit={props.login}>
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
            </FormSty>
        </div>
    );
}

export default Login;