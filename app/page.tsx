"use client"

import { increment } from "@/lib/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import StoreProvider from "./storeProvider";

export default function Home() {
  return (
    <StoreProvider>
      <Comp />
    </StoreProvider>
  );
}

function Comp() {
  const ret = useAppSelector(s => s.counter.value);
  console.log({ret})
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>Counter</div>
      <button onClick={() => dispatch(increment())}>
         {ret
        }
      </button>
    </div>
  )
}
