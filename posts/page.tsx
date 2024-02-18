"use client";

import { increment } from "@/lib/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AttachmentType } from "@/models/attachments";
import { useState } from "react";

 export function Comp() {
  const [files, setFiles] = useState<File[]>([])
  const dispatch = useAppDispatch();
  return (
    <div>
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
      <button className="btn btn-primary " onClick={async () => {
        fetch("/api/attachment", {
          method: "POST",
          body: JSON.stringify({
            name: files[0].name,
            size: files[0].size,
            type: files[0].type,
          })
        }).then(res => res.json()).then(async ({ attachment, url }) => {
            console.log(attachment)
          const res = await fetch(url, {
            method: "PUT",
              headers: {
                "Content-Type": "multipart/form-data",
              },
            body: files[0]
          })
          console.log(res);
        });
      }}>
        Upload first file
      </button>
    </div>
  )
}
