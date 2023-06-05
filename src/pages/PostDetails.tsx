import { useEffect } from 'react'
import useSWR from 'swr'
import CommentsList from '../components/CommentsList'
import PostPreview from '../components/PostPreview'
import PostPreviewPlaceholder from '../components/PostPreviewPlaceholder'
import { getItemInfo } from '../utils/hacker-news'

interface PostDetailsProps {
  params: { id: string }
}

export default function PostDetails({ params: { id } }: PostDetailsProps) {
  const { data, isLoading } = useSWR(`/post/${id}`, () =>
    getItemInfo(Number(id))
  )

  useEffect(() => {
    if (!isLoading) {
      document.title = `Hacker News - ${data.title}`
    }
  }, [data, isLoading])

  if (isLoading) return <PostPreviewPlaceholder />

  const { kids } = data

  return (
    <div style={{ marginTop: '24px' }}>
      <PostPreview id={Number(id)} />
      <CommentsList ids={kids?.slice(0, 10)} open={true} />
    </div>
  )
}
