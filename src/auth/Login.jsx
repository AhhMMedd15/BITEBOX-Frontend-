import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MailOpen, LockKeyhole, Loader } from 'lucide-react'



const Login = () => {

    let loading = false;

    const [input, setinput] = useState({
        email: "",
        password: "",
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
            <div className='container max-w-full bg-pastel min-w-[400px] p-5 h-screen flex flex-col justify-center items-center'>
                <div className='border p-5 border-deep-teal  md:w-[50%] bg-white lg:w-[40%] shadow-2xl flex justify-center items-center'>
                    <form onSubmit={handlesubmit} className='border p-8 border-deep-teal  sm:w-full flex items-center flex-col'>

                        <h1 className=' text-5xl text-deep-teal font-bold '>Bite_Box</h1>
                        <div className='w-full relative'>
                            <Input className='w-full h-10 px-10 border mt-10 border-deep-teal  focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='email'
                                name="email"
                                value={input.email}
                                onChange={handlechange}
                                placeholder='Enter your Email'
                            />
                            <MailOpen className='absolute inset-y-3 text-deep-teal mt-9 ml-2' />
                            <Input className='w-full h-10 px-10 border mt-5 border-deep-teal  focus-visible:ring-deep-teal focus-visible:ring-1'
                                type='password'
                                name="password"
                                value={input.password}
                                onChange={handlechange}
                                placeholder='Enter your Password'
                            />
                            <LockKeyhole className='absolute inset-y-20 text-deep-teal mt-7 ml-2' />
                        </div>
                        <div className='mb-3'>       
                            <Link className='text-deep-teal' to='/forgotpassword'>Forgot password?</Link>
                        </div>

                        {
                            loading ?
                                <Button className='w-full  cursor-pointer bg-deep-teal hover:bg-hover'><Loader className='animate-spin' /> Please Wait</Button>
                                :
                                <Button className='w-full cursor-pointer bg-deep-teal hover:bg-hover'>Login</Button>
                        }


                        <h1 className='mt-10 lg:text-[1.3vw]'>Don't have an account?
                            <Link to='/signup' className='text-deep-teal'> Sign up</Link>
                        </h1>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login