import React from 'react';

// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);

function HomePage() {
    const classes = useStyles();

    return (
        <div>
            This is the HomePage
        </div>
    );
}

export default HomePage;