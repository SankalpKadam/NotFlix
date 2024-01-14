'use client'
import InputComponent from "@/components/InputComponent";
import React, { useCallback, useState } from "react";
import axios from "axios";
function auth() {
    //setting the initial states
    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //switching between login and sign up screen
    const [screen, setScreen] = useState('login');
    const changeScreen = useCallback(()=>{
        setScreen((screen)=>
            screen === 'login'?'register':'login'
        )
    },[screen]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email, userName, password
            })
        } catch (error) {
            console.log(error);
            
        }
    },[])
    return (
        <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover h-full w-full">
            <div className="bg-black  lg:bg-opacity-50 w-full h-full">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {screen === 'login' ? "Sign In" : "Register"}</h2>
                        <div className="flex flex-col gap-4">
                            {
                                screen === 'register' && 
                                <InputComponent id="name" label="Username" onChange={(e:any) => setUsername(e.target.value)}
                                value={userName} type="text"/>
                            }
                            <InputComponent id="email" label="Email" onChange={(e:any) => setEmail(e.target.value)}
                             value={email} type="email"/>
                             <InputComponent id="pass" label="Password" onChange={(e:any) => setPassword(e.target.value)}
                             value={password} type="password"/>
                        </div>
                        <button onClick={register}className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {screen === 'login'?"Login" : "Register"}
                        </button>
                        <p className="text-neutral-500 mt-12">{screen === 'login'?"Is this your first time using Netflix?" : "Already have an account?"} <span onClick={changeScreen}className="text-white ml-1 hover:underline cursor-pointer"> {screen === 'login'?"Create an account" : " Login"}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default auth;