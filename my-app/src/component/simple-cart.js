import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {addToCart} from '../store/cart'

function SimpleCart(props){
return(
    <Button onClick={()=>props.addToCart(props.data)} size="small" color="primary">
               Add To Cart
               </Button>
)
}


const mapStateToProps = state => ({
    cart: state.cart,
    
});
const mapDispatchToProps = { addToCart };
export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);