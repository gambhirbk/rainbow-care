import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from "./BlogMainStyles";
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

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            <Grid key={2} item>
              <Paper className={classes.paper}>
                <img
                    src="./img/uploadImage.png"
                    alt="uploadImage"
                    width="350"
                    style={{marginLeft: 5 + 'em', 
                            marginTop: 3 + 'em',
                            marginBottom: 3 + 'em'}}
                  ></img>
                <div style={styles.buttonRowWriting}>
                  <button style={styles.buttonWriting}>Upload</button>
                </div>
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.paper}>
              <BlogText />
              <div style={styles.buttonRowWriting}>
              <button style={styles.buttonWriting}>Publish</button>
              <button style={styles.buttonWriting}>Save</button>
              </div>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}