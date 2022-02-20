import Grid from '@mui/material/Grid'
import React from 'react'
import InforCard from './InfoCard'
import PostList from './PostList'

const MainContent: React.FunctionComponent = () => {
    return (
        <Grid container mt="10px">
            <Grid item xs={12} md={9}>
                <PostList />
            </Grid>
            <Grid item xs={12} md={3}>
                <InforCard />
            </Grid>
        </Grid>
    )
}

export default MainContent