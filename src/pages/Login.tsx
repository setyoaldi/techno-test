import { LayoutLogin } from "../components/Layout";
import Logo from "../assets/logo technopartner.png";
import { TextInput } from "../components/Input";
import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <LayoutLogin title={"Login"}>
        <>
          <div className="flex flex-col gap-1">
            <div>
              <img src={Logo} alt="Technopartner's Logo" />
            </div>
            <form action="">
              <div className="flex flex-col gap-x-3 gap-y-4 mt-5 justify-center items-center">
                <TextInput text="email" type="text" />
                <TextInput text="password" type="password" />
                <button className="capitalize bg-white shadow-lg text-black w-1/4 h-auto px-5 py-2 rounded font-semibold">
                  Login
                </button>
              </div>
            </form>
          </div>
        </>
      </LayoutLogin>
    </>
  );
};
