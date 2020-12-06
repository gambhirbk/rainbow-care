import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://admissions.uoregon.edu/sites/admissions1.uoregon.edu/files/Queer_Studies.jpg')`,
    height: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function BodyBlog() {
  const classes = useStyles();

  return (
    <div className="Consent">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Consent
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box fontStyle="italic">Consent</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://assets.teenvogue.com/photos/5cf549c9050ce574256f3031/16:9/w_2560%2Cc_limit/891A8698-(1)fbfb.jpg"
                  title="fkdfdskjlsajlfkklsdfljkdf"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    dsfjksadfhkshdjkas sdfjh
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    dsjldsjkdsfjkdsjklskdjsdklklas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/10830741_1541466989438667_3475538641326817894_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=0Atu-_f_5zYAX9bGfWF&_nc_ht=scontent-sea1-1.xx&oh=5e71343563f9a07051130b4ec17549a8&oe=5FF2EFB1" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Ghakdkjlka Ac 
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 12, 2012
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://thegatewayonline.ca/wp-content/uploads/2015/01/Feature-Jessica-Hong-Consent.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rinino Noaege
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    adgegeaoihion oi hdaiogheogiu eoa
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="data:image/png;base64,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" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://mcgilldaily.com/queernessandsexuality/visuals/SPECIALISSUE_Consent_RahmaWiryomartono_web.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    REACT TRNLKGGDGKLHD
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  The dynamics of consent in queer relationships merit their own discussion
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Dahofiegho
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 30, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/png;base64,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"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    FEAGOIE GEOINO 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    agihwoieghon gehaoihoni 1gae
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={4}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box> */}
      </Container>
    </div>
  );
}

export default BodyBlog;