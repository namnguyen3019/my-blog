import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import { useAppSelector } from '../state/hook';

export default function InforCard() {
    const user = useAppSelector(state => state.user)
    const userEmail = user ? user.email : null

    useEffect(() => {
    }, [userEmail])

    return (
        <Card sx={{ minWidth: 200, textAlign: "center", mx: "auto" }}>
            <CardContent>
                <p>About Me</p>
                {
                    userEmail ? (
                        <>
                            <p>My email address is: {userEmail}</p>
                        </>
                    ) : (
                        <p>Login to write your first post</p>
                    )
                }

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
