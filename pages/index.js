import Header from "../components/Header";
import Topnav from "../components/Topnav";
import styles from '../components/styles/Index.module.css';
import CollapseCard from "../components/CollapseCard";
import Purple from "../components/Purple";
import Hospitalizations from "../components/Hospitalizations";
import MayorFeed from "../components/MayorFeed";
import ClosedStreets from "../components/ClosedStreets";

export default function Home() {
    return (
        <>
            <Header/>
            <Topnav/>

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
        </>
    )
}
