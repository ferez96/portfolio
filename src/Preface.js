import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Paper,
    Avatar,
    Typography,
    Table, TableRow, TableCell
} from '@material-ui/core';

const profile = {
    fullName: "Dương Thái Minh",
    email: "minh9a4@gmail.com",
    biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper
    },
    media: {
        height: 256,
        width: 256,
        borderRadius: '50%',
    },
    details: {
    },
    name: {
        ...theme.typography.button,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        border: "1pt solid black",
    },
}));

function Preface() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Paper>
                <Avatar className={classes.media} src="/portfolio/profile.jpg" alt="Dương Thái Minh" />
                <Typography className={classes.name}>{profile.fullName}</Typography>
            </Paper>
            <Table className={classes.details}>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{profile.email}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>{profile.phone}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Biography</TableCell>
                    <TableCell>{profile.biography}</TableCell>
                </TableRow>
            </Table>
        </Container>
    )
}
export default Preface;