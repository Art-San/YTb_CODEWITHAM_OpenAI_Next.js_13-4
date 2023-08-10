'use client'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'

const Form = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(message)
    let api = localStorage.getItem('api')
    if (!api || api === 'null') {
      api = prompt('Enter api:') || ''
      localStorage.setItem('api', api)
    }
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, api })
    })
    const data = await response.json()
    console.log(data)
    setMessage('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center gap-4 p-2 border border-gray-200 rounded-lg text-sm"
    >
      <input
        className=" flex-1 p-2 border-none outline-none"
        type="text"
        name="message"
        placeholder="введи ченибудь..."
        required
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className=" bg-purple-500 text-white rounded-lg p-2">
        <SendIcon sx={{ fontSize: 15 }} />
      </button>
    </form>
  )
}

export default Form
