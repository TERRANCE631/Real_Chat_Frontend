import { useState } from "react";
import {
  About,
  Contact,
  Home,
  LoadingScreen,
  MobileMenu,
  NavBar,
  Projects,
  ToTopBtn,
} from "./components";
import { useGlobalState } from "./components/Context/Context";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoading } = useGlobalState();

  return (
    <section>
      <main className="reletive min-h-screen w-screen overflow-x-hidden relative z-1 overflow-hidden">
        {!isLoading && <LoadingScreen />}
        <div
          className={`min-h-screen transition-opacity duration-700
          ${isLoading ? "opacity-100" : "opacity-0"} 
        bg-black text-gray-100`}
        >
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
        <ToTopBtn />
      </main>
    </section>
  );
}

export default App;
