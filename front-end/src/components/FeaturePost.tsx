import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../state/hook';

export default function FeaturePost() {

    const featurePost = useAppSelector(store => store.posts ? store.posts[0] : null)
    return (
        <Card sx={{ maxWidth: '80%', mx: 'auto' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {featurePost?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {featurePost?.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
