import Header from "../components/Header";
import Topnav from "../components/Topnav";
import {Accordion, Card} from "react-bootstrap";
import styles from '../components/styles/Index.module.css';
import MainContainer from "../components/MainContainer";
import CollapseCard from "../components/CollapseCard";

export default function Home() {
    return (
        <>
            <Header/>
            <Topnav/>

            <div className={styles.flexContainer}>
                <CollapseCard name={'Air Quality'}/>
                <CollapseCard name={'COVID'}/>
            </div>




        </>
    )
}
