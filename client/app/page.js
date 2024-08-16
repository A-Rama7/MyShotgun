import Image from "next/image";
import Link from 'next/link';
import events from "@/app/lib/events-data.js"

export default function Home() {
  return (
    <div className="flex w-full justify-center bg-cover bg-center"> 
      <div className="flex flex-col">

        <header className="flex w-full bg-zinc-400 p-4 self-center mb-14">
          <nav className="flex w-full justify-between">
            <div className="flex">
              
              <Link href="" className="self-center mr-5">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/logo_shotgun.svg"
                  alt="logo"
                  width={120}
                  height={47}
                  priority
                />
              </Link>
              <div className="flex w-7 h-7 bg-white rounded-full justify-center self-center">
                <Image
                  className=""
                  src="/magnifying-glass.svg"
                  alt="search"
                  width={14}
                  height={14} 
                  priority
                />
              </div>

            </div>

            <div className="flex">
              <Link href="" className="text-xs font-medium self-center mr-5">JE SUIS ORGANISATEUR</Link>
              <Link href="" className="text-xs font-medium bg-white text-slate-950 p-2 rounded-lg self-end">CONNEXION / INSCRIPTION</Link> 
            </div>
          </nav>
        </header>

        <main className="flex flex-col">
          <p className="text-3xl mb-4 font-semibold">Évènements populaires</p>
          <div className="border-white border-2" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gridColumnGap: '20px',
              gridRowGap: '20px',
            }}
          >
            {
            events.map((item, index) => {
              return (
              <div key={item.id} className="w-96 bg-slate-500 flex-wrap flex-col">
                  <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 flex-col"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/imgexample.png"
                      alt=""
                      className="bg-cover"
                      width={380}
                      height={24}
                      priority
                    />

                    <div>
                      <p>{item.title}</p>
                      <p>{item.location}</p>
                      <p>
                        <span>{item.date}</span>
                        <span>{item.price}</span>
                      </p>
                      <p>{item.vibe}</p>
                    </div>
                  </a>
              </div>
              )
            })
            }
          </div>

        </main>
        
      </div>
    </div>
  );
}
