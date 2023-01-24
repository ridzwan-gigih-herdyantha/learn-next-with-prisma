import React from 'react';
import style from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navbrand}>
                    Posts App
                </div>
                <div className={style.navlinks}>
                    <ul>
                        <li>
                            <a href="/">Posts</a>
                        </li>
                        <li>
                            <a href="/drafts">Drafts</a>
                        </li>
                        <li>
                            <a href="/create">Add Post</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}