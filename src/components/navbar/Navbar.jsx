import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () =>{
    return <nav className={classes['nav1-wrapper']}>
            <div className={classes['item']}>
                <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Profile</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink to="/dialogs" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Messages</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink to="/" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>News</NavLink>
            </div>
            <div className={classes['item']}>
                <NavLink to="/" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Music</NavLink>
            </div>
        </nav>

}
export {Navbar};