import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function POST(req) {
  const data = await req.formData();
  const file = data?.get("file");
  if (file) {
    const s3Client = new S3Client({
      region: "ap-south-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });

    // make a random new file name because if someone else uploads a file with same name then there will be a collision
    // yarn add uniqID

    const extension = file.name.split(".").slice(-1);
    // console.log(extension);
    const newFileName = uniqid() + "." + extension;

    // Read the file stream and add chunks to buffer
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const bucket = "gaurav-food-ordering-app";
    s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: newFileName,
        ACL: "public-read",
        ContentType: file.type,
        Body: buffer,
      })
    );

    const link = "https://" + bucket + ".s3.amazonaws.com/" + newFileName;
    return Response.json(link);
  }
  return Response.json(true);
}
