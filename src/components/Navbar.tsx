import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignIn, { SignOut } from "./auth-component";
import { auth } from "@/auth";


const Navbar = async () => {
  const session = await auth()
  console.log(session?.user);
  
  const user = false; // Replace with actual authentication logic

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/">Logo...</Link>
        </div>

        <ul className="flex space-x-8 items-center">
          <li><Link href="/" className="hover:text-gray-100">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-100">About</Link></li>
          <li><Link href="/dashboard" className="hover:text-gray-100">Dashboard</Link></li>
          <li><Link href="/contact" className="hover:text-gray-100">Contact</Link></li>
          <li><Link href="/profile" className="hover:text-gray-100">Contact</Link></li>
        </ul>

        {session?.user ? (
          <div className="flex space-x-4 items-center">
            <Link href="/profile" className="rounded-full">
              <Image src={`${session?.user.image}`} alt="profile" width={30} height={30} className="rounded-full shrink-0" />
            </Link>
            <div>
            <SignOut/>
            </div>
          </div>
        ) : (
          <div className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
            <SignIn/>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
