import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
    return (<>
    <nav className='flex-between w-full mb-10 pt-10 pl-7'>
     <Link href="/" className='flex gap-2 flex-center '>
     <Image
      src="/assets/images/logo.svg" alt="angestrom" className='object-contain' width={40} height={40}
     />
     <p className='logo_text'>Haha</p>
     </Link>
     <div className='flex gap-3 md:gap-5'>
              <Link href="/sign-in" className='black_btn'>SignIn</Link>
              <Link href="/sign-up" className='black_btn'>SignUp</Link>
              
              
            </div>
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