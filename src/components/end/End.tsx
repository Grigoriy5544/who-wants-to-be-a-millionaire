import styles from './end.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IsEnd, getCurrentLevel, isEnd, restart } from '../../store/level/levelSlice'
import { calculateJackpot } from '../../utils/calculateJackpot'
import { convertCost } from '../../utils/convertCost'
// @ts-ignore
import useSound from "use-sound"
import winSound from "../../assets/sound/win.mp3" 
import loseSound from "../../assets/sound/lose.mp3"
import {RootState} from "../../store/store.ts";

export default function End() {
  const dispatch = useDispatch()
  const end = useSelector((state: RootState) => isEnd(state))
  const isWin: boolean = end === IsEnd.win ? true : false
  const level = useSelector((state: RootState) => getCurrentLevel(state))

  const jackpotSum = calculateJackpot(level, isWin)
  const jackpot = convertCost(jackpotSum)

  const [playWin] = useSound(winSound, {volume: 0.5})
  const [playLose] = useSound(loseSound, {volume: 0.5})

  isWin || jackpotSum > 0 ? playWin() : playLose()
  
  return (
    <div className={styles.end}>
      <div className={styles.resultBlock}>
        <p className={styles.result}>
          {isWin || jackpotSum ? `Вы выиграли ${jackpot}` : `Вы проиграли`}
        </p>
        <button onClick={() => dispatch(restart())}>сыграть еще раз</button>
      </div>
    </div>
  )
}
