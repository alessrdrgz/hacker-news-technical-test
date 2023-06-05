import { Suspense, lazy } from 'react'
import { Route } from 'wouter'
import Header from './components/Header'

const TopPostsPage = lazy(() => import('./pages/TopPosts'))
const PostDetailPage = lazy(() => import('./pages/PostDetails'))

export default function App() {
  return (
    <>
      <Header />
      <main
        style={{
          padding: '16px',
          backgroundColor: '#f6f6ef',
          borderRadius: '0 0 16px 16px'
        }}
      >
        <Suspense fallback={null}>
          <Route path="/" component={TopPostsPage} />
          <Route path="/post/:id" component={PostDetailPage} />
        </Suspense>
      </main>
    </>
  )
}
