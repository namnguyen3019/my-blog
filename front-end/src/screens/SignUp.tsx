import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signUp } from '../state/actions/userActions';
import { useAppDispatch, useAppSelector } from '../state/hook';

const SignUp: React.FunctionComponent = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')

    const dispatch = useAppDispatch()
    const userLogin = useAppSelector((state) => state.user)

    // useEffect(() => {
    //     if (userLogin) {
    //         nagivate("/")
    //     }
    // }, [userLogin])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Check password == reEnterPassword
        if (password === reEnterPassword) {
            dispatch(signUp(email, email, password));
            navigate("/login")
        } else {
            console.log("password not match")
        }

    };
    return (
        <Container maxWidth="sm">
            <Typography align="center" variant='h3' margin={10}>Welcome to My Blog</Typography>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="re-enter-password">Re-enter Password</InputLabel>
                <Input id="re-enter-password" onChange={(e) => setReEnterPassword(e.target.value)} />
            </FormControl>

            <Box textAlign='center' margin={3}>
                <Button variant='contained' onClick={e => handleSubmit(e)}>
                    Sign Up
                </Button>
                <Typography marginTop={3}>You already have an account ? Please sign in <Link href="/login">here</Link></Typography>
            </Box>
        </Container>


    )
}

export default SignUp