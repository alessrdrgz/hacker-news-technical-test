import useSWR from 'swr'
import { Link } from 'wouter'
import {
  post,
  postFooter,
  postHeader,
  postLink,
  postTitle,
  postUsername
} from '../styles/PostPreview.css'
import { getRelativeTime } from '../utils/getRelativeTime'
import { getItemInfo } from '../utils/hacker-news'
import PostPreviewPlaceholder from './PostPreviewPlaceholder'
interface PostPreviewProps {
  id: number
  index?: number
}

export default function PostPreview({ id, index }: PostPreviewProps) {
  const { data, isLoading } = useSWR(`post/${id}`, () => getItemInfo(id))

  console.log(index)
  if (isLoading) return <PostPreviewPlaceholder />

  const { by, kids, score, title, url, time } = data

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  return (
    <article className={post}>
      <header className={postHeader}>
        {index != null && <small>{index + 1}.</small>}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={postTitle}
        >
          {title}
        </a>
        {domain !== '' && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={postLink}
          >
            ({domain})
          </a>
        )}
      </header>
      <footer className={postFooter}>
        <span>{score} points</span>
        <span className={postUsername}>by {by}</span>
        <span>{getRelativeTime(time)}</span>
        <Link href={`/post/${id}`} className={postLink}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}
