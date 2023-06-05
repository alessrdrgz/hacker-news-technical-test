import { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import StoryPreview from '../components/PostPreview'
import { loadButton } from '../styles/TopPosts.css'
import { getTopPosts } from '../utils/hacker-news'

export default function TopPosts() {
  const loadButtonRef = useRef<HTMLButtonElement>(null)
  const scrollObservableRef = useRef<HTMLSpanElement>(null)

  const { data, isLoading, setSize } = useSWRInfinite(
    (index) => `posts/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopPosts(Number(page), 10)
    }
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setSize((size) => size + 1)
        }
      },
      {
        rootMargin: '100px'
      }
    )

    if (scrollObservableRef.current == null) return

    observer.observe(scrollObservableRef.current)

    return () => {
      observer.disconnect()
    }
  }, [setSize, isLoading])

  if (isLoading) return <></>

  const stories = data?.flat()

  return (
    <>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <StoryPreview id={id} index={index} />
          </li>
        ))}
      </ul>

      <button
        ref={loadButtonRef}
        className={loadButton}
        onClick={() => {
          setSize((size) => size + 1)
          if (loadButtonRef.current && scrollObservableRef.current) {
            loadButtonRef.current.style.display = 'none'
            scrollObservableRef.current.style.display = 'block'
          }
        }}
      >
        Load more
      </button>

      <span ref={scrollObservableRef} style={{ display: 'none' }} />
    </>
  )
}
