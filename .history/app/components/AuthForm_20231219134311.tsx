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
    const onSubmit = (data: UserSubmitForm) => {}
    return (
        <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              {...register('username')}
            //   className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
                {/* {errors.username?.message} */}
                </div>
          </div>
  
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              {...register('email')}
            //   className=
            //   {`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
                {/* {errors.email?.message} */}
                </div>
          </div>
  
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register('password')}
            //   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">
                {/* {errors.password?.message} */}
                </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
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
  
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
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