
import React from 'react'
import SearchBar from './search'
import NewPostsButton from './new-post';
import Post from './post';
import { auth } from '@/auth';

async function ProfilePage() {
   const session = await auth();
  console.log({mySession: session});
  return (
    <div>
      <SearchBar />
      <div className='p-8'>
        <Island className='p-0 relative'>
          <img className="h-96 object-cover w-full object-center" src='https://images.unsplash.com/photo-1708199370329-4e9c67823075?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <Avatar />
          <Tabs />
        </Island>
        <div className='mt-4 flex gap-4 text-white'>

          <div className='flex flex-1 flex-col gap-4'>
            <Island className='p-4'>
              <h1 className='text-lg font-bold opacity-50'>
                Introduction
              </h1>
              <p>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor mini</p>
            </Island>
            <Island className='p-4'>
              <h1 className='text-lg font-bold opacity-50'>
                Posts
              </h1>
            </Island>
          </div>
          
          <div className='flex flex-[2_2_0] flex-col gap-4'>
            <Island className='p-0'>
              <div className='p-4'>
                <h1 className='text-lg font-bold opacity-50'>
                  Write a new Post
                </h1>
                <div className='flex gap-4 items-center'>
                  <img src="https://plus.unsplash.com/premium_photo-1706727288505-674d9c8ce96c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='aspect-square w-16 border-base-200 border-4 rounded-full ' />
                <NewPostsButton />
                </div>
              </div>
              <div className='p-4 pt-0 border-t-[#ffffff80]  flex justify-end gap-2'>
                <button className='btn btn-secondary'>Discard</button>
                <button className='btn btn-primary'>Post</button>
              </div>
            </Island>
            <Post />
          </div>

        </div>
      </div>
    </div>
  )
}

function Avatar({}) {
  return (
    <div className='absolute left-8 bottom-6 flex gap-4 items-center'>
      <img src="https://plus.unsplash.com/premium_photo-1706727288505-674d9c8ce96c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='aspect-square w-48 border-base-200 border-4 rounded-full ' />
          <div className='text-3xl text-base-200 font-bold'> Taha Shah </div>
    </div>
  )
}

function Tabs() {
  const tabs = ["Timeline", "Friends", "Photos"];
  const active = 0;
  return (
    <div className='flex gap-4 ml-60'>
      {
        tabs.map((tab, index) => (
          <div className={`px-4 py-5 relative ${active === index ? "backdrop-filter backdrop-brightness-125" : ""}`}>
            {tab}
            {active === index &&
              <span className={`absolute bottom-[-1px] left-0 right-0 bg-blue-700 h-1`} />
            }
          </div>
        ))
      }
    </div>
  )
}

function Island({ children, className }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`${className} rounded-lg bg-base-200 overflow-hidden `}>
      {children}
    </div>
  )
}

export default ProfilePage
