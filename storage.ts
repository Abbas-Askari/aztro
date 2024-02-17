import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl }  from "@aws-sdk/s3-request-presigner";

console.log({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.ENDPOINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  }
});

async function generateSignedUrl(key: string) {
  return await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: "chat", Key: key })
  );
}

module.exports = { generateSignedUrl };

