import { ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SinglePost = () => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default SinglePost