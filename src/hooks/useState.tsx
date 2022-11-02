import React, { FC, useState, useEffect } from "react"

export const UseState: FC = () => {

  console.log("UseState")

  const hardGenerateNumber = () => {
    console.log("hardGenerateNumber")
    let i = 0
    while (i < 600000000) i++
    return i
  }

  const [seconds, setSeconds] = useState(hardGenerateNumber)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      {seconds}
    </div>
  )
}
