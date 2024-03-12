import { useSelector } from 'react-redux'
import styles from './App.module.scss'
import Game from './components/game/Game'
import Table from './components/table/Table'
import { IsEnd, isEnd } from './store/level/levelSlice'
import End from './components/end/End'
import {RootState} from "./store/store.ts";


function App() {
  if (useSelector((state: RootState) => isEnd(state)) !== IsEnd.false)
    return <End/>

  return (
    <div className={styles.app}>
      <Game/>
      <Table/>
    </div>
  )
}

export default App
