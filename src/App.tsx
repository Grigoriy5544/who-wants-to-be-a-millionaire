import {useSelector} from 'react-redux'
import styles from './App.module.scss'
import Game from './components/game/Game'
import Table from './components/table/Table'
import {IsEnd, isEnd} from './store/level/levelSlice'
import End from './components/end/End'
import {RootState} from "./store/store.ts";
import {useState} from "react";


function App() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    if (useSelector((state: RootState) => isEnd(state)) !== IsEnd.false)
        return <End/>

    return (
        <div className={styles.app}>
            <Game/>
            <Table openMenu={openMenu}/>
            <input className={styles.checkbox} checked={openMenu} type="checkbox" name="" id="" onChange={() => setOpenMenu(!openMenu)}/>
            <div className={styles.hamburgerLines}>
                <span className={styles.line + " " + styles.line1}></span>
                <span className={styles.line + " " + styles.line2}></span>
                <span className={styles.line + " " + styles.line3}></span>
            </div>
        </div>
    )
}

export default App
