"use client";

import { increment } from "@/lib/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export function Comp() {
  const ret = useAppSelector(s => s.counter.value);
  const [files, setFiles] = useState<File[]>([])
  console.log({ ret })
  const dispatch = useAppDispatch();
  return (
    <div>
      this'all throw

      <div>Counter</div>
      <input
        onChange={(e) => {
          Array.from(e.target.files!).forEach((file: File) => {
            setFiles(f => [...f, file])
          });
        }}
        type="file" className="input input-bordered" />
      {
        files.map(file => {
          if (file.type.startsWith('image'))
            return (
              <img src={URL.createObjectURL(file)} />
            )
          else return (
          <div className="card">
            {file.name}
          </div>
          )
        })
      }
      <button className="btn">
        add Files
      </button>
      <button onClick={() => dispatch(increment())}>
        {ret
        }
      </button>
    </div>
  )
}
