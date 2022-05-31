import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import FeaturePost from './FeaturePost';
import MainContent from './MainContent';
import MyMenu from './MyMenu';
const Home: React.FunctionComponent = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <Container>
            <MyMenu />
            <FeaturePost />
            <MainContent />
        </Container>
    )
}

export default Home