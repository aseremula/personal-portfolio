import { useState } from 'react';
import Link from './Link';

function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="font-(family-name:--THICCCBOI-Medium) py-[160px]">
      <div className="flex flex-col justify-center gap-8 px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <h3 className="font-(family-name:--THICCCBOI-SemiBold) text-(--neutral-800) text-[20px] leading-[31px] md:text-[26px] md:leading-[34px] 3xl:text-[36px] 3xl:leading-[48px] max-w-[940px] 3xl:max-w-[1064px] -mb-6">Get in touch today</h3>

        <button className="flex gap-2 md:gap-4 items-center cursor-pointer lightenText" onClick={() => window.location.href = 'mailto:yourmail@domain.com'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
          <h2 className="text-(--neutral-800) text-[24px] leading-[43px] xs:text-[35px] xs:leading-[49px] md:text-[60px] md:leading-[60px] 3xl:text-[90px] 3xl:leading-[104px] max-w-[940px] 3xl:max-w-[1064px]">hello@sammoore.com</h2>
          <svg className={`shrink-0 w-[24px] h-[24px] xs:w-[32px] xs:h-[32px] md:w-[50px] md:h-[50px] 3xl:w-[70px] 3xl:h-[70px] fill-(--neutral-800) pointer-events-none ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
        </button>

        <p className="text-(--neutral-600) text-[18px] leading-[30px] 3xl:text-[20px] 3xl:leading-[36px] max-w-[700px] -mt-2">Lorem ipsum dolor sit amet tragon consectetur adipsicing elit mattis faucibus odio feugiat arcu scelerisque drogon sit.</p>

        <div className="flex items-center gap-10 flex-wrap mt-4">
          {/* TODO: Add links */}
          <Link destination="https://www.google.com" text="Facebook" includeUnderline={true} animateUnderline={true}/>
          <Link destination="https://www.google.com" text="Twitter" includeUnderline={true} animateUnderline={true}/>
          <Link destination="https://www.google.com" text="Instagram" includeUnderline={true} animateUnderline={true}/>
          <Link destination="https://www.google.com" text="LinkedIn" includeUnderline={true} animateUnderline={true}/>
        </div>
      </div>
    </section>
  )
}

export default Contact;