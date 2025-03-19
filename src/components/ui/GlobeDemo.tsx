import { Globe } from "./globe"

export function GlobeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-white">
      <div className="relative w-full max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Travel Made Simple—Worldwide
        </h2>
        <p className="text-center text-gray-600 text-lg mb-2 max-w-2xl mx-auto px-4">
          Royal Transfer EU covers major cities and airports across the globe, bringing simple travel solutions right to you.
        </p>
        <div className="relative aspect-[2/1] w-full">
          <Globe className="scale-[1.6] md:scale-[1.4] translate-y-[20%] md:translate-y-[10%]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0),rgba(255,255,255,1))]" />
        </div>
      </div>
    </div>
  )
}