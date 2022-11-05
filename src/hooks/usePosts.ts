import { useMemo } from "react"
import { useSortedPosts } from "./useSortedPosts"
import { FilterType } from "types"
import { PostType } from "api/posts/types"

export const usePosts = (posts: PostType[], filter: FilterType) => {

  const sortedPosts = useSortedPosts(posts, filter.sort)

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(({title}) => title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return sortedAndSearchPosts
}
