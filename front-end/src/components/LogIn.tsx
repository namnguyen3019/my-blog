import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { get_all_posts } from '../state/actions/postActions';
import { login } from '../state/actions/userActions';
import { useAppDispatch, useAppSelector } from '../state/hook';

const LogIn: React.FunctionComponent = () => {

    let nagivate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const userLogin = useAppSelector(state => state.user)
    const userToken = userLogin ? userLogin.token : null
    useEffect(() => {
        if (userToken != null) {
            dispatch(get_all_posts())
            nagivate("/")
        }
    }, [dispatch, nagivate, userToken])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login(email, password));
        dispatch(get_all_posts())
    };
    return (
        <Container maxWidth="sm">
            <Typography align="center" variant='h3' margin={10}>Welcome to My Blog</Typography>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" aria-describedby="my-helper-text" onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" aria-describedby="my-helper-text" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Box textAlign='center' margin={3}>
                <Button variant='contained' onClick={e => handleSubmit(e)}>
                    Sign In
                </Button>
                <Typography marginTop={3}>Don't have an account ? Pleas sign up <Link>here</Link></Typography>
            </Box>

            <p>

            </p>
        </Container>


    )
}

export default LogIn