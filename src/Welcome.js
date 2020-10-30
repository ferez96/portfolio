import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    layout: {
        minHeight: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    media: {
        cursor: "pointer",
        height: 256,
        width: 256,
        borderRadius: '50%',
        animation: "$shake 0.5s",
        animationIterationCount: "infinite",
        '&:hover': {
            animation: "",
            animationIterationCount: "infinite",
        }
    },
    "@keyframes shake": {
        "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
        "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
        "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
        "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
        "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
        "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
        "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
        "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
        "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
        "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
        "100%": { transform: "translate(1px, -2px) rotate(-1deg)" }
    }
}));

function Welcome(props) {
    const classes = useStyles();

    return (
        <Container className={classes.layout}>
            <CardMedia className={classes.media} image="/portfolio/profile.jpg" title="Dương Thái Minh"
                onClick={props.handleShowContent} />
        </Container>
    )
}

export default Welcome;