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
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsL9GFpd9AC_hYj8-sFyi8nwzj1fk05AZ-Q&usqp=CAU" />
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQvbqoGBaWft578fCvKM3eIWhLXXt_8dMiQ&usqp=CAU"
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