import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {

  const navigate = useNavigate()
  const [error,setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
} = useForm();

const Submit =(e)=>{
const {email,password} = e
if(email && password){
  console.log(password);
  axios.post("http://localhost:4000/admin",e)
    .then((response)=>{
        navigate('/admin/dashboard')
    }).catch((error)=>{
      const errormsg=error.response.data.msg
      setError(true)
    })
}else{
  console.log("poyi"); 
}
}
  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <div className='relative w-full h-full'>
        {/* <video
          src={bgvideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover '
        /> */}
        <div className='absolute flex flex-col  justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className="w-3/12 border rounded-lg shadow-md  p-5 my-auto">
              <h1 className="text-2xl font-extrabold text-center m-3 text-emerald-400 ">Adm!n Log!n</h1>
              { error?<h1 className="text-red-500 text-center mx-auto">Email or password incorrect</h1>:<h1></h1>}
              <form onSubmit={handleSubmit(Submit)}>
                    {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
                        <h1 className="text-left text-lg font-mono mt-2" >Email</h1>
                        <input type="email" className=" w-full p-2 shadow-md bg-slate-50 border-4 border-emerald-50"
                         name="email"
                        {...register("email", {
                            required: "Email Required",
                            pattern: {
                                value: /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/,
                                message: "invalid Email Address"
                            }
                        })} />
                    {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                        <h1 className="text-left text-lg font-mono mt-2" >Password</h1>
                        <input type="password" className=" w-full p-2 shadow-md bg-slate-50 border-4 border-emerald-50"
                         name="password"
                        {...register("password", {
                            required: "password Required",
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "invalid password "
                            }
                        })} />
                    {errors.password && (<span className='text-red-500'>{errors.password.message}</span>)} 
                        <button className="bg-emerald-400 p-2 rounded-md mt-7 text-white font-bold w-full" type="submit">Signup</button>
                        </form>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin