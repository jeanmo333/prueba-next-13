/** @format */
"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  // console.log(session, status);

  return (
    <nav className='bg-blue-gray-900 p-4'>
      <div className='container mx-auto flex justify-between'>
        <Link href='/'>
          <h1 className='font-bold text-xl'>NextAuth</h1>
        </Link>

        <ul className='flex gap-x-2'>
          {session ? (
            <>
              <li className='px-3 py-1'>
                <Link href='/admin/dashboard'>Dashboard</Link>
              </li>
              <Button className='h-8' size='sm' onClick={() => signOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <li className='bg-indigo-500 px-3 py-1'>
                <Link href='/auth/login'>Login</Link>
              </li>
              <li className='bg-indigo-700 px-3 py-1'>
                <Link href='/auth/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
