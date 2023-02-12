'use client'

import { Button } from 'antd';

export default function Home() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-slate-50'>
      <h1 className="text-6xl font-bold">My page</h1>
      <Button>
        Click me
      </Button>
    </main>
  )
}
