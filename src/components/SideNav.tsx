import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;
  console.log(user);

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user?.id}`}>Profile</Link>
          </li>
        )}

        {user == null ? (
          <li>
            <button onClick={() => signIn()} className="">
              {" "}
              Sign In
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => signOut()} className="">
              {" "}
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
