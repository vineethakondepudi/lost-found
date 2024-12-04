import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './layout.scss';

const Layout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const sideNavItems = [
        { label: 'Home', icon: 'pi pi-home', to: '' },
        { label: 'Search and Claim', icon: 'pi pi-search', to: '/Search' },
        { label: 'View/Unclaim item', icon: 'pi pi-check-square', to: '/unclaim' }
    ];

    return (
        <div className={`layout-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Menubar
                className="topnav"
                model={[
                    { label: 'About Us', icon: 'pi pi-info-circle', command: () => console.log('Navigating to About Us') },
                    { label: 'Contact Us', icon: 'pi pi-phone', command: () => console.log('Navigating to Contact Us') },
                    { label: 'Help', icon: 'pi pi-question-circle', command: () => console.log('Navigating to Help') },
                    { label: 'Login', icon: 'pi pi-sign-in', command: () => console.log('Navigating to Login') },
                ]}
                start={
                    <div className="topnav-left">
                        <Button
                            icon="pi pi-bars"
                            rounded
                            text
                            aria-label="Toggle Sidebar"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        />
                    </div>
                }
            />
            <div className="layout-body">
                <aside className={`layout-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <ul className="sidebar-menu">
                        {sideNavItems.map((item, index) => (
                            <li key={index} className="sidebar-item">
                                <Link to={item.to} className="sidebar-link">
                                    <i className={item.icon}></i>
                                    {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="layout-content">
                    <Card className="custom-card">
                        <Outlet />
                    </Card>
                </div>
            </div>

            {/* Footer */}
            <footer className="layout-footer">
                Copyright © 2024, All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
