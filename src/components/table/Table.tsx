import styles from './table.module.scss'
import { useSelector } from 'react-redux';
import { getCurrentLevel, getLevels} from '../../store/level/levelSlice';
import { convertCost } from '../../utils/convertCost';
import {RootState} from "../../store/store.ts";


export default function Table() {
  const levels = useSelector((state: RootState) => getLevels(state))
    const currentLvl = useSelector((state: RootState) => getCurrentLevel(state))

  return (
    <div className={styles.table}>
      <div className={styles.levels}>
        {levels && levels.map(level => (
          <div key={level.level} className={styles.level + " " + (level.level === currentLvl ? styles.currentLvl : '')}>
            <div>{level.level}</div>
            <span>-</span>
            <div>{convertCost(level.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
