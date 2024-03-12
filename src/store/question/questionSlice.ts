import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { questions, TQuestions } from './questions'
import { IQuestion } from './IQuestion'
import {lvlNumbers} from "./questions";

type QuestionState = {
  questions: TQuestions
}

const initialState: QuestionState = {
  questions
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
})

export const selectQuestionsByLvl = (state: RootState, level: lvlNumbers): IQuestion[] => state.question.questions[level]

export default questionSlice.reducer