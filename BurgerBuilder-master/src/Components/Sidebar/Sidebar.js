import React from 'react';

import classes from './Sidebar.css';

import Logo from './../Logo/Logo';
import NavigationList from './../Navigation/NavigationList/NavigationList';
import Backdrop from './../UI/Backdrop/Backdrop';

import { connect } from 'react-redux';

import Aux from './../../High Order Components/Auxillary';

const Sidebar = (props) =>{ 
    let sideBarClass = [classes.Sidebar,classes.Close];
    if(props.show){
        sideBarClass[1] = classes.Open;
    }
    return(
        <Aux>
            <Backdrop show={props.show} togglePurchasing={props.click}/>
            <div className={sideBarClass.join(" ")}>
                <div style={{height:"11%",display:"inline-block"}}>
                    <Logo />
                </div>
                <NavigationList auth={props.auth}/>
            </div>
        </Aux>
    );
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth.token
    }
}

export default connect(mapStateToProps)(Sidebar);