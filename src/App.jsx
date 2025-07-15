import { useEffect } from "react";
import { Navbar } from "./Layout/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { useAuthStore } from "./Store/useAuthStore";
import { Loader } from "lucide-react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="size-10 animate-spin text-purple-700" />
    </div>
  );

  return (
    <section>
      <Navbar />
      <main className="">
        <AllRoutes authUser={authUser} />
      </main>
    </section>
  );
};

export default App;
