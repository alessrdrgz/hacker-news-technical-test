import useSWR from 'swr'
import {
  commentContainer,
  commentText,
  commentTitle,
  commentsList
} from '../styles/Comment.css'
import { getRelativeTime } from '../utils/getRelativeTime'
import { getItemInfo } from '../utils/hacker-news'
import { CommentLoader } from './CommentPlaceholder'

interface CommentsListProps {
  ids: number[]
  open: boolean
}

export default function CommentsList({ ids, open }: CommentsListProps) {
  return (
    <ul className={commentsList}>
      {ids?.map((id: number) => (
        <li key={id}>
          <Comment id={id} open={open} />
        </li>
      ))}
    </ul>
  )
}

interface CommentProps {
  id: number
  open: boolean
}

function Comment({ id, open }: CommentProps) {
  const { data, isLoading } = useSWR(`/comment/${id}`, () =>
    getItemInfo(Number(id))
  )

  if (isLoading) return <CommentLoader />

  const { by, text, time, kids } = data
  const relativeTime = getRelativeTime(time)

  return (
    <>
      <details className={commentContainer} open={open}>
        <summary>
          <small className={commentTitle}>
            <span>{by}</span>
            <span> - </span>
            <span>{relativeTime}</span>
          </small>
        </summary>

        <p className={commentText} dangerouslySetInnerHTML={{ __html: text }} />
        {kids?.length > 0 && (
          <CommentsList ids={kids.slice(0, 10)} open={false} />
        )}
      </details>
    </>
  )
}
