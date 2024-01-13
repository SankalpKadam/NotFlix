import InputComponent from "@/components/inputComponent";

function auth() {
    return (
        <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover h-full w-full">
            <div className="bg-black  lg:bg-opacity-50 w-full h-full">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
                        <div className="flex flex-col gap-4">
                            <InputComponent id="email" label="Email" onChange={() => {}}
                            type="email" value=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default auth;