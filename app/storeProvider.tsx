"use client";

import { AppStore, makeStore } from '@/lib/store';
import React, { useRef } from 'react'
import { Provider } from 'react-redux';

function StoreProvider({ children }: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore();
    console.log(storeRef.current)
  }
  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}

export default StoreProvider
