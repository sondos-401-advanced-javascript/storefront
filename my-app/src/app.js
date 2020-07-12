import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Categories from './component/categories';
import Products from './component/products';
import CssBaseline from '@material-ui/core/CssBaseline';
import './app.scss';
class App extends React.Component{
  
    render(){
        return(
            <>
            <CssBaseline >
            <Header/>
            <Categories/>
            <Products/>
            <Footer/>
            </CssBaseline>
            
            </>
        )
    }
}

export default App;