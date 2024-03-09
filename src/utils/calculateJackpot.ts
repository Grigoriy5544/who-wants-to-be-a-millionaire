export const calculateJackpot = (level: number, isWin: boolean): number => {
  if (isWin)
    return 3000000

  if (level > 10)
    return 100000

  if (level > 5 && level <= 10)
    return 5000

  return 0
}