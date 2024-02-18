'use client';

import { signUp } from '@/lib/actions'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function SignupPage() {
  const [errorMessage, dispatch] = useFormState(signUp, undefined);
  console.log({errorMessage})
  return (
    <div className='h-full flex justify-center items-center'>
      <form action={dispatch} className='bg-base-200 p-8 mx-auto flex gap-4 flex-col'>
        <h1 className='text-xl font-bold text-center'>Sign Up</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label pb-0">
            <span className="label-text">Email</span>
          </div>
          <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label pb-0">
            <span className="label-text">Name</span>
          </div>
          <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label pb-0">
            <span className="label-text">Password</span>
          </div>
          <input type="text" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <span>Already have an account <Link href='/login' className='link link-primary'>Login</Link></span>
        <SignupButton />
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
function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className='btn w-full btn-primary mt-2'>Signup</button>
  )
}
export default SignupPage
