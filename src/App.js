import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from "./images/memories.png"
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles'
import {getPosts } from './actions/posts';
import {useDispatch} from 'react-redux';


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className= {classes.appBar}position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" >
                   Umer's Memory Book 
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="100"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;