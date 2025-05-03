import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MailOpen, LockKeyhole, Loader, CircleUserRound } from 'lucide-react'



const Signup = () => {
    let loading = false
    const [input, setinput] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setinput({ ...input, [name]: value });
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <>
            <div className='container max-w-full p-5 bg-pastel h-screen min-w-[400px] flex justify-center items-center'>
                <div className='border p-5 border-deep-teal md:w-[50%] bg-white shadow-2xl lg:w-[40%] flex justify-center items-center'>
                    <form onSubmit={handlesubmit} className='border p-8 border-deep-teal w sm:w-full flex items-center flex-col'>
                        <h1 className=' text-5xl text-deep-teal font-bold '>Bite_Box</h1>
                        <div className='w-full relative'>
                            <Input className='w-full h-10 px-10 border mt-10 border-deep-teal focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='text'
                                name="fullname"
                                value={input.fullname}
                                onChange={handlechange}
                                placeholder='Enter your Full Name'
                            />
                            <CircleUserRound className='absolute text-deep-teal inset-y-12 ml-2' />
                            <Input className='w-full h-10 border px-10 mt-5 border-deep-teal focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='email'
                                name="email"
                                value={input.email}
                                onChange={handlechange}
                                placeholder='Enter your Email'
                            />
                            <MailOpen className='absolute text-deep-teal inset-y-27 ml-2' />
                            <Input className='w-full h-10 border px-10 mt-5 border-deep-teal focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='password'
                                name="password"
                                value={input.password}
                                onChange={handlechange}
                                placeholder='Enter your Password'
                            />
                            <LockKeyhole className='absolute text-deep-teal inset-y-35 mt-7 ml-2' />
                            <Input className='w-full h-10 border px-10 mt-5 border-deep-teal focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='password'
                                name="confirmpassword"
                                value={input.password}
                                onChange={handlechange}
                                placeholder='Confirm Password'
                            />
                            <LockKeyhole className='absolute text-deep-teal inset-y-50 mt-7 ml-2' />
                        </div>
                        {
                            loading ?
                                <Button className='w-full mt-5 cursor-pointer bg-deep-teal hover:bg-hover'><Loader className='animate-spin' /> Please Wait</Button>
                                :
                                <Button className='w-full mt-5 cursor-pointer bg-deep-teal hover:bg-hover'>Sign up</Button>
                        }

                        <h1 className='mt-10 lg:text-[1.3vw]'>Already have an account?
                            <Link to='/login' className='text-deep-teal'> Login</Link>
                        </h1>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup