"use client";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader,CardDescription,CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
export default function SignIn(){
  return (
    <div className='h-full flex items-center justify-center bg-black-500'>
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
            <CardTitle className='text-center text-2xl'>
                Sign In
            </CardTitle>
            <CardDescription className='text-sm text-center text-accent-foreground'>
                <h1 className='orange_gradient text-2xl'>use email or services, to Sign in to your account</h1>
            </CardDescription>
            </CardHeader>
            
            <CardContent className='px-2 sm:px-6'>
                 <form action="" className='space-y-3'>
                   
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
                 <p className='text-center text-sm mt-2 text-muted-foreground'>Create an Account?
                  <Link href="/sign-up"  className='text-sky-700 ml-4 hover:underline cursor-pointer'>SignUp</Link>
                 </p>
            </CardContent>
        </Card>    
    </div>
  )
}