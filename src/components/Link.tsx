import { useState } from 'react';

type LinkComponentProps = {
  destination: string;
  text: string;
  includeUnderline: boolean;
  animateUnderline: boolean;
}

function Link({ destination, text, includeUnderline, animateUnderline }: LinkComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-2">     
      <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[18px]/6 md:text-[20px]/6 3xl:text-[22px]/8 lightenText" href={destination} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
        {text}
        <svg className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
      </a>
      {(includeUnderline) &&
        <hr className={`border-1 border-(--neutral-800) ${(animateUnderline) && ((isHovered) ? "grow" : "shrink")}`}></hr>
      }
    </div>
  )
}

export default Link;