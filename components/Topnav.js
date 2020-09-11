import styles from './styles/Topnav.module.css';
import Switch from "./Switch";
import {useState} from 'react';
import Navbar from "react-bootstrap";

export default function Topnav({toggleState, flip}) {

    return (

        <nav className={styles.topnav}>
            <span>- SF</span>

            <div className={styles.actions}>
                <Switch isOn={toggleState} handleToggle={flip}/>

                <a href={'https://twitter.com/iolevi'}><img src={'/twitter.svg'}/></a>

                <a href={'https://www.facebook.com/prgrssnrecords/'}><img src={'/facebook.svg'}/></a>
             </div>
        </nav>

    )
}