import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function InforCard() {
    return (
        <Card sx={{ minWidth: 200, textAlign: "center", mx: "auto" }}>
            <CardContent>
                <p>About Me</p>
                <p>My nam is Nam Nguyen</p>
                <p> I am a software Engineer</p>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
