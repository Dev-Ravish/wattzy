"use client";
import dynamic from "next/dynamic";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="absolute top-0 right-0 p-4">
        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="Home"
                labelIcon={<User />}
                href={"/"}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
      <div>
        <Map />
      </div>
      {children}
    </div>
  );
}
