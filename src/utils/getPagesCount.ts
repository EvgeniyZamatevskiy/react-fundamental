export const getPagesCount = (totalItemsCount: number, pageCount: number): number => {
  return Math.ceil(totalItemsCount / pageCount)
}
