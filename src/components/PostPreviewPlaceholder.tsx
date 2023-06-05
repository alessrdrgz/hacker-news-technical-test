import ContentLoader from 'react-content-loader'

export default function PostPreviewPlaceholder() {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={50}
      viewBox="0 0 500 50"
      backgroundColor="#c4c4c4"
      foregroundColor="#ecebeb"
    >
      <circle cx="11" cy="18" r="11" />
      <rect x="275" y="11" rx="10" ry="10" width="89" height="17" />
      <rect x="27" y="11" rx="10" ry="10" width="244" height="17" />
      <rect x="88" y="53" rx="10" ry="10" width="89" height="17" />
      <rect x="27" y="33" rx="10" ry="10" width="70" height="12" />
      <rect x="104" y="34" rx="10" ry="10" width="70" height="12" />
      <rect x="183" y="34" rx="10" ry="10" width="70" height="12" />
      <rect x="262" y="33" rx="10" ry="10" width="70" height="12" />
    </ContentLoader>
  )
}
