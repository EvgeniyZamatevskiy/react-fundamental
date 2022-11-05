import { useMemo } from "react"

export const usePagination = (totalItemsCount: number) => {

  const pages = useMemo(() => {
    let result: number[] = []

    for (let i = 0; i < totalItemsCount; i++) {
      result.push(i + 1)
    }

    return result
  }, [totalItemsCount])

  return pages
}
