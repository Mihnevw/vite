export default function Success() {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="mt-4 text-gray-700">Thank you for your purchase.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg">
          Go to Home
        </a>
      </div>
    );
  }
  