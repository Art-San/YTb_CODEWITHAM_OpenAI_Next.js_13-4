// 10:50
import React from 'react'
import Image from 'next/image'
import bot from '../../public/chatgpt.webp'

const DisplayChat = ({ message, reply }) => {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex gap-4 bg-[#f1f1f1] p-5">
        <Image
          className=" rounded-full w-[35px] h-[35px] shadow-sm"
          src={bot}
          alt="avatar"
        />
        <p>{message}</p>
      </div>
      <div className="flex gap-4 text-gray-700 py-10 px-5">
        <img
          className="rounded-full w-[35px] h-[35px] shadow-sm object-cover"
          src="https://xc-life.ru/wp-content/gallery/avatar-kosmos/avatarka-nlo.jpg"
          alt="avatar"
        />
        <p>{reply}</p>
      </div>
    </div>
  )
}

export default DisplayChat
