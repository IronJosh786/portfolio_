import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="px-6 flex-1 flex flex-col justify-center items-center min-h-dvh">
      <h4 className="text-5xl">404</h4>
      <p className="text-center mt-2">
        Looks like you've ventured into the unknown digital realm.
      </p>
      <div className="mt-6">
        <button
          className="cursor-pointer text-sm md:text-base bg-gray-300 text-[#0D1117] px-2 py-1 rounded-md font-medium duration-150 ease-in-out hover:bg-gray-300/70 active:scale-95"
          onClick={() =>
            window.history.length > 2 ? navigate(-1) : navigate("/")
          }
        >
          Return
        </button>
      </div>
    </div>
  );
}
