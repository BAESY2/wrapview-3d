import Head from "next/head";
import ModelViewer from "../components/ModelViewer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Head>
        <title>Car Wrapping 3D Demo</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">🚗 Car Wrapping Visualizer</h1>
      <p className="mb-6 text-gray-400 text-center px-4">
        Choose materials and see your car in 3D.
      </p>
      <ModelViewer />
    </div>
  );
}


