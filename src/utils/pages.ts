export const getPageCount = (totalCount: number, pageCount: number): number => {
  return Math.ceil(totalCount / pageCount)
}
