import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="text-3xl font-bold underline">
      Hello World
      <Button appName="User Webapp" className="bg-blue-500 text-white p-2 rounded-md">Click me</Button>
    </div>
  );
}
