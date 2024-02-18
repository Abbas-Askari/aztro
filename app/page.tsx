import { Comp } from "@/posts/page";
import { AttachmentType } from "@/models/attachments";

export default async function Home() {
  const { attachments }: { attachments: AttachmentType[] } = await (await fetch("http://localhost:3000/api/attachment")).json();
  console.log({ attachments: attachments.map(a => a.url) })
  console.log("noice")
  return (
    <>
      <div>
        {
          attachments.map(attachment => (
            <div>
            <a  className="link link-info" href={attachment.url}
            > {attachment.name}
            </a>
            </div>
          ))
        }
      </div>
      <Comp />
    </>
  );
}
