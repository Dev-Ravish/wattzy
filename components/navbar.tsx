import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold p-4">Wattzy</h1>
      </div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-4 m-4">
            <Link href="/stations">Stations</Link>
          </div>
          <UserButton/>
        </SignedIn>
      </header>
    </div>
  );
}
