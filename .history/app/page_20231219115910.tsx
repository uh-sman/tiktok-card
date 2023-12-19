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
        <form className="flex flex-col" onSubmit={()=> {}}>
          <Input
            className=""
            id="Username"
            placeholder="Username"
            type="text"
            onChange={() => {}}
          />
          <Input
            className=""
            id="email"
            placeholder="Email Address"
            type="email"
            onChange={() => {}}
          />
          <Input
            className=""
            id="password"
            placeholder="password"
            type="password"
            onChange={() => {}}
          />
          <Input
            className=""
            id="confirmPassword"
            placeholder="confirmPassword"
            type="email"
            onChange={() => {}}
          />
          <Input
            className=""
            id="DOB"
            placeholder="Date of Birth"
            type="date"
            onChange={() => {}}
          />
          <button>Submit</button>
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
