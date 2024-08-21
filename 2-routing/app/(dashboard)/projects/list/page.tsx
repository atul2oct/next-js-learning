import Link from 'next/link'
import React from 'react'

const ProjectList = () => {
  return (
    <main className='flex flex-col gap-10 justify-center items-center text-2xl font-semibold'>
        
        <h1>Project List</h1>
        <ul className='capitalize flex flex-col justify-center items-center gap-4'>
            <li className='border-2 px-6 bg-slate-100 py-2'>
                <Link href='/projects/jobit'>
                    jobit
                </Link>
            </li>

            <li className='border-2 px-6 bg-slate-100 py-2'>
                <Link href='/projects/Atul'>
                    Atul
                </Link>
            </li>

            <li className='border-2 px-6 bg-slate-100 py-2'>
                <Link href='/projects/Anoop'>
                    Anoop
                </Link>
            </li>
        </ul>
    </main>
  )
}

export default ProjectList