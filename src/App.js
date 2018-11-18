import React, { useState, useEffect } from 'react'
import fetch from 'node-fetch'

function App () {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const items = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then(r => r.json())
    setPosts(items.map(i => i.title))
  })

  return (
    <list items={posts} />
  )
}

export default App
