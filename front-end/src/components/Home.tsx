import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import FeaturePost from './FeaturePost';
import MainContent from './MainContent';
import MyMenu from './MyMenu';
const Home: React.FunctionComponent = () => {
    const user = useSelector((state: RootState) => state.user)
    const userToken = user ? user.token : null
    return (
        <Container>
            <MyMenu />
            {
                userToken ? (
                    <> <FeaturePost />
                        <MainContent /></>
                ) : (<p> Login to write your first post</p>)
            }

        </Container>
    )
}

export default Home