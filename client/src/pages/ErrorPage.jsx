import { NavLink } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold animate-bounce">404</h1>

        {/* Message */}
        <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-200">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <NavLink
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-md shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
}
