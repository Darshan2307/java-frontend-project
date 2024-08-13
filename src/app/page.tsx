import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img
          src="images/logo.jpeg"
          alt="Team Logo"
          className="w-70 h-16 mr-4"
        />
        <div>
          <h1 className="text-3xl font-semibold">
            E-commerce Microservice Application
          </h1>
          <p className="text-lg pt-2 text-gray-600">
            Developed by <b>Team CartCrafters</b>
          </p>
        </div>
      </div>
      <p className="mb-4">
        A basic e-commerce application using microservices architecture in
        Spring Framework in Java.
      </p>

      {/* Team Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Team Details:</h2>
        <div className="flex items-center mb-4">
          <div>
            <p className="font-semibold">Team Name:</p>
            <p>CartCrafters</p>
          </div>
        </div>
        <p>Darshankumar Rathod</p>
        <p>Yug Sutariya</p>
        <p>Jay Sojitra</p>
        <p>Karan Sharma</p>
      </div>
    </div>
  );
}
