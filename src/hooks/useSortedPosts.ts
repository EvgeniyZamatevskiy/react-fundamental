import { PostType } from "api/posts/types"
import { useMemo } from "react"

export const useSortedPosts = (posts: PostType[], sort: number) => {

  const sortedPosts = useMemo(() => {
    const sortValue: keyof PostType = sort === 1 ? "title" : "body"

    if (sort !== 0) {
      return [...posts].sort((a, b) => a[sortValue] > b[sortValue] ? 1 : -1)
    } else {
      return posts
    }
  }, [sort, posts])

  return sortedPosts
}
