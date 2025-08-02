import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <div className="text-3xl font-bold underline">
      Hello World
      <br />
      <Button appName="User Webapp" className="bg-blue-500 text-white p-2 rounded-md">Click me</Button>
    </div>
  );
}
