import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
// import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

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
  let change;
  const handelChange = (e) =>{
    change = e.target.value;
  }
const Cart = props => {
    const classes = useStyles();
    return (
      <section className="products">
         
           <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {props.data.results.map((cat,i)=>
             <Card className={classes.root} key={i}>
             <CardActionArea>
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                   {cat.name}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Price: {cat.price}$ - Quantity: <input onChange={handelChange} className="inNum" type="number" name="quantity" placeholder={cat.quantity} />
                 </Typography>
               </CardContent>
             </CardActionArea>             
             <Button onClick={()=>props.put(change,cat,cat._id)}>Update</Button>
             <Button onClick={()=>props.delete(cat._id)}>Delete</Button>
           </Card>
            )}
           </GridList>
        </section>
    )
}



const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    put: (change,data, id) => dispatch(actions.putRemoteData(change,data, id)),
    post: (data) => dispatch(actions.postRemoteData(data)),
    delete : (id) => dispatch(actions.deleteRemoteData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);