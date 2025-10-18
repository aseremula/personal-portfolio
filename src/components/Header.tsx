import { useState, useEffect } from 'react';
import Link from './Link';

function Header() {
  return (
    <section className="font-(family-name:--THICCCBOI-Medium) text-center py-[160px]">
      <div className="flex flex-col items-center justify-center gap-5 px-[24px] 2xl:max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <img className="rounded-full max-w-[100%] 3xl:w-[240px]" src="./headshot.jpeg" width="180" height="auto" alt="Sam Moore"/>
        <h1 className="text-(--neutral-800) text-[42px]/15 md:text-[60px]/18 3xl:text-[90px]/28 max-w-[940px] 3xl:max-w-[1064px]">I'm Sam, and I am a senior industrial designer</h1>
        <p className="text-(--neutral-600) text-[18px]/8 md:text-[22px]/10 3xl:text-[24px]/12 max-w-[880px]">Lorem ipsum dolor sit amet consectetur adipsicing eli lectus etiam malesuada nunc lacus velit vitae egestas integer urna phasellu.</p>

        <div className="flex items-center justify-center gap-10 flex-wrap pb-[10px]">
          {/* TODO: Add links */}
          <Link destination="https://www.google.com" text="View project"/>
          <Link destination="https://www.google.com" text="Go to Google"/>
        </div>
      </div>
  </section>
  )
}

export default Header;