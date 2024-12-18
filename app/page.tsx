import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { ArrowRight, Github } from 'lucide-react';

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
          </span>{' '}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#12CFF7] to-[#8D1DF8] ">MindFactory</span> challenge
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ¡Explora este reto para ver mis habilidades como frontend developer!
        </p>
        <div className="flex justify-center items-center gap-3">
            <Link href="/tasks" className="mt-5">
                <Button className="rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
                    Vamos
                </Button>
            </Link>
            <Link
                href="/about"
                className="mt-5"
                aria-label="Join Discord (opens in a new tab)"
            >
                <Button variant="outline" className="flex gap-1">
                    Acerca de este reto
                    <ArrowRight className='w-4 h-4' aria-hidden="true" />
                </Button>
            </Link>
            <Link
                href="https://github.com/Lanzavecchia-Agustin/mindfactory-todo-list-challenge"
                target='_blank'
                className=' border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer'
                aria-label="View NextJS 14 Starter Template on GitHub"
            >
                <Github className='w-5 h-5' aria-hidden="true" />
            </Link>
        </div>
      </div>
    </div>
  );
}
