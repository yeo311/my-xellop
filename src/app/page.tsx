'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState('')

  const handleClick = () => {
    fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({ carNumber: '01가7823', date: '2024-02-05', dateDuration: 1 }),
    })
  }

  useEffect(() => {
    fetch('/api/reservation', {
      method: 'POST',
    })
      .then((res) => res.text())
      .then((data) => {
        // const doc = new DOMParser().parseFromString(data, 'text/html')
        // console.log(doc)
        setData(data)
      })
  }, [])

  return (
    <div>
      Hello<button onClick={handleClick}>Test</button>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  )
}
