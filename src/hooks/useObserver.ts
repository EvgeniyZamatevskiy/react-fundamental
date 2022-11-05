import { useEffect, useRef } from "react"

export const useObserver = (ref: any, isLoading: boolean, isCanLoad: boolean, callback: () => void): void => {

  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current?.disconnect()
    const cb = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting && isCanLoad) {
        callback()
      }
    }

    observer.current = new IntersectionObserver(cb)
    if (ref.current) {
      observer.current?.observe(ref.current)
    }
  }, [isLoading])
}
