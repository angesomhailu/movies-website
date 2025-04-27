"use client";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader,CardDescription,CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
export default function SignUp(){
  return (
    <>
    <nav className='flex-between w-full '>
      <div>
<Link href="/" className='flex gap-2 flex-center mt-7 ml-10'>
     <Image
      src="/assets/images/logo.svg" alt="angestrom" className='object-contain' width={40} height={40}
     />
     <p className='logo_text'>Haha</p>
     </Link>
    <div className='flex gap-3 md:gap-5 ml-230 '>
          <Link href="/sign-in" className='black_btn'>SignIn</Link>
          <Link href="/sign-up" className='black_btn'>SignUp</Link>
        </div>
      </div>
     
     </nav>
     
    <div className='h-full flex items-center justify-center bg-black-500 mt-10'>
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
            <CardTitle className='text-center text-2xl'>
                Sign Up
            </CardTitle>
            <CardDescription className='text-sm text-center text-accent-foreground'>
                <h1 className='orange_gradient text-2xl'>use email or services, to create account</h1>
            </CardDescription>
            </CardHeader>
            
            <CardContent className='px-2 sm:px-6'>
                 <form action="" className='space-y-3'>
                   <Input
                   type='text'
                   disabled={false}
                   placeholder='Enter your name'
                   value={""}
                   onChange={()=>{}}
                   required
                   />
                   <Input
                   type='email'
                   disabled={false}
                   placeholder='email'
                   value={""}
                   onChange={()=>{}}
                   required
                   />
                   <Input
                   type='password'
                   disabled={false}
                   placeholder='password'
                   value={""}
                   onChange={()=>{}}
                   required
                   />
                   <Input
                   type='password'
                   disabled={false}
                   placeholder='confirm password'
                   value={""}
                   onChange={()=>{}}
                   required
                   />
                   <Button
                   className='w-full black_btn'
                   size='lg'
                   disabled={false}
                   >Continue</Button>
                 </form>
                 <Separator/>
                 <div className='flex my-2 justify-evenly mx-auto items-center'>
                    <Button disabled={false} variant='outline' onClick={()=>{}} size="lg" className='bg-slate-300 hover:bg-slate-400 hover:scale-110'>
                     <FcGoogle className='size-8 left-2.5 top-2.5'/>
                    </Button>
                    <Button disabled={false} variant='outline' onClick={()=>{}} size="lg" className='bg-slate-300 hover:bg-slate-400 hover:scale-110'>
                     <FaGithub className='size-8 left-2.5 top-2.5'/>
                    </Button>
                 </div>
                 <p className='text-center text-sm mt-2 text-muted-foreground'>Already have an Account?
                  <Link href="/sign-in"  className='text-sky-700 ml-4 hover:underline cursor-pointer'>SignIn</Link>
                 </p>
            </CardContent>
        </Card>    
    </div>
    </>
  )
}