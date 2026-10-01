// This is an altered version of the Link component for use with the ContactForm component - the text is larger than the original.

import { useState } from 'react';

type ContactFormLinkComponentProps = {
  destination: string;
  text: string;
  includeUnderline: boolean;
  animateUnderline: boolean;
}

function ContactFormLink({ destination, text, includeUnderline, animateUnderline }: ContactFormLinkComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-[10px] w-max">     
      <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] lg:text-[24px] lg:leading-[26px] 3xl:text-[28px] 3xl:leading-[32px] lightenDirect" href={destination} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
        {text}
        <svg className={`w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] 3xl:w-[26px] 3xl:h-[26px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
      </a>
      {(includeUnderline) &&
        <hr className={`border-1 border-(--neutral-800) ${(animateUnderline) && ((isHovered) ? "grow" : "shrink")}`}/>
      }
    </div>
  )
}

export default ContactFormLink;