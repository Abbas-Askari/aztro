"use client";

import React from "react";
import { useState } from "react";

function Avatar({ }) {
  return (
    <div className=''>
      <img src="https://plus.unsplash.com/premium_photo-1706727288505-674d9c8ce96c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='aspect-square w-16 border-base-200 border-4 rounded-full ' />
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

function NewPostsButton() {
  const [images, setImages] = useState<File[]>([]);

  return (
    <>
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
            <Avatar />
            <div>Taha Shah</div>
          </div>
          <div className="my-4 max-h-[60vh] overflow-y-auto bg-neutral-300 rounded-lg p-3">
            <textarea
              className="w-full h-max min-h-max bg-inherit text-[#000000b0] resize-none outline-none"
              placeholder="What's on your mind?"
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

            <button className="flex-1 btn  btn-primary">Post</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default NewPostsButton;
