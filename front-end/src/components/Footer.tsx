import { Grid } from "@mui/material"
import * as React from 'react'
const Footer: React.FunctionComponent = () => {
    return (
        <Grid container mt={10} bottom={0}>
            <Grid item xs={12} textAlign="center">
                Copy Right &copy; 2022 Nam Nguyen. All Rights Reserved
            </Grid>
        </Grid>
    )
}

export default Footer