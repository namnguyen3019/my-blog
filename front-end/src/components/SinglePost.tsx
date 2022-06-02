import { Button, ListItem, ListItemText } from '@mui/material'
import { delete_a_post, get_a_post } from '../state/actions/postActions'
import { useAppDispatch } from '../state/hook'

const SinglePost = ({ post }: any) => {
    const dispatch = useAppDispatch()
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
            <Button>Update</Button>
            <Button onClick={() => handleDelete()}>Delete</Button>
        </ListItem>
    )
}

export default SinglePost