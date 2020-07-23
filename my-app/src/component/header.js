import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
///////////////
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Link } from 'react-router-dom';


const ITEM_HEIGHT = 48;


function Header(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const fetchData = () => {
      props.get();
  }

    useEffect(()=>{
        fetchData();
    });
    
    
    return (
        <>
            <header>
              <Link to='/storefront'>
              <h1>OUR STORE</h1>
              </Link>
                <div className="menu">
                  <Link to='/cart'>
                <h2>CART ({props.cart.results.length})</h2>
                  </Link>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
       <MoreVertIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {props.cart.results.map((option,i) => (
          <MenuItem key={i} selected={option === 'Pyxis'} onClick={handleClose}>
            {option.name}
            <span className="toDelete" onClick={()=>props.delete(option)}>X</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
              
            </header>
        </>
    );
}


const mapStateToProps = state => ({
    cart: state.data
});
const mapDispatchToProps = (dispatch, getState) => ({
  get: ()=> dispatch(actions.getRemoteData()),
  put: (id, data) => dispatch(actions.putRemoteData(id, data)),
  post: (data) => dispatch(actions.postRemoteData(data)),
  delete : (id) => dispatch(actions.deleteRemoteData(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);