import React, { useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Link, Route, Outlet } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

import './Dashboard.css'

const Dashboard = () => {
    const [isActive, setActive] = useState(true);
    const { user, logout, admin } = UseAuth()

    console.log('admin', admin);

    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <div>
            <div className={isActive ? "sidebar active" : "sidebar"} >
                <div class="logo_content">
                    <div class="logo">
                        <div class="logo_name">Travel Blog</div>
                    </div>
                    <i class='bx bx-menu' id="btn" onClick={toggleClass}></i>
                </div>
                <ul class="nav_list">



                    <li>
                        <Link to={`/dashboard/my-blog`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">My Blogs</span>
                        </Link>
                        <span class="tooltip">My Blogs</span>
                    </li>
                    <li>
                        <Link to={`/dashboard/addBlog`}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Add Blog</span>
                        </Link>
                        <span class="tooltip">Add Blog</span>
                    </li>

                    {
                        admin && <>
                            <li>
                                <Link to={`/dashboard/allBlogs`}>
                                    <i class='bx bx-user'></i>
                                    <span class="links_name">All Blogs</span>
                                </Link>
                                <span class="tooltip">All Blogs</span>
                            </li>
                            <li>
                                <Link to={`/dashboard/make-admin`}>
                                    <i class='bx bx-user'></i>
                                    <span class="links_name">Make Admin</span>
                                </Link>
                                <span class="tooltip">Make Admin</span>
                            </li>
                            <li>
                                <Link to={`/dashboard/approval`}>
                                    <i class='bx bx-user'></i>
                                    <span class="links_name">Approval</span>
                                </Link>
                                <span class="tooltip">Approval</span>
                            </li></>
                    }






                    <li>
                        <Nav.Link onClick={logout}>
                            <i class='bx bx-user'></i>
                            <span class="links_name">Logout</span>
                        </Nav.Link>
                        <span class="tooltip">Logout</span>
                    </li>

                </ul>
                <div class="content">
                    <div class="user">
                        <div class="user_details">
                            {/* <img src="images/profile.jpg" alt="" /> */}
                            <div class="name_job">
                                <div class="name">{user.displayName}</div>
                                <div class="job">{user.email}</div>
                            </div>
                        </div>
                        <i class='bx bx-log-out' style={{ cursor: 'pointer' }} id="log_out" onClick={logout}></i>
                    </div>
                </div>
            </div>
            <div class="home_content">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;