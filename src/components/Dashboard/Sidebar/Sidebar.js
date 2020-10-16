import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHdd, faComment, faPlus, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://infinite-woodland-13167.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <aside class="col-12 col-md-2 my-5 flex-shrink-1">
            <nav class="navbar navbar-expand flex-md-column flex-row align-items-start py-2 sidebar">
                <div class="collapse navbar-collapse ">
                    <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        {isAdmin ? <div>
                            <li class="nav-item">
                                <Link to="/serviceList">
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#customerList"> <FontAwesomeIcon icon={faHdd} /> <span class="d-none d-md-inline"> Service List</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addService">
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#addService"> <FontAwesomeIcon icon={faPlus} /> <span class="d-none d-md-inline"> Add Service</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addAdmin"> 
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#addAdmin"> <FontAwesomeIcon icon={faUserPlus} /> <span class="d-none d-md-inline"> Make Admin</span></a>
                                </Link>
                            </li>
                        </div>
                        :
                        <div>
                            <li class="nav-item">
                                <Link to="/addOrder/:title">
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#order"> <FontAwesomeIcon icon={faShoppingCart} /> <span class="d-none d-md-inline"> Order</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/orders">
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#orderList"> <FontAwesomeIcon icon={faHdd} /> <span class="d-none d-md-inline"> Service List</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addReview">
                                    <a class="text-dark font-weight-bold nav-link pl-0" href="#review"> <FontAwesomeIcon icon={faComment} /> <span class="d-none d-md-inline"> Review</span></a>
                                </Link>
                            </li>
                        </div>                            
                        }
                        <li class="nav-item">
                            <Link to="/">
                                <a onClick={() => setLoggedInUser({})} class="text-dark font-weight-bold nav-link pl-0" href="#home"><FontAwesomeIcon icon={faSignOutAlt} /> <span class="d-none d-md-inline"> Logout</span></a>
                            </Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;