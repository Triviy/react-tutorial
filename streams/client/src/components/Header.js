import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Streamy</Link>
            <Link to='/'>All Streams</Link>
        </div>
    );
}

export default Header;