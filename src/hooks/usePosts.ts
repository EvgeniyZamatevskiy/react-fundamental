import { useMemo } from "react"
import { useSortedPosts } from "./useSortedPosts"
import { FilterType, SupplementedPostType } from "types"

export const usePosts = (posts: SupplementedPostType[], filter: FilterType) => {

  const sortedPosts = useSortedPosts(posts, filter.sort)

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(({title}) => title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return sortedAndSearchPosts
}
