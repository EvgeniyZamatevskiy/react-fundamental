export const setToLocalStorage = <T>(key: string, state: T): void => {
  localStorage.setItem(key, JSON.stringify(state))
}

export const getFromLocalStorage = <T>(key: string, defaultState: T) => {
  const state = localStorage.getItem(key)

  if (state !== null) {
    defaultState = JSON.parse(state) as T
  }

  return defaultState
}
