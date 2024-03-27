import React from 'react';

function Footer(props) {
    const nowDate = new Date().getFullYear();
    let data = `2012-${nowDate}`;
    return (
        <footer>
            Наш сайт працює з 2012 - {nowDate}
            <div>
                {new Date().getFullYear()}
            </div>
            <div>
                {data}
            </div>
        </footer>
    );
}

export default Footer;