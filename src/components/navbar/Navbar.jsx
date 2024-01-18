import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendListElement} from "./Friend/Friend";
const Navbar = (props) =>{
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
            <FriendListElement state={props.state}/>
        </nav>

}
export {Navbar};