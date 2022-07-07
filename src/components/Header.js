import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <div style={{ flex: 1, justifyContent: 'center' }}>
        <Menu.Item
        href="https://github.com/flagada08"
        position="right"
        target="_blank"
        >
        <Icon name="github" size="big" />
        </Menu.Item>
        {/* Link react router dom component, to enable a path to the home page*/}
        <Link to={"/"}>
            <h1 style={{ textAlign: 'center', marginBottom: 30, fontSize: 35}}>
                <Icon size='large' name='home' />
                Welcome to the Osedea Coding Challenge!
            </h1>
        </Link>
        </div>
    );
};

export default Header;
