import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-6 bg-base-200 text-base-content">
            <aside>
                <p>© {year} Qligence Job Portal. All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;

