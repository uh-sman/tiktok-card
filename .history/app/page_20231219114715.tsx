import Input from "./components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
export default function Home() {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      Username: "",
      email: '',
      password: '',
      confirmPassword: '',
      DateOfBirth: '',
      Bio: '',
      gender: '',
      termsAndConditions: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = () => {

  }

  return (
    <div className="bg-black h-screen w-screen">
      <div className="flex justify-center">
        <form onSubmit={()=> {}}>
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
    </div>
  );
}
