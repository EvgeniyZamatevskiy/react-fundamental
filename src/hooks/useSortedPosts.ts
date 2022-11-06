import { useMemo } from "react"
import { SupplementedPostType } from "types"

export const useSortedPosts = (posts: SupplementedPostType[], sort: string) => {

  const sortedPosts = useMemo(() => {

    if (sort) {
      return [...posts].sort((a, b) => {
        return a[sort as keyof SupplementedPostType] > b[sort as keyof SupplementedPostType] ? 1 : -1
      })
    } else {
      return posts
    }
  }, [sort, posts])

  return sortedPosts
}
