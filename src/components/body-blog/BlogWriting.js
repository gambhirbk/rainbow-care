import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import styles from "./BlogMainStyles";
import { withRouter } from "react-router-dom";
import BlogText from "./BlogText"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 500,
  },
  control: {
    padding: theme.spacing(10),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            <Grid key={2} item>
              <Paper className={classes.paper}>
                  Image
                {/* import a photo? using class? */}
                <button style={styles.button} >Upload</button>
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.paper}>
              <BlogText />
              <button style={styles.button} onClick={() => this.props.history.push('/bodyblogs')}>Publish</button>
              <button style={styles.button} onClick={() => this.props.history.push('/bodyblogs')}>Save</button>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// with router?