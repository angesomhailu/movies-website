"use client";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader,CardDescription,CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import {useState } from 'react';
import {toast} from 'sonner';
import {useRouter} from 'next/navigation';
import { TriangleAlert } from 'lucide-react';
import {signIn} from 'next-auth/react';
export default function SignUp(){
  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [pending,setPending] = useState(false);
  const [error ,setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e:React.FormEvent)=>{
   e.preventDefault();
   setPending(true)
   const res = await fetch(`/api/auth/signup`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(form)
   });
   const data= await res.json();
   if(res.ok){
    setPending(false)
    toast.success(data.message);
    router.push('/sign-in');
   }
   else if(res.status === 400){
    setPending(false)
    setError(data.message);
   }
   else if(res.status === 500){
    setPending(false)
    setError(data.message);
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
                Sign Up
            </CardTitle>
            <CardDescription className='text-sm text-center text-accent-foreground'>
                <h1 className='orange_gradient text-2xl'>use email or services, to create account</h1>
            </CardDescription>
            </CardHeader>
            {
              !!error && (
                <div className="bg-red-700 p-3 rounded-md flex items-center gap-x-2 text-sm  mb-6">
                  <TriangleAlert/>
                  <p>{error}</p>
                </div>
              )
            }
            
            <CardContent className='px-2 sm:px-6'>
                 <form  onSubmit={handleSubmit} className='space-y-3'>
                   <Input
                   type='text'
                   disabled={pending}
                   placeholder='Enter Full name'
                   value={form.name}
                   onChange={(e)=>{setForm({...form,name:e.target.value})}}
                   required
                   />
                   <Input
                   type='email'
                   disabled={pending}
                   placeholder='email'
                   value={form.email}
                   onChange={(e)=>{setForm({...form,email:e.target.value})}}
                   required
                   />
                   <Input
                   type='password'
                   disabled={pending}
                   placeholder='password'
                   value={form.password}
                   onChange={(e)=>{setForm({...form,password:e.target.value})}}
                   required
                   />
                   <Input
                   type='password'
                   disabled={pending}
                   placeholder='confirm password'
                   value={form.confirmPassword}
                    onChange={(e)=>{setForm({...form,confirmPassword:e.target.value})}}
                   required
                   />
                   <Button
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
                 <p className='text-center text-sm mt-2 text-muted-foreground'>Already have an Account?
                  <Link href="sign-in"  className='text-sky-700 ml-4 hover:underline cursor-pointer'>SignIn</Link>
                 </p>
            </CardContent>
        </Card>    
    </div>
    </>
  )
}