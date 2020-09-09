import styles from './styles/Topnav.module.css';
import Switch from "./Switch";
import {useState} from 'react';

export default function Topnav({toggleState, flip}) {

    return (
        <div className={styles.topnav}>
            <div className={styles.textLogo}>
                - SF
            </div>
            <Switch isOn={toggleState} handleToggle={flip}/>
            <div className={styles.icons}>
                <a href={'https://twitter.com/iolevi'}><img src={'/twitter.svg'}/></a>
                <a href={'https://www.facebook.com/prgrssnrecords/'}><img src={'/facebook.svg'}/></a>
            </div>
        </div>
    )
}