'use client'
// import Input from "./components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthForm from "./components/AuthForm";
import VideoComponent from "./components/video-component";
type FormValues = {
  name: string,
      email: string,
      password: string,
      confirmPassword: string,
      DateOfBirth: string,
      Bio: string,
      gender: string,
      termsAndConditions: string
}

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <VideoComponent />
    </div>
  )
}

