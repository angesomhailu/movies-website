"use client"

import Link from 'next/link';
import Image from 'next/image';
import  UserButton  from '@/components/user-button';
import { SessionProvider } from 'next-auth/react';
export default function Home() {
    return (<>

    <div>
      
      
    </div>
     <nav className='flex-between w-full'>
     <Link href="/" className='flex gap-2 flex-center '>
     <Image
      src="/assets/images/logo.svg" alt="angestrom" className='object-contain' width={40} height={40}
     />
     <p className='logo_text'>Haha</p>
     </Link>
     <SessionProvider>
         <UserButton/>
      </SessionProvider>
     </nav>
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">Discover and Share
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">Movies Powerd Prompts</span>
         </h1>
         <p className="text-center desc">Haha is the paid online downloader website for the download,share the videos</p>
      </section>
    </>
      
    )
  }