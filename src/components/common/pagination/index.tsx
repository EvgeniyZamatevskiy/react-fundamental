import React, { FC, useEffect, useState } from "react"
import { PaginationPropsType } from "./types"
import { Button, Select } from "components"
import { usePages } from "hooks"
import classes from "./Pagination.module.css"

const options = [
  {value: 5, name: "5"},
  {value: 10, name: "10"},
  {value: 25, name: "25"},
  {value: -1, name: "Показать все"},
]

export const Pagination: FC<PaginationPropsType> =
  ({
     totalItemsCount,
     pageCount,
     page,
     handleSetPageClick,
     onSelectPageCountChange,
     isSelectPageCount,
     portionSize = 5
   }) => {

    const [portionNumber, setPortionNumber] = useState(1)

    // const pagesCount = Math.ceil(totalItemsCount / pageCount)
    const pages = usePages(totalItemsCount)

    const portionCount = Math.ceil(totalItemsCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    const pagesFiltered = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)

    const pagesRender = pagesFiltered.map(p => {

      const onSetPageClick = (): void => handleSetPageClick(p)

      return (
        <Button key={p} className={`${classes.button} ${page === p && classes.active}`} onClick={onSetPageClick}>
          {p}
        </Button>
      )
    })

    useEffect(() => {
      setPortionNumber(Math.ceil(page / portionSize))
    }, [page])

    const onDecreasePortionNumberClick = (): void => setPortionNumber(portionNumber - 1)

    const onIncreasePortionNumberClick = (): void => setPortionNumber(portionNumber + 1)

    return (

      <div className={classes.pagination}>
        {portionNumber > 1 &&
          <Button className={classes.button} onClick={onDecreasePortionNumberClick}>&laquo;</Button>}
        {pagesRender}
        {portionCount > portionNumber &&
          <Button className={classes.button} onClick={onIncreasePortionNumberClick}>&raquo;</Button>}

        {isSelectPageCount &&
          <div className={classes.select}>
            <Select
              options={options}
              value={pageCount}
              onChange={onSelectPageCountChange}
            />
          </div>
        }
      </div>
    )
  }
