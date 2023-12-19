import React from "react";
import { useForm } from "react-hook-form";

type UserSubmitForm = {
    // fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };
const AuthForm: React.FC = () => {
    const {register,handleSubmit} = useForm<UserSubmitForm>()
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
                {/* {errors.username?.message} */}
                </div>
          </div>
  
          <div className="flex flex-col">
            <label>Email</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('email')}
            //   className=
            //   {`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
                {/* {errors.email?.message} */}
                </div>
          </div>
  
          <div className="flex flex-col">
            <label>Password</label>
            <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('password')}
            //   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
                {/* {errors.password?.message} */}
                </div>
          </div>
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('confirmPassword')}
            //   className={`form-control ${
            //     errors.confirmPassword ? 'is-invalid' : ''
            //   }`}
            />
            <div className="invalid-feedback">
              {/* {errors.confirmPassword?.message} */}
            </div>
          </div>
  
          <div className="form-group form-check">
            <input
              type="checkbox"
              {...register('acceptTerms')}
            //   className={`form-check-input ${
            //     errors.acceptTerms ? 'is-invalid' : ''
            //   }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <div className="invalid-feedback">
                {/* {errors.acceptTerms?.message} */}
                </div>
          </div>
  
          <div className="flex justify-center gap-20">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
            <button
              type="button"
            //   onClick={() => reset()}
              className="btn btn-warning float-right"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    )
}

export default AuthForm;