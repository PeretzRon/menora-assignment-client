import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Box} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import style from './MovieCard.module.css';

const MovieCard = props => {
    return (
        <Card className={style.Root}>
            <p
                className={style.Title}>
                {props.title}
            </p>
            <CardMedia
                className={style.Poster}
                image={props.img}
                title="poster"
            />
            <CardContent className={style.Description}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <Box className={style.Rating} component="fieldset" mb={3} borderColor="transparent">
                <Rating disabled name="customized-10" defaultValue={props.ratings} precision={0.1} max={10}/>
            </Box>
        </Card>
    );
};

export default MovieCard;
