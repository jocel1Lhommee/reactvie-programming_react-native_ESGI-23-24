import React from 'react';

function Layout({ children, header }) {
    return (
        <div>
            {header}
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
