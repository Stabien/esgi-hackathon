import { updateUser } from "@/redux/user/user.actions";
import { Security } from "@/services";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectUser } from "@/redux/user/user.selectors";
import { useRouter } from "next/router";
import Link from "next/link";
import { User } from "@/types";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await Security.login({ email: email, password: password });
      if (result) {
        dispatch(updateUser(result));
      }
      toast(`Vous etes connecté avec ${email}`);
      
      console.log(result)
      if ((result as User).role === 'Admin') {
        router.push('/admin')
      } else {
        router.push('/')
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="grid-cols-1">
      <h1 className="w-fit m-auto my-8 mt-8 text-4xl font-semibolds">
        Connexion
      </h1>
      <form
        className="w-fit m-auto flex flex-col"
        onSubmit={(e) => handleLogin(e)}
      >
        <div className="flex gap-2 mb-3 mx-auto flex-col w-fit text-slate-500">
          <label className="" htmlFor="email">
            E-mail / ID mutuelle
          </label>
          <input
            className="border border-gray-700 w-80 h-12 px-3 rounded placeholder-shown:border-gray-500"
            type="email"
            id="email"
            value={email}
            placeholder="theomorrrin@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 flex-col mx-auto w-fit text-slate-500">
          <label className="pt-4" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-700 w-80 h-12 px-3 rounded placeholder-shown:border-gray-500"
            type="password"
            id="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="text-right text-slate-400  mt-1.5">
            Pas de compte?{" "}
            <Link href="/signin" className="hover:text-red-500">
              Créez en un ici
            </Link>
          </span>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="rounded-md bg-yellow-150 px-12 py-4 mt-6 ml-auto mr-0 hover:text-white hover:bg-red-400"
          >
            Login
          </button>
        </div>

        {/* <button
          className="border border-yellow-200 px-32 py-5 bg-yellow-150 rounded mt-10 shadow-md"
          type="submit"
        >
          Login
        </button>
        <a
          className="border border-yellow-200 text-blue-250 px-32 py-5 rounded mt-10 shadow-md"
          href="/signin"
        >
          Sign Up
        </a> */}
      </form>
    </div>
  );
};
export default Login;
