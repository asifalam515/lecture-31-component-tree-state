import React from 'react';
import classes from './Layout.module.css'
import { Link } from '@reach/router';

const Layout = (props) => {
    const path=window.location.pathname
    return (
        <div className={classes.app}>
        <nav className={classes.nav}>
          <div className={classes.brand}>
            <h3>Brand Name</h3>
          </div>
          <div className={classes.menu}>
            <ul>
             <li>
             <Link className={ path=='/' ?classes.navItemActive: classes.navItem} to='/'>Home</Link>
             </li>
            <li>
              <Link className={ path=='/about' ?classes.navItemActive: classes.navItem} to='/about'>About</Link>

            </li>
            <li>
              <Link className={ path=='/help' ?classes.navItemActive: classes.navItem} to='/help'>Help</Link>

            </li>
            <li>
              <Link className={ path=='/clock' ?classes.navItemActive: classes.navItem} to='/clock'>Clock</Link>

            </li>
            <li>
              <Link className={ path=='/task' ?classes.navItemActive: classes.navItem} to='/task'>Task</Link>

            </li>
            </ul>
          </div>
        </nav>
        
        {/* main section started from here */}
           <main className={classes.main}>
        {props.children}
           </main>
        
           {/* footer section */}
           <footer className={classes.footer}>
            <h3>This is a Footer</h3>
            <ul>
              <li>Footer Link One</li>
              <li>Footer Link two</li>
              <li>Footer Link Three </li>
            </ul>
           </footer>
           </div>
    );
};

export default Layout;