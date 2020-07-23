import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actions from '../store/actions';

function SimpleCart(props){
return(
    <Button onClick={()=>props.post(props.data)} size="small" color="primary">
               Add To Cart
               </Button>
)
}


const mapStateToProps = state => ({
    cart: state.cart,  
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    put: (id, data) => dispatch(actions.putRemoteData(id, data)),
    post: (data) => dispatch(actions.postRemoteData(data))
});
export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);