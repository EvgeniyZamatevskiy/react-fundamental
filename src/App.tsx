import React, { ChangeEvent, FC, useEffect, useState } from "react"
import { Button, Loader, Modal, PostFilter, PostForm, PostList, Pagination, Select } from "components"
import { FilterType } from "types"
import { useFetching, usePosts } from "hooks"
import { EMPTY_STRING } from "constants/base"
import { PostType } from "api/posts/types"
import { POSTS } from "api"
import { getPageCount } from "utils"

export const App: FC = () => {

  const [posts, setPosts] = useState<PostType[]>([])
  const [filter, setFilter] = useState<FilterType>({sort: 0, query: EMPTY_STRING})
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [totalPostsCount, setTotalPostsCount] = useState(0)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)

  const sortedAndSearchPosts = usePosts(posts, filter)
  const [getPosts, isPostsLoading, postErrorMessage] = useFetching(async () => {
    const {data: posts, headers} = await POSTS.getPosts(page, pageCount)
    setPosts(posts)
    const totalCount = getPageCount(Number(headers["x-total-count"]), pageCount)
    setTotalPostsCount(totalCount)
  })

  const handleDeactivateModalClick = (): void => {
    setIsActiveModal(false)
  }

  const onActivateModalClick = (): void => {
    setIsActiveModal(true)
  }

  const handleAddPostClick = (payload: { title: string, body: string }): void => {
    const post: PostType = {userId: Date.now(), id: Date.now(), ...payload}
    setPosts([post, ...posts])
    handleDeactivateModalClick()
  }

  const handleRemovePostClick = (postId: number): void => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  const handleUpdatePostTitleBlurOrKeyDown = (postId: number, title: string): void => {
    setPosts(posts.map(post => post.id === postId ? {...post, title} : post))
  }

  const handleUpdatePostBodyBlurOrKeyDown = (postId: number, body: string): void => {
    setPosts(posts.map(post => post.id === postId ? {...post, body} : post))
  }

  const handleSetPageClick = (page: number): void => {
    setPage(page)
  }

  const onSelectPageCountChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setPageCount(Number(event.currentTarget.value))
    setPage(1)
  }

  useEffect(() => {
    getPosts()
  }, [page, pageCount])

  return (
    <div className="app">
      <Button className="additionalButton" onClick={onActivateModalClick}>Создать пост</Button>
      <Modal isActiveModal={isActiveModal} onDeactivateModalClick={handleDeactivateModalClick}>
        <PostForm handleAddPostClick={handleAddPostClick}/>
      </Modal>
      <div style={{margin: "30px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <Select
        options={[
          {id: 5, name: "5"},
          {id: 10, name: "10"},
          {id: 25, name: "25"},
          {id: -1, name: "Показать все"},
        ]}
        value={pageCount}
        onChange={onSelectPageCountChange}
      />
      {postErrorMessage && <h1 className="title">Произошла ошибка: {postErrorMessage}</h1>}
      <PostList
        posts={sortedAndSearchPosts}
        handleRemovePostClick={handleRemovePostClick}
        handleUpdatePostTitleBlurOrKeyDown={handleUpdatePostTitleBlurOrKeyDown}
        handleUpdatePostBodyBlurOrKeyDown={handleUpdatePostBodyBlurOrKeyDown}
      />
      {isPostsLoading && <div className="loader-container"><Loader/></div>}
      <Pagination
        page={page}
        pageCount={pageCount}
        totalItemsCount={totalPostsCount}
        handleSetPageClick={handleSetPageClick}
      />
    </div>
  )
}
