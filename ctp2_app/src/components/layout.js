import React from 'react';

function Layout({ children, header }) {
    return (
        <div>
            {header}
            {children}
        </div>
    );
}

export default Layout;
