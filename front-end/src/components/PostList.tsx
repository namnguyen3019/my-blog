
import List from '@mui/material/List';
import * as React from 'react';
import SinglePost from './SinglePost';
const PostList: React.FunctionComponent = () => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </List>
    )
}

export default PostList

