import React, { ChangeEvent, FC, useEffect, useState } from "react"
import { Button, Loader, Modal, Pagination, PostFilter, PostForm, PostList } from "components"
import { FilterType, SupplementedPostType } from "types"
import { useFetching, usePosts } from "hooks"
import { EMPTY_STRING } from "constants/base"
import { POSTS } from "api"
import classes from "./Posts.module.css"
import { getPagesCount } from "utils";

export const Posts: FC = () => {

  const [posts, setPosts] = useState<SupplementedPostType[]>([])
  const [filter, setFilter] = useState<FilterType>({sort: EMPTY_STRING, query: EMPTY_STRING})
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [totalPostsCount, setTotalPostsCount] = useState(0)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)

  const sortedAndSearchPosts = usePosts(posts, filter)
  const [getPosts, isPostsLoading, postErrorMessage] = useFetching(async () => {
    const {data: posts, headers} = await POSTS.getPosts(page, pageCount)
    setPosts(posts.map(post => ({...post, isLiked: false})))
    const totalPostsCount = getPagesCount(Number(headers["x-total-count"]), pageCount)
    setTotalPostsCount(totalPostsCount)
  })

  const handleDeactivateModalClick = (): void => {
    setIsActiveModal(false)
  }

  const onActivateModalClick = (): void => {
    setIsActiveModal(true)
  }

  const handleAddPostClick = (payload: { title: string, body: string }): void => {
    const post: SupplementedPostType = {userId: Date.now(), id: Date.now(), isLiked: false, ...payload}
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

  const handleToggleIsLikedChange = (postId: number, isLiked: boolean): void => {
    setPosts(posts.map(post => post.id === postId ? {...post, isLiked} : post))
  }

  const handleSelectPageCountChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setPageCount(Number(event.currentTarget.value))
    setPage(1)
  }

  useEffect(() => {
    getPosts()
  }, [page, pageCount])

  return (
    <div>
      <Button onClick={onActivateModalClick}>Создать пост</Button>
      <Modal isActiveModal={isActiveModal} onDeactivateModalClick={handleDeactivateModalClick}>
        <PostForm handleAddPostClick={handleAddPostClick}/>
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postErrorMessage && <h1 className={classes.title}>Произошла ошибка: {postErrorMessage}</h1>}
      {isPostsLoading
        ? <div className={classes.loaderContainer}><Loader/></div>
        : <>
          <PostList
            posts={sortedAndSearchPosts}
            handleRemovePostClick={handleRemovePostClick}
            handleUpdatePostTitleBlurOrKeyDown={handleUpdatePostTitleBlurOrKeyDown}
            handleUpdatePostBodyBlurOrKeyDown={handleUpdatePostBodyBlurOrKeyDown}
            handleToggleIsLikedChange={handleToggleIsLikedChange}
          />
          <Pagination
            page={page}
            pageCount={pageCount}
            totalItemsCount={totalPostsCount}
            handleSetPageClick={handleSetPageClick}
            onSelectPageCountChange={handleSelectPageCountChange}
            isSelectPageCount
          />
        </>}
    </div>
  )
}
