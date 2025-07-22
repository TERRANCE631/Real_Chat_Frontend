import { useEffect } from "react";
import { Navbar } from "./Layout/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { useAuthStore } from "./Store/useAuthStore";
import { Loader } from "lucide-react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();

  console.log(onlineUsers);

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className="flex flex-col gap-2 h-screen items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white justify-center">
      <span><Loader className="size-10 animate-spin" /></span>
      <span className="text-lg">Loading...</span>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main className="">
        <AllRoutes authUser={authUser} />
      </main>
      <ToastContainer position="top-center" hideProgressBar theme="dark" />
    </section>
  );
};

export default App;
