import { Button, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
const MyMenu: React.FunctionComponent = () => {

    return (
        <Grid container py={4} px={4} bgcolor={"blueviolet"}>
            <Grid item xs={9}>
                <Stack direction="row" spacing={2}>
                    <Avatar>H</Avatar>
                    <Typography variant="h5" component="h2">
                        My-Blog
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={3}>
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
        </Grid>
    )
}

export default MyMenu