
import React from 'react'
import SearchBar from './search'
import NewPostsButton from './new-post';
import Post from './post';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { UserType } from '@/types/user';

async function ProfilePage() {
   const session = await auth();
  if (!session || !session.user) {
    redirect('/login');
  }
  const user: UserType = session.user as UserType;

  return (
    <div>
      <SearchBar />
      <div className='p-8'>
        <Island className='p-0 relative'>
          <img className="h-96 object-cover w-full object-center" src={user.avatarLink} />
          <Avatar user={user}/>
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
                  <img src={user.avatarLink} className='aspect-square w-16 border-base-200 border-4 rounded-full ' />
                <NewPostsButton user={user}/>
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

function Avatar({user}: {user: UserType}) {
  return (
    <div className='absolute left-8 bottom-6 flex gap-4 items-center'>
      <img src={user.avatarLink} className='aspect-square w-48 border-base-200 border-4 rounded-full ' />
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
