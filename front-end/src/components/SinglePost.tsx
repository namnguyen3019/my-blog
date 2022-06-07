import { Box, Button, FormControl, Input, InputLabel, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import React from 'react';
import { delete_a_post, get_a_post, update_a_post } from '../state/actions/postActions';
import { useAppDispatch } from '../state/hook';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const SinglePost = ({ post }: any) => {
    // handle update
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Handle update post
    const [postTitle, setPostTitle] = React.useState(post.title)
    const [postBody, setPostBody] = React.useState(post.body)
    const dispatch = useAppDispatch()

    const handleSaveChange = () => {
        const new_post = { postTitle, postBody }
        console.log(new_post)
        dispatch(update_a_post(post._id, new_post))
        handleClose()
    }


    const handleRead = () => {
        dispatch(get_a_post(post._id))
    }
    const handleDelete = () => {
        dispatch(delete_a_post(post._id))
    }

    return (
        <ListItem alignItems="flex-start">
            <ListItemText primary={post.title}
                secondary={post.body}
            />
            <ListItemText primary={`Author: ${post.author}`}
                secondary={post._id}
            />
            <Button onClick={() => handleRead()}>Read</Button>
            <Button onClick={() => handleOpen()}>Update</Button>
            <Button onClick={() => handleDelete()}>Delete</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit a post
                    </Typography>

                    <FormControl fullWidth={true} margin={'dense'}>
                        <InputLabel htmlFor="my-input">Title</InputLabel>
                        <Input
                            id="my-input"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                            fullWidth={true} />
                    </FormControl>
                    <FormControl fullWidth={true} margin={'dense'}>
                        <InputLabel htmlFor="post-body">Body</InputLabel>
                        <Input
                            multiline={true}
                            minRows={2}
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                            fullWidth={true}
                        />
                    </FormControl>

                    <Button onClick={() => handleSaveChange()}>Save Change</Button>
                    <Button onClick={() => handleClose()}>Cancel Change</Button>
                </Box>
            </Modal>
        </ListItem>
    )
}

export default SinglePost