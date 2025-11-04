import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useState } from "react";

export default function Home() {
  const [finish, setFinish] = useState("Gloss");
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-neutral-900">
      <h1 className="text-4xl font-bold">WrapView 3D</h1>
      <p className="text-gray-400">Customize your car wrapping in real-time</p>

      {/* 선택 메뉴 */}
      <div className="flex gap-4">
        <select
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
          className="p-2 bg-neutral-800 border border-neutral-700 rounded-lg"
        >
          <option value="Gloss">Gloss</option>
          <option value="Matte">Matte</option>
          <option value="Satin">Satin</option>
        </select>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-10 rounded"
        />
      </div>

      {/* 3D 뷰 */}
      <div className="w-full h-[500px] bg-neutral-800 rounded-xl">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            <mesh>
              <boxGeometry args={[2, 1, 4]} />
              <meshStandardMaterial
                color={color}
                metalness={finish === "Gloss" ? 1 : 0.3}
                roughness={finish === "Matte" ? 1 : 0.4}
              />
            </mesh>
          </Stage>
          <OrbitControls />
        </Canvas>
      </div>

      <p className="text-gray-500 text-sm">
        Material: {finish} | Color: {color}
      </p>
    </div>
  );
}
