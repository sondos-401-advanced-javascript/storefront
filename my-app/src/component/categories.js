import React from 'react';
import { connect } from 'react-redux';
import { productBaseCategory } from '../store/categories';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const Categories = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="counter">
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {props.counter.categories.map((cat, i) =>
                        <Tab
                            div="true"
                            onClick={() => props.productBaseCategory(cat.name)}
                            key={i}
                            label={cat.displayName} />
                    )}
                </Tabs>
            </Paper>
        </section>
    )
}



const mapStateToProps = state => ({
    counter: state.product
});

const mapDispatchToProps = { productBaseCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Categories);