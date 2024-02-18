'use client';

import { authenticate } from '@/lib/actions'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <div className='h-full flex justify-center items-center'>
      <form action={dispatch} className='bg-base-200 p-8 mx-auto flex gap-4 flex-col'>
        <h1 className='text-xl font-bold text-center'>Login</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label pb-0">
            <span className="label-text">Email</span>
          </div>
          <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label pb-0">
            <span className="label-text">Password</span>
          </div>
          <input type="text" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <span>Don't have an account <Link href="/signup" className='link link-primary'>Sign up</Link></span>
        <LoginButton />
       <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>

      </form>
    </div>
  )
}
function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className='btn w-full btn-primary mt-2'>Login</button>
  )
}
export default LoginPage
