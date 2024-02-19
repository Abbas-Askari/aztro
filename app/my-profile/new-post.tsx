"use client";

import { AttachmentType } from "@/types/attachment";
import { UserType } from "@/types/user";
import React from "react";
import { useState } from "react";

function Avatar({ user} : {user: UserType}) {
  return (
    <div className=''>
      <img src={user.avatarLink} className='aspect-square w-16 border-base-200 border-4 rounded-full ' />
    </div>
  )
}

// <button
//   className=" text-black btn btn-primary px-8"
//   // className=" rounded-lg bg-emerald-500 hover:bg-emerald-700 text-white px-4 py-2"
//   onClick={() => document.getElementById("my_modal_3").showModal()}
// >
//   New Post
// </button>

function NewPostsButton({user} : {user: UserType}) {
  const [images, setImages] = useState<File[]>([]);
  const [caption, setcaption] = useState("");


  async function submit() {
    const attachments: AttachmentType[] = [];
    for (const image of images) {
      const res = await fetch("http://localhost:3000/api/attachment", {
        method: "POST",
        body: JSON.stringify({ size: image.size, name: image.name, type: image.type })
      })
      const { attachment, url } = await res.json();
      attachments.push(attachment);
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: image
      })
      console.log(resp);
    }
    const res = await fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: JSON.stringify({ caption, attachments })
    })
    const data = await res.json();
    console.log({ data })
  }

  return (
    <>
      <input onClick={() => {
        const modal = document.getElementById('post_modal') as HTMLDialogElement;
        modal.showModal();
      }} className='input input-bordered rounded-full flex-1 input-md placeholder:opacity-50' placeholder='Write a new post' />
      <dialog id="post_modal" className="modal ">
        <div className="modal-box ">
          <div className=" font-bold text-lg pb-1 border-b-2 border-neutral-300 text-center">
            Create Post
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className=" flex items-center gap-4 my-4">
            <Avatar user={user}/>
            <div>Taha Shah</div>
          </div>
          <div className="my-4 max-h-[60vh] overflow-y-auto bg-neutral-300 rounded-lg p-3">
            <textarea
              className="w-full h-max min-h-max bg-inherit text-[#000000b0] resize-none outline-none"
              placeholder="What's on your mind?"
              onChange={(e) => setcaption(e.target.value)}
              value={caption}
            >
            </textarea>

            {images.map((file) => (
              <div className=" relative m-4 rounded-lg bg-neutral-400 p-4 overflow-hidden">
                <img
                  key={Math.random()}
                  src={URL.createObjectURL(file)}
                  className="mx-auto"
                />
                <button
                  onClick={() =>
                    setImages(images.filter((image) => image !== file))
                  }
                  className="btn btn-sm btn-circle opacity-50 hover:opacity-100 absolute right-2 top-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <label htmlFor="file" className="flex-1 btn ">
              Add Media
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => {
                console.log(e.target.files);
                setImages([...images, ...Array.from(e.target.files!)]);
              }}
              className="hidden"
            />

            <button onClick={submit} className="flex-1 btn  btn-primary">Post</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default NewPostsButton;
