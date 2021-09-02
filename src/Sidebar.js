import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <h3>codding juhee</h3>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className="links">
                { links.map((link) => {
                    const { id, url, text, icon } = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                { social.map((item) => {
                    const { id, url, icon } = item
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;