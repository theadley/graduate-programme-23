import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      Hello Grads
      <Link href={"/todo"}>Todo List</Link>
    </div>
  );
}
