'use client'
import Input from "./components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
export default function Home() {
  // const { register, handleSubmit, reset } = useForm<FieldValues>({
  //   defaultValues: {
  //     Username: "",
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     DateOfBirth: '',
  //     Bio: '',
  //     gender: '',
  //     termsAndConditions: ''
  //   }
  // })

  // const onSubmit: SubmitHandler<FieldValues> = () => {

  // }

  return (
    <div className="bg-black h-screen w-screen">
      {/* <div className="flex justify-center"> */}
      <div className="flex justify-center  w-full flex-col">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
        Email Address
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
        Password
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conFirmPassword">
        confirmPassword
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        DOB
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="DateOfBirth" type="date" placeholder="DOB" />
      {/* <p className="text-red-500 text-xs italic">Please confirm your password.</p> */}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        confirmPassword
      </label>
      <Input onChange={() => {}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Bio" type="text" placeholder="Bio" />
      {/* <p className="text-red-500 text-xs italic">Please confirm your password.</p> */}
    </div>
    <div className="mb-6">
      <div className="flex gap-10">
        <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
        Male
      </label>
      <Input onChange={() => {}} className="" id="male" type="checkbox" placeholder="male" />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            female
          </label>
      <Input className="" onChange={() => {}}  id="female" type="checkbox" placeholder="female" />
        </div>
      </div>
    </div>
    <div className="mb-6 flex flex-col-reverse gap-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        terms and conditions
      </label>
      <Input onChange={() => {}} className="" id="terms" type="checkbox" placeholder="terms and conditions" />
      {/* <p className="text-red-500 text-xs italic">Please confirm your password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
        
      </div>
      {/* </div> */}
    </div>
  );
}



{/* <form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}
