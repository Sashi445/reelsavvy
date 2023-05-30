"use client";

import {
  Feature1,
  Feature2,
  Feature3,
  Intro,
  EarlyAccess,
} from "./components/landing";

export default function Home() {
  return (
    <main className='snap-y snap-mandatory w-full h-screen overflow-y-scroll'>
      {/* <div className='fixed top-0 w-full flex py-4 px-5 border'>
        <div>ReelSavvy</div>
        <div className='grow'></div>
        <div>
          <nav>
            <a href={"/#early-access"}>Get early access</a>
          </nav>
        </div>
      </div> */}
      <section id='' className='w-full h-screen snap-start bg-yellow-400'>
        <Intro />
      </section>
      <section className='w-full h-screen snap-start bg-green-400'>
        <Feature1 />
      </section>
      <section className='w-full h-screen snap-start bg-blue-600'>
        <Feature2 />
      </section>
      <section className=' w-full h-screen snap-start bg-red-500'>
        <Feature3 />
      </section>
      <section
        id='early-access'
        className='w-full h-screen snap-start bg-blue-400'>
        <EarlyAccess />
      </section>
    </main>
  );
}
