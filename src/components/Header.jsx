import React from 'react';

function Header() {
    let links = ['Main','About', 'Shop', 'Contacts'];
    let linksEl = links.map((item, index)=>{
        return <a href={item} key={index}>{item}</a>
    })
    return (
        <header>
            Hello header
            <div>
                {/* <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">React</a> */}
                {linksEl}
            </div>
        </header>
    );
}

export default Header;