import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Cart from './component/cart';
import { Route } from 'react-router-dom';
import Categories from './component/categories';
import Products from './component/products';
import CssBaseline from '@material-ui/core/CssBaseline';
import './app.scss';
class App extends React.Component {

    render() {
        return (
            <>
                <CssBaseline >
                    <Header />
                    <Route path="/storefront" exact>
                        <Categories />
                        <Products />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Footer />
                </CssBaseline>

            </>
        )
    }
}

export default App;