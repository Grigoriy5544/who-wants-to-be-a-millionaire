import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { questions, TQuestions } from './questions'
import { IQuestion } from './IQuestion'

type QuestionState = {
  questions: TQuestions
}

const initialState: QuestionState = {
  questions
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// export const { increment, decrement, incrementByAmount } = questionSlice.actions

export const selectQuestions = (state: RootState) => state.question.questions
export const selectQuestionsByLvl = (state: RootState, level: number): IQuestion[] => state.question.questions[`${level}`]

export default questionSlice.reducer