const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export async function getTopPosts(page: number, limit: number) {
  const response = await fetch(`${BASE_URL}/topstories.json`)
  const json = await response.json()

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = json.slice(startIndex, endIndex)

  return ids
}

export async function getItemInfo(id: number) {
  const response = await fetch(`${BASE_URL}/item/${id}.json`)
  return await response.json()
}
