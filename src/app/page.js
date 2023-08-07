import DisplayChat from '@/components/DisplayChat'
import Form from '@/components/Form'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto p-5 md:p-10 sm:p-5 max-w-[1000px] w-full overflow-hidden ">
      <Form />
      <div className=" mt-5 md:mt-10 flex flex-col w-full max-h-[700px] h-full overflow-y-auto border border-gray-300 rounded-lg">
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
        <DisplayChat message="Hello" reply={'buy'} />
      </div>
    </div>
  )
}
