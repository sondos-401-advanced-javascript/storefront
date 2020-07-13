import React from 'react';
import { connect } from 'react-redux';
///////////////
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
    return (
        <>
            <header>
                <h1>OUR STORE</h1>
                <div className="menu">
                <h2>CART ({props.cart.cart})</h2>
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
        {props.cart.cartProduct.map((option,i) => (
          <MenuItem key={i} selected={option === 'Pyxis'} onClick={handleClose}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
              
            </header>
        </>
    );
}

///////////////////////////////////








////////////////////////////////////
const mapStateToProps = state => ({
    cart: state.cart
});
export default connect(mapStateToProps)(Header);