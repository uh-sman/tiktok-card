import React from "react";
import { useForm } from "react-hook-form";

type UserSubmitForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
    male:boolean;
    female:boolean;
  };
const AuthForm: React.FC = () => {
    const {register,handleSubmit, reset} = useForm<UserSubmitForm>()
    const onSubmit = (data: UserSubmitForm) => {
        console.log(data)
    }
    return (
        <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
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
  
          <div className="flex gap-4">
          <label htmlFor="gender" className="font-bold">
              gender
            </label>
            <input
              type="checkbox"
              {...register('male')}
            />
            <input
              type="checkbox"
              {...register('female')}
            />
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
    )
}

export default AuthForm;