import { useMemo } from "react"

export const usePagination = (totalItemsCount: number) => {

  const pages = useMemo(() => {
    let result: number[] = []

    for (let i = 1; i <= totalItemsCount; i++) {
      result.push(i)
    }

    return result
  }, [totalItemsCount])

  return pages
}
