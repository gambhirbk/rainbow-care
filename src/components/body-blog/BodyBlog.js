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
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://i2.wp.com/esthersrainbow.com/wp-content/uploads/2018/12/cropped-rainbow-header.jpg?w=1200&ssl=1')`,
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
    maxWidth: "90%",
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

// const Clicked = () => {
//   const [clicked, setClicked] = useState(false)
//   const handleIconClick = () => {
//        setClicked(true)
//       // change <AddCircleIcon /> to <BlockIcon /> at "id"
//   }
//   return (
//       <List component="nav">
//           <ListItem>
//               <ListItem onClick={handleIconClick(101)}>
//                   {clicked ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
//               </ListItem>
//           </ListItem>
//       </List>
//   )
// }
function BodyBlog() {
  const classes = useStyles();

  return (
    <div className="BodyBlog">
      <AppBar className={classes.appBar} position="static">
      </AppBar>
      <Box className={classes.hero}>
        <Box>My Body Stories</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.advocate.com/sites/default/files/2018/10/22/queer-trans-750x.jpg"
                  title="sdhiagonogienaogien"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Exploring my sexual identity 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Rainbow RRRR
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://image.shutterstock.com/image-vector/queer-proud-slogan-poster-colorful-260nw-1478756762.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Ashley
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
                  image="https://static01.nyt.com/images/2020/06/25/well/well-gay-youth/well-gay-youth-mediumSquareAt3X.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    How does it feel to come out?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Oh Yeah!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://media.npr.org/assets/img/2019/09/23/gettyimages-1164295667-bbd4a7dda2a6c0087ea8b4a313611e1bfe421a98-s800-c85.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rela
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 30, 2020
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
                  image="https://media1.s-nbcnews.com/j/newscms/2020_12/3271821/200316-orange-is-the-new-black-pose-moonlight-cs-1252p_b83b290c2cbe56d38ced4240b6a380d5.fit-760w.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    My favorite queer movies
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    These are the best LGBTQ movies and TV series
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn.vox-cdn.com/thumbor/zP4AZc6c-ecPsqB03jiZcWBRcJ0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21856468/queer_disney_board_yass_1.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pussycat
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
                  image="https://shcs.ucdavis.edu/sites/default/files/styles/gallery_item_1170x410/public/Screen%20Shot%202018-05-22%20at%2011.56.46%20AM.png?itok=ATDC8ZO-"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Today I got help, Finanlly
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Ways to get help:
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://snworksceo.imgix.net/asp/545e22cc-0166-44bc-b777-d1d36e279e67.sized-1000x1000.jpeg?w=1000" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Tonny
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Jan 28, 2020
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