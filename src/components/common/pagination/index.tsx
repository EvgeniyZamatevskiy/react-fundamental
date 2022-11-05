import React, { FC } from "react"
import { PaginationPropsType } from "./types"
import { Button } from "components"
import { usePagination } from "hooks"
import classes from "./Pagination.module.css"

export const Pagination: FC<PaginationPropsType> =
  ({
     totalItemsCount,
     pageCount,
     page,
     handleSetPageClick
   }) => {

    const pages = usePagination(totalItemsCount)

    return (
      <div className={classes.pagination}>
        {pages.map(((p) => {

          const onSetPageClick = (): void => {
            handleSetPageClick(p)
          }

          return (
            <Button
              key={p}
              style={page === p ? {border: "2px solid orange"} : {}}
              onClick={onSetPageClick}
            >
              {p}
            </Button>)
        }))}
      </div>
    )
  }
