import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FlickeringGrid from '@/components/ui/flickering-grid';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <FlickeringGrid
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="#12CFF7"
        maxOpacity={0.2}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6">
          <span className="leading-tight font-semibold">
            Bienvenido
          </span>{' '}
          al <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#12CFF7] to-[#8D1DF8] ">MindFactory</span> challenge
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ¡Explora este reto para ver mis habilidades como frontend developer!
        </p>
        <Link href="/tasks">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Comenzar desafío
          </Button>
        </Link>
      </div>
    </div>
  );
}
