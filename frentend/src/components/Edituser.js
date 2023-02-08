import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from 'react-router-dom'
// import bgvideo from '../assets/video.mp4'



const EditUser = () => {

    console.log("sfdghjkk");
    const { data } = useParams()
    const [userdata, setUserdata] = useState([])
    console.log(data);
    useEffect(() => {
        axios.get("http://localhost:4000/admin/edit/" + data)
            .then((res => {
                let { data } = res
                console.log("data idd");
                console.log("data idd" + data._id);
                setUserdata(data)
            }))
    }, [])



    const navigater = useNavigate()
    const [error, setError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const Submit = (e) => {
        const { name, email } = e
        e.id = userdata._id
        if (name && email) {
            console.log(email);
            axios.post("http://localhost:4000/admin/update", e)
                .then((response) => {
                    navigater('/admin/dashboard')
                }).catch((error) => {
                    const errormsg = error.response.data.msg
                    console.log(errormsg)
                    setError(true)
                })
        } else {
            console.log("error");
        }

    }
    return (


        <div className='flex flex-col justify-start items-center h-screen'>
            <div className="w-3/12 border rounded-lg shadow-md  p-5 my-auto">
                <h1 className="text-2xl font-extrabold text-center m-3 text-emerald-400 ">Ed!t user</h1>
                {error ? <h1 className="text-red-500 text-center mx-auto">user already exist</h1> : <h1></h1>}
                <form onSubmit={handleSubmit(Submit)}>
                    <h1 className="text-left text-lg font-mono mt-3" >Username</h1>
                    <input type="text" className=" w-full p-2 shadow-md bg-slate-50 border-4 border-emerald-50 focus:outline-none"
                        name="name" defaultValue={userdata.username}
                        {...register("name", { required: "user name Required" })}
                    />
                    {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
                    <h1 className="text-left text-lg font-mono mt-3" >Email</h1>
                    <input type="email" className=" w-full p-2 shadow-md bg-slate-50 border-4 border-emerald-50"
                        name="email" defaultValue={userdata.email}
                        {...register("email", {
                            required: "Email Required",
                            pattern: {
                                value: /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/,
                                message: "invalid Email Address"
                            }
                        })} />
                    {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                    <button className="bg-emerald-400 p-2 rounded-md mt-7 text-white font-bold w-full" type="submit">Update</button>
                </form>
                <Link to={'/admin/dashboard'}>
                    <p className="text-left mt-5 font-light text-teal-600 ">Cancel</p>
                </Link>
            </div>
        </div>
    )
}

export default EditUser
