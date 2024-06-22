import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';



export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(true);

  const data = {
    'email': email,
    'password': password,
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if ( !email || !password) {
      toast.error('Provide all Information');
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Network response was not ok: ' + errorText);
      }
  
      const result = await response.json();
      console.log(result);
  
      toast.success('Login Successfully');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      toast.error('Failed to Login to account');
    }
  }


  return (
    <>
    <Toaster />
    <section className="m-3 md:m-8 flex h-[90vh] justify-between gap-4">
      <div className="w-full lg:w-[60%]">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-[95%] md:w-80 max-w-screen-lg lg:w-3/4">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 inp"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="*****************"
              className=" !border-t-blue-gray-200 inp focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Checkbox
            className="inp"
            label={
              <Typography
              variant="small"
                color="gray"
                className="flex items-center justify-start font-medium tex"
              >
                <span className="tex">I agree to the&nbsp;</span>

                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline tex"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            checked={terms}
          />
          <Button className="mt-3" onClick={handleSubmit} fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Checkbox
              className="inp"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium inp tex"
                >
                  <span className="tex">Subscribe me to newsletter</span>

                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography variant="small" className="font-medium text-gray-900 tex">
              <a href="#" className="tex">
                Forgot Password
              </a>
            </Typography>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>

      </div>


      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
    </>
  );
}

export default SignIn;
