import { useEffect } from "react";
import { Navbar } from "./Layout/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { useAuthStore } from "./Store/useAuthStore";
import { Loader } from "lucide-react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeStore } from "./Store/useThemeStore";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();
  console.log(theme);

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth ) return (
    <div className={`bg-${theme} flex flex-col gap-2 h-screen items-center text-white justify-center`}>
      <span><Loader className="size-10 animate-spin" /></span>
      <span className="text-lg">Loading...</span>
    </div>
  );

  return (
    <section className={`min-h-screen bg-${theme}`}>
      <Navbar />
      <main className="">
        <AllRoutes authUser={authUser} />
      </main>
      <ToastContainer position="top-center" hideProgressBar theme="dark" />
    </section>
  );
};

export default App;
