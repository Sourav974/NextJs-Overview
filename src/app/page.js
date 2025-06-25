import Link from "next/link";
import Navigation from "./compoents/Navigation";

export default function Home() {
  return (
    <div>
      <h1>Welcome to wild oasis!</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
