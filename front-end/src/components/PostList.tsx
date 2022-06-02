
import { Button } from '@mui/material';
import List from '@mui/material/List';
import * as React from 'react';
import { add_new_post } from '../state/actions/postActions';
import { useAppDispatch, useAppSelector } from '../state/hook';
import SinglePost from './SinglePost';
const PostList: React.FunctionComponent = () => {

    const [addNewPost, setAddNewPost] = React.useState(false);
    const [newPostTitle, setNewPostTitle] = React.useState("");
    const [newPostBody, setNewPostBody] = React.useState("");
    const postList = useAppSelector(store => store.posts)
    const dispatch = useAppDispatch();


    const handleAddNewPost = () => {
        setAddNewPost(true)
    }
    const handleSubmitNewPost = () => {
        dispatch(add_new_post(newPostTitle, newPostBody))
        setAddNewPost(false)
    }
    const handleCancel = () => {
        setAddNewPost(false)
    }
    return (
        <>
            {
                postList ? (
                    <><Button onClick={() => handleAddNewPost()}>Add new post</Button>
                        {
                            addNewPost ? <>
                                <input placeholder='title' value={newPostTitle}
                                    onChange={(e) => setNewPostTitle(e.target.value)}
                                />
                                <input placeholder='body' value={newPostBody}
                                    onChange={(e) => setNewPostBody(e.target.value)} />
                                <button onClick={() => handleSubmitNewPost()}>submit</button>
                                <button onClick={() => handleCancel()}>Cancel</button>
                            </> : null
                        }
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                postList ? postList.map((post: any) => {
                                    return <SinglePost key={post._id} post={post} />
                                }) : (<p>"No post yet"</p>)
                            }
                        </List></>) : (<>NO POST YET</>)
            }

        </>
    )
}

export default PostList

function handleSubmitNewPost(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
}

