import { LogOut, MessageSquare, Settings, UserCog } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../Store/useAuthStore"

export const Navbar = () => {
  const { loggout, authUser } = useAuthStore();
  const navigate = useNavigate()

  return (
    <header className="shadow-gray-700 shadow-md fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-12">
        <div className="flex items-center justify-between h-full">
          <div className="flex gap-8 items-center">
            <Link to="/" className="flex items-center gap-1">
              <div className="flex items-center rounded-md hover:opacity-70 duration-500 transition-all">
                <MessageSquare className="size-9 text-blue-500" />
              </div>
              <h1 className="text-lg font-bold tracking-wider">Chatty</h1>
            </Link>
          </div>

          <div className="items-center flex gap-4">
            <Link to="/settings" className="text-sm bg-slate-900 py-1.5 px-2 border-white/20 border rounded-md flex items-center gap-2 transition-colors">
              <span><Settings className="size-5" /></span>
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser &&
              <div className="flex gap-4">
                <Link to="/profile" className="text-sm bg-slate-900 py-1.5 px-2 border-white/20 border rounded-md flex items-center gap-2 transition-colors">
                  <span><UserCog className="size-5" /></span>
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button type="button" className="text-sm flex gap-2 bg-rose-900 px-2 rounded-md items-center" onClick={() => { loggout(); navigate("/") }}>
                  <span><LogOut className="size-5" /></span>
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </header>
  )
}
