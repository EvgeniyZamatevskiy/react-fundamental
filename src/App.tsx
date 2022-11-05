import React, { FC, useEffect, useState } from "react"
import { Button, Loader, Modal, PostFilter, PostForm, PostList } from "components"
import { FilterType } from "types"
import { useFetching, usePosts } from "hooks"
import { EMPTY_STRING } from "constants/base"
import { PostType } from "api/posts/types"
import { POSTS } from "api"

export const App: FC = () => {

  const [posts, setPosts] = useState<PostType[]>([])
  const [filter, setFilter] = useState<FilterType>({sort: 0, query: EMPTY_STRING})
  const [isActiveModal, setIsActiveModal] = useState(false)

  const sortedAndSearchPosts = usePosts(posts, filter)
  const [getPosts, isPostsLoading, postErrorMessage] = useFetching(async () => {
    const {data: posts} = await POSTS.getPosts()
    setPosts(posts)
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

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="app">
      <Button className="additionalButton" onClick={onActivateModalClick}>Создать пост</Button>
      <Modal isActiveModal={isActiveModal} onDeactivateModalClick={handleDeactivateModalClick}>
        <PostForm handleAddPostClick={handleAddPostClick}/>
      </Modal>
      <div style={{margin: "30px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postErrorMessage && <h1 className="title">Произошла ошибка: {postErrorMessage}</h1>}
      {isPostsLoading
        ? <div className="loader-container"><Loader/></div>
        : <PostList
          posts={sortedAndSearchPosts}
          handleRemovePostClick={handleRemovePostClick}
          handleUpdatePostTitleBlurOrKeyDown={handleUpdatePostTitleBlurOrKeyDown}
          handleUpdatePostBodyBlurOrKeyDown={handleUpdatePostBodyBlurOrKeyDown}
        />}
    </div>
  )
}
