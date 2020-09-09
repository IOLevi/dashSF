import Header from "../components/Header";
import Topnav from "../components/Topnav";
import styles from '../components/styles/Index.module.css';
import CollapseCard from "../components/CollapseCard";
import Purple from "../components/Purple";
import Hospitalizations from "../components/Hospitalizations";
import MayorFeed from "../components/MayorFeed";
import ClosedStreets from "../components/ClosedStreets";
import {useState} from "react";

export default function Home() {

    const [toggleState, setToggleState] = useState(false);

    const flip = () => {
        setToggleState(!toggleState);
    };

    let darkMode;
    toggleState ? darkMode = {style: {background: 'grey'}} : darkMode = {};
    return (
        <div {...darkMode}>
            {/* TODO: Add user login and a settings menu where you can toggle which boxes you want to load
            pull it down as a list of dict keys, and for each key render the associated react component*/}
            <Header/>
            <Topnav toggleState={toggleState} flip={flip}/>

            <div className={styles.row}>
                <div className={styles.column}>
                    <Purple/>
                    <CollapseCard name={'COVID'}/>
                    <ClosedStreets/>


                </div>
                <div className={styles.column}>
                    <Hospitalizations/>
                    <MayorFeed/>
                    <CollapseCard name={'Closed streets'}/>
                </div>

            </div>
        </div>
    )
}
