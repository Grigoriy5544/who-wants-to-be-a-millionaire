import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ILevel } from './ILevel';

type LevelState = {
 levels: ILevel[];
 currentLevel: number;
 isEnd: IsEnd
}

export enum IsEnd {
  win,
  lose,
  false
}

const levels: ILevel[] = [
  {level: 1, amount: 500}, 
  {level: 2, amount: 1000}, 
  {level: 3, amount: 2000}, 
  {level: 4, amount: 3000}, 
  {level: 5, amount: 5000}, 
  {level: 6, amount: 10000}, 
  {level: 7, amount: 15000}, 
  {level: 8, amount: 25000}, 
  {level: 9, amount: 50000}, 
  {level: 10, amount: 100000}, 
  {level: 11, amount: 200000}, 
  {level: 12, amount: 400000}, 
  {level: 13, amount: 800000}, 
  {level: 14, amount: 1500000}, 
  {level: 15, amount: 3000000}
]

const initialState: LevelState = {
  levels,
  currentLevel: 1,
  isEnd: IsEnd.false
}

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    levelUp: (state) => {
      state.currentLevel += 1
    },
    win: (state) => {
      state.isEnd = IsEnd.win
    },
    lose: (state) => {
      state.isEnd = IsEnd.lose
    },
    restart: (state) => {
      state.isEnd = IsEnd.false
      state.currentLevel = 1
    }
  },
})

export const { levelUp, win, lose, restart } = levelSlice.actions

export const getCurrentLevel = (state: RootState) => state.level.currentLevel
export const getLevels = (state: RootState) => state.level.levels
export const isEnd = (state: RootState) => state.level.isEnd

export default levelSlice.reducer