import { useMemo } from "react"

export const usePages = (pagesCount: number) => {

  const pages = useMemo(() => {
    let result: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
      result.push(i)
    }

    return result
  }, [pagesCount])

  return pages
}
