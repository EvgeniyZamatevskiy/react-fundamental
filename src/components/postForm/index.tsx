import React, { ChangeEvent, FC, useState } from "react"
import { Button, Input } from "components"
import { PostFormPropsType, PostParam } from "./types"
import { EMPTY_STRING } from "constants/base"

export const PostForm: FC<PostFormPropsType> = ({handleAddPostClick}) => {

  const [titleErrorMessage, setTitleErrorMessage] = useState(EMPTY_STRING)
  const [bodyErrorMessage, setBodyErrorMessage] = useState(EMPTY_STRING)
  const [postParam, setPostParam] = useState<PostParam>({title: EMPTY_STRING, body: EMPTY_STRING})

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPostParam({...postParam, title: event.currentTarget.value})

    if (titleErrorMessage) {
      setTitleErrorMessage(EMPTY_STRING)
    }
  }

  const onBodyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPostParam({...postParam, body: event.currentTarget.value})

    if (bodyErrorMessage) {
      setBodyErrorMessage(EMPTY_STRING)
    }
  }

  const onAddPostClickOrBlur = (): void => {
    const titleTrimmed = postParam.title.replace(/\s+/g, " ").trim()
    const bodyTrimmed = postParam.body.replace(/\s+/g, " ").trim()

    if (titleTrimmed && bodyTrimmed) {
      handleAddPostClick({title: titleTrimmed, body: bodyTrimmed})
      setPostParam({...postParam, title: EMPTY_STRING, body: EMPTY_STRING})
    } else {
      if (!titleTrimmed) {
        setTitleErrorMessage("Title is required!")
      }

      if (!bodyTrimmed) {
        setBodyErrorMessage("Body is required!")
      }
    }
  }

  return (
    <div>
      <Input
        value={postParam.title}
        onChange={onTitleChange}
        errorMessage={titleErrorMessage}
        onEnter={onAddPostClickOrBlur}
        placeholder={"Название поста"}
      />
      <Input
        value={postParam.body}
        onChange={onBodyChange}
        errorMessage={bodyErrorMessage}
        onEnter={onAddPostClickOrBlur}
        placeholder={"Описание поста"}
      />
      <Button onClick={onAddPostClickOrBlur}>Добавить</Button>
    </div>
  )
}
