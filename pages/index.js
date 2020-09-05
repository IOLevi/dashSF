import Header from "../components/Header";
import Topnav from "../components/Topnav";
import styles from '../components/styles/Index.module.css';
import CollapseCard from "../components/CollapseCard";
import Purple from "../components/Purple";

export default function Home() {
    return (
        <>
            <Header/>
            <Topnav/>

            <div className={styles.row}>
                <div className={styles.column}>
                    <Purple/>
                    <CollapseCard name={'COVID'}/>
                    <CollapseCard name={'Closed streets'}/>


                </div>
                <div className={styles.column}>
                    <CollapseCard name={'Hospitalizations'}/>
                    <CollapseCard name={'DingoDong'}/>
                    <CollapseCard name={'Closed streets'}/>
                </div>

            </div>
        </>
    )
}
