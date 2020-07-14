import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import SimpleCart from './simple-cart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));




const Products = props => {
    const classes = useStyles();
    return (
        <>
        <div className="cont">
        <h1 id="category">{props.category.activeCategory}</h1>
        <p>category description goes here</p>
        </div>
        
        <section className="products">
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {props.products.products.map((cat,i)=>
             <Card className={classes.root} key={i}>
             <CardActionArea>
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                   {cat.name}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Price: {cat.price}$ 
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <SimpleCart data={cat}/>
               <Button size="small" color="primary">
               View Detailes
               </Button>
             </CardActions>
           </Card>
            )}
           </GridList>
        </section>
        </>
    );
}



const mapStateToProps = state => ({
    products: state.product,
    category: state.category
});

export default connect(mapStateToProps)(Products);

