"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />;
  }

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center w-full p-4">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg" // Replace with your logo path
              alt="Movies Website Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/" className="text-3xl font-bold text-black hover:text-gray-600 transition">
            Angestrom
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {session ? (
            <>
            <Link href="/" className="black_btn text-black hover:text-red-400 transition">
                Home
              </Link>
              <Link href="component/movies" className="black_btn text-black hover:text-red-400 transition">
                Movies
              </Link>
              <Link href="/component/favorites" className="black_btn text-black hover:text-red-400 transition">
                Favorites
              </Link>
              <Link href="/component/service" className="black_btn text-black hover:text-red-400 transition">
                MyList
              </Link>
              
              {/* <Link href="/component/contact" className="black_btn text-black hover:text-red-400 transition">
                Contact
              </Link> */}
            </>
          ) : (
            <>
              {/* <span className="text-gray-400 cursor">Services</span>
              <span className="text-gray-400 cursor">About</span>
              <span className="text-gray-400 cursor">Contact</span> */}
            </>
          )}
        </div>
        {session && (
          <Link href="/Dashboard" className="black_btn">
            Dashboard
          </Link>
        )}
      </div>

      {/* Right Section: User Menu */}
      {session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative float-right p-4 md:p-8">
            <div className="flex gap-4 items-center">
              <span>{session.user?.name}</span>
              <Avatar className="size-10 hover:opacity-75 transition">
                <AvatarImage
                  className="size-10 hover:opacity-75 transition"
                  src={session.user?.image || undefined}
                />
                <AvatarFallback className="bg-sky-900 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="center" side="bottom" className="w-50">
            <DropdownMenuItem
              className="h-10 bg-gray-300 text-black hover:bg-gray-600 transition mt-2 mb-2"
              onClick={() => router.push("/component/profile")}
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              className="h-10 bg-gray-300 text-black hover:bg-gray-600 transition mt-2 mb-2"
              onClick={() => router.push("/component/setting")}
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              className="h-10 bg-gray-300 text-black hover:bg-gray-600 transition mt-2 mb-2"
              onClick={() => handleSignOut()}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-4">
          <Button className="bg-gray-200 text-black hover:bg-gray-600 transition">
            <Link href="/component/sign-in">Sign in</Link>
          </Button>
          <Button className="bg-gray-200 text-black hover:bg-gray-600 transition">
            <Link href="/component/sign-up">Sign up</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default UserButton;