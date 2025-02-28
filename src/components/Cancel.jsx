import { Link } from "react-router-dom";

export default function Cancel() {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-red-600">Payment Cancelled ❌</h1>
        <p className="mt-4 text-gray-700">You have cancelled your payment.</p>
        <Link to="/checkout" className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg">
          Try Again
        </Link>
      </div>
    );
  }
  