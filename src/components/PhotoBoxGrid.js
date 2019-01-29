import React from 'react';
import PhotoBox from './PhotoBox';
import Grid from '@material-ui/core/Grid';

const PhotoBoxGrid = ({photos}) => (
    <Grid container direction="row" spacing={8}>
        {photos.map(photo => (
            <Grid item>
                <PhotoBox image={photo} width="100px"/>
            </Grid>
        ))}
    </Grid>
)

export default PhotoBoxGrid;