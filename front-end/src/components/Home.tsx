import { Container } from '@mui/material';
import React from 'react';
import FeaturePost from './FeaturePost';
import MainContent from './MainContent';
import MyMenu from './MyMenu';
const Home: React.FunctionComponent = () => {
    return (
        <Container>
            <MyMenu />
            <FeaturePost />
            <MainContent />
        </Container>
    )
}

export default Home