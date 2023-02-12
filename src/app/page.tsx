'use client'

import Image from "next/image"

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const ProjectName = "Tendon"
const ProjectShort = "LMS Extension"

const Card: React.FC<{ item: number }> = ({ item }) => {
  return (
    <div
      className="rounded-lg border-2 border-gray-700 shadow-lg">
      <Image
        src='/Tendon.png'
        alt="Picture of the author"
        width={300}
        height={300}
        className="w-full rounded-md object-cover"
      />
      <article className="m-8 flex flex-col gap-3">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-gray-100">{ProjectName}</span>
          <h1 className="text-lg text-gray-300">{ProjectShort}</h1>
        </div>
        <div>
          <p className="text-lg text-gray-400">
            Tendon is a LMS extension that help you to manage your course and student.
          </p>
        </div>
      </article>
    </div>
  )
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center text-gray-200'>
      <span className="my-32 flex flex-col gap-2">
        <h1 className="bg-gradient-to-br from-red-400 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent transition duration-200 ease-in">
          JinDamanee&#39;s Workspace
        </h1>
        <h1 className=" text-center text-3xl font-semibold">
          Punnapob Jindakul
        </h1>
      </span>
      <div className="container grid gap-12 md:grid-cols-1 lg:grid-cols-2 ">
        {arr.map((item) => {
          return (
            <Card key={item} item={item} />
          )
        })}
      </div>
    </main>
  )
}
