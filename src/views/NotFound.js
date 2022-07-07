import React from 'react';
import { Header, Image } from 'semantic-ui-react'

import image from '../twins-beer.gif';

const NotFound = () => {

    return (
        <div>
            <Header as="h1" textAlign='center' dividing>404 NotFound</Header>
            <Image centered src={"https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"}/>
        </div>
    )
};

export default NotFound;