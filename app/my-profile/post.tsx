
import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from "@heroicons/react/16/solid";
import { PostType } from "@/types/post";

function Island({ children, className }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`${className} rounded-lg bg-base-200 overflow-hidden `}>
      {children}
    </div>
  )
}

function Post({ post }: { post: PostType }) {
  if (post) {

    return (
      <Island className="flex flex-col gap-4 p-4 shadow-lg rounded-lg">
        <div className=" flex gap-4">
          <img
            src={post.user.avatarLink}
            alt={post.user.name}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className=" flex flex-col  justify-center">
            <div className=" font-bold text-lg  ">{post.user.name}</div>
            <div className="  font-light text-sm">
              will be posted 3.d from now
            </div>
          </div>
        </div>
        <p>{post.caption}</p>
        <img
          className="rounded-lg object-contain bg-slate-600 max-h-[500px]"
          src="https://images.unsplash.com/photo-1703088066010-af61bb552da4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className=" flex gap-8  justify-evenly font-semibold items-center border-t-[1px] border-b-[1px] border-neutral-700">
          <button className="flex items-center gap-2  hover:bg-[#00000030] px-8 py-2 rounded-xl">
            <HeartIcon className="w-8 h-8" />
            Like
          </button>

          <button className="flex items-center gap-2   hover:bg-[#00000030] px-8 py-2 rounded-xl">
            <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
            Comment
          </button>
        </div>
        <div className="comments">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              className=" flex-1 peer px-4 py-2 input input-bordered rounded-full "
            />
            <button className="btn btn-primary" >
              Comment
            </button>
          </div>
        </div>
      </Island>
    )
  }


  return (
    <Island className="flex flex-col gap-4 p-4 shadow-lg rounded-lg">
      <div className=" flex gap-4">
        <img
          src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
        <div className=" flex flex-col  justify-center">
          <div className=" font-bold text-lg  ">Abbas Askari</div>
          <div className="  font-light text-sm">
            will be posted 3.d from now
          </div>
        </div>
      </div>
      <img
        className="rounded-lg object-contain bg-slate-600 max-h-[500px]"
        src="https://images.unsplash.com/photo-1703088066010-af61bb552da4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className=" flex gap-8  justify-evenly font-semibold items-center border-t-[1px] border-b-[1px] border-neutral-700">
        <button className="flex items-center gap-2  hover:bg-[#00000030] px-8 py-2 rounded-xl">
          <HeartIcon className="w-8 h-8" />
          Like
        </button>

        <button className="flex items-center gap-2   hover:bg-[#00000030] px-8 py-2 rounded-xl">
          <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
          Comment
        </button>
      </div>
      <div className="comments">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Write a comment..."
            className=" flex-1 peer px-4 py-2 input input-bordered rounded-full "
          />
          <button className="btn btn-primary" >
            Comment
          </button>
        </div>
      </div>
    </Island>
  );
}

export default Post;
