'use client'
import SendIcon from '@mui/icons-material/Send'
import React from 'react'

const Form = () => {
  return (
    <form className=" flex justify-between items-center gap-4 p-2 border border-gray-200 rounded-lg text-sm">
      <input
        className=" flex-1 p-2 border-none outline-none"
        type="text"
        name="message"
        placeholder="введи ченибудь..."
      />
      <button className=" bg-purple-500 text-white rounded-lg p-2">
        <SendIcon sx={{ fontSize: 15 }} />
      </button>
    </form>
  )
}

export default Form
