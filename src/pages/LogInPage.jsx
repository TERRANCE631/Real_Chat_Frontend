import { useState } from "react"
import { useAuthStore } from "../Store/useAuthStore";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Eye, EyeOffIcon, Loader2, MailIcon, MessageSquare, Shield } from "lucide-react";

export const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggingIn } = useAuthStore()
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formdata);
  };

  return (
    <div className="min-h-screen grid">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome back</h1>
              <p className="text-slate-300">Sign in to your account</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="font-thin bg-white text-transparent bg-clip-text tracking-wider">E-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 border border-white/30 focus:border-blue-700 placeholder:text-white/90 outline-none bg-transparent p-2 rounded-md tracking-wider"
                  placeholder="Terrance@example.com"
                  value={formdata.email}
                  onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="font-thin bg-white text-transparent bg-clip-text tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Shield className="size-5 text-base-content/40" />
                </div>

                {showPassword ? <div onClick={() => setShowPassword(false)} className="absolute inset-y-0 right-0 pr-3 flex border-l border-white/30 pl-2.5 items-center cursor-pointer">
                  <Eye className="size-5 text-base-content/40" />
                </div>
                  :
                  <div onClick={() => setShowPassword(true)} className="absolute inset-y-0 right-0 pr-3 flex border-l border-white/30 pl-2.5 items-center cursor-pointer">
                    <EyeOffIcon className="size-5 text-base-content/40" />
                  </div>
                }

                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 border border-white/30 focus:border-blue-700 placeholder:text-white/90 outline-none bg-transparent p-2 rounded-md tracking-wider"
                  placeholder="******************"
                  value={formdata.password}
                  onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                />
              </div>
            </div>
            <button type="submit" className="w-full flex gap-2 items-center justify-center hover:bg-blue-600 bg-blue-700 p-2 rounded-md bg-opacity-85" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-6 animate-spin" />
                  Loading...
                </>
              ) : (<div className="">Sign in</div>)}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Do not have an account?{" "}
              <Link className="text-blue-400 hover:text-blue-300 tracking-wider underline" to="/signup">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" hideProgressBar theme="dark" />
    </div>
  )
}

