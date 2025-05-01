"use client";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader,CardDescription,CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import {useRouter} from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { TriangleAlert } from 'lucide-react';
export default function SignIn(){
    const [email,setEmail] = useState<string>("");  
    const [password,setPassword] = useState<string>("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const handlerSubmit=  async (e:React.FormEvent)=>{
      e.preventDefault();
      setPending(true);
      const res = await signIn(`credentials`,{
        redirect:false,
        email,
        password,
  
      });
      if(res?.ok){
         router.push("/");
        toast.success("login successfully");
      }
      else if(res?.status === 401){
        setError("Invalid credentials");
        setPending(false);
      }
      else{
        setError("something is wrong");
      }

    }
    const handleProvider = (
        event: React.MouseEvent<HTMLButtonElement>,
        value: "github" | "google"
      ) => {
        event.preventDefault();
        signIn(value, { callbackUrl: "/" });
      };
  return (
    <>
    
    <div className='h-full flex items-center justify-center bg-black-500 mt-10'>
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
            <CardTitle className='text-center text-2xl'>
                Sign In
            </CardTitle>
            <CardDescription className='text-sm text-center text-accent-foreground'>
                <h1 className='orange_gradient text-2xl'>use email or services, to Sign in to your account</h1>
            </CardDescription>
            </CardHeader>
            {
              !!error && (
                <div className="bg-red-800 p-3 rounded-md flex items-center gap-x-2 text-sm mb-6">
                  <TriangleAlert/>
                  <p>{error}</p>
                </div>
              )
            }
            <CardContent className='px-2 sm:px-6'>
                 <form onSubmit={handlerSubmit} className='space-y-3'>
                   
                   <Input
                   type='email'
                   disabled={pending}
                   placeholder='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   required
                   />
                   <Input
                   type='password'
                   disabled={pending}
                   placeholder='password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   required
                   />
                   
                   <Button
                   type='submit'
                   className='w-full black_btn'
                   size='lg'
                   disabled={pending}
                   >Continue</Button>
                 </form>
                 <Separator/>
                 <div className='flex my-2 justify-evenly mx-auto items-center'>
                    <Button disabled={false} variant='outline' onClick={(e)=>handleProvider(e,"google")} size="lg" className='bg-slate-300 hover:bg-slate-400 hover:scale-110'>
                     <FcGoogle className='size-8 left-2.5 top-2.5'/>
                    </Button>
                    <Button disabled={false} variant='outline' onClick={(e)=>handleProvider(e,"github")} size="lg" className='bg-slate-300 hover:bg-slate-400 hover:scale-110'>
                     <FaGithub className='size-8 left-2.5 top-2.5'/>
                    </Button>
                 </div>
                 <p className='text-center text-sm mt-2 text-muted-foreground'>Create an Account?
                  <Link href="/sign-up"  className='text-sky-700 ml-4 hover:underline cursor-pointer'>SignUp</Link>
                 </p>
            </CardContent>
        </Card>    
    </div>
    </>
  )
}