import { useGlobalState } from "./Context/Context";

export function LoadingScreen() {
  const { text } = useGlobalState();
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 md:text-2xl text-xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[250px] h-[2px] bg-black bg-opacity-10 rounded-full relative overflow-hidden">
        <div className="w-[45%] h-full bg-gradient-to-r from-blue-800 to-cyan-500 shadow-blue-600 shadow-xl animate-loading-bar"></div>
      </div>
    </div>
  );
}
