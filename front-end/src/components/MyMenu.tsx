import { Button, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../state/actions/userActions';
import { useAppDispatch, useAppSelector } from '../state/hook';
const MyMenu: React.FunctionComponent = () => {

    const userInfo = useAppSelector(state => state.user)
    const userEmail = userInfo ? userInfo.email : null
    const dispatch = useAppDispatch()

    const handleOnClick = (e: any) => {
        e.preventDefault();
        dispatch(logOut())
    }

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])
    return (
        <Grid container py={4} px={4} bgcolor={"#dfe3ee"}>
            <Grid item xs={9}>
                <Stack direction="row" spacing={2}>
                    <Avatar>H</Avatar>
                    <Typography variant="h5" component="h2">
                        My-Blog
                    </Typography>
                </Stack>
            </Grid>

            {userEmail ? <Grid><p>{`${userEmail}`}, <Button onClick={(e) => handleOnClick(e)}>Logout</Button></p></Grid> : <Grid item xs={3}>
                <Stack direction="row" spacing={2} >
                    <Button>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/login">Log In</Link>
                    </Button>
                </Stack>
            </Grid>
            }
        </Grid>
    )
}

export default MyMenu