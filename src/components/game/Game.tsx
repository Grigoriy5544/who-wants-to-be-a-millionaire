import styles from './game.module.scss'
import { selectQuestionsByLvl } from '../../store/question/questionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLevel, levelUp, lose, win } from '../../store/level/levelSlice'
import { getRandomElement } from '../../utils/getRandomElement'
// @ts-ignore
import useSound from "use-sound"
import chooseAnswer from "../../assets/sound/chooseAnswer.mp3"
import correctAnswer from "../../assets/sound/correct.mp3"
import wrongAnswer from "../../assets/sound/wrong.mp3"
import {RootState} from "../../store/store.ts";

export default function Game() {
  const dispatch = useDispatch()
  const currentLvl = useSelector((state: RootState) => getCurrentLevel(state))
  const question = getRandomElement(useSelector((state: RootState) => selectQuestionsByLvl(state, currentLvl)))
  const [choosePlay] = useSound(chooseAnswer, {volume: 0.5})
  const [correct] = useSound(correctAnswer, {volume: 0.5})
  const [wrong] = useSound(wrongAnswer, {volume: 0.5})
 
  function checkQuestion(answer: number): void {
    choosePlay()
    setTimeout(() => {
      if (question.answers[answer] === question.correctAnswer) {
        if (currentLvl == 15) {
          correct()
          setTimeout(() => {
            dispatch(win())
          }, 4 * 1000)
          return
        }
        correct()
        setTimeout(() => {
          dispatch(levelUp())
        }, 2 * 1000)
        return
      }
      wrong()
      setTimeout(() => {
        dispatch(lose())
      }, 2 * 1000)
    }, 1 * 1000)
  }
  
  return (
    <div className={styles.game}>
      <div className={styles.question}>
        <p className={styles.text}>{question.question}</p>
        <div className={styles.answers}>
          <button onClick={() => checkQuestion(0)}>{question.answers[0]}</button>
          <button onClick={() => checkQuestion(1)}>{question.answers[1]}</button>
        </div>
        <div className={styles.answers}>
          <button onClick={() => checkQuestion(2)}>{question.answers[2]}</button>
          <button onClick={() => checkQuestion(3)}>{question.answers[3]}</button>
        </div>
      </div>
    </div>
  )
}
