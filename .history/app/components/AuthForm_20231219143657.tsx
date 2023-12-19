import React from "react";
import { useForm } from "react-hook-form";
// the type of data 
type UserSubmitForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
    male:boolean;
    female:boolean;
    Bio:string;
    DateOfBirth: number
  };
const AuthForm: React.FC = () => {
    // using the useForm hook from the react-hook-form package
    const {register,handleSubmit, reset} = useForm<UserSubmitForm>()
    // the onSubmit handler
    const onSubmit = (data: UserSubmitForm) => {
        console.log(data)
    }
    return (
        <div className="flex justify-center w-full max-w-xxl">
        <div className="">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-xl text-center">Register</h2>
          <div className="flex flex-col">
            <label>Username</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            //   using the hook to handle form state
            {...register('username')}
            />
            <div className="invalid-feedback">
                </div>
          </div>
  
          <div className="flex flex-col">
            <label>Email</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('email')}
            />
            <div className="invalid-feedback">
                </div>
          </div>
  
          <div className="flex flex-col">
            <label>Password</label>
            <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register('password')}
            />
            <div className="invalid-feedback">
                </div>
          </div>
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('confirmPassword')}
            />
            <div className="invalid-feedback">
            </div>
          </div>
          <div className="flex flex-col">
            <label>DOB</label>
            <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              {...register('DateOfBirth')}
            />
            <div className="invalid-feedback">
            </div>
          </div>
          <div className="flex flex-col">
            <label>Bio</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('Bio')}
            />
            <div className="invalid-feedback">
            </div>
          </div>
  
          <div className="">
          <label htmlFor="gender" className="font-md">
              gender
            </label>
           <div className="flex items-center gap-4">
           <div className="">
                <label className="mr-2" htmlFor="Male">male</label>
            <input
              type="checkbox"
              {...register('male')}
              />
           
            </div>
            <div className="">
                <label className="mr-2" htmlFor="Female">Female</label>
            <input
              type="checkbox"
              {...register('female')}
              />
            </div>
           </div>
            <div className="invalid-feedback">
                </div>
          </div>
          <div className="">
            <input
              type="checkbox"
              {...register('acceptTerms')}
              />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <div className="invalid-feedback">
                </div>
          </div>
  
          <div className="flex justify-center gap-20">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              Reset
            </button>
          </div>
        </form>
        </div>
      </div>
    )
}

export default AuthForm;