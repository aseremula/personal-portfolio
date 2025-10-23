import { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="font-(family-name:--THICCCBOI-Medium) py-[160px]">
      <div className="flex flex-col items-center justify-center gap-12 px-[16px] xs:px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <h2 className="text-(--neutral-800) text-[30px] leading-[42px] xs:text-[42px] xs:leading-[52px] md:text-[48px] md:leading-[64px] 3xl:text-[72px] 3xl:leading-[86px]">Recent projects</h2>

        {/* TODO: add real projects */}
        <ProjectCard appName='App X' appType='Web Design' title={<>Website design for finance startup</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='www.google.com' githubLink='www.google.com' imagePath='./projectpic.png' imageAltText='Website design for finance startup'/>

        <ProjectCard appName='App X' appType='Web Design' title={<>Website design for finance startup</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='www.google.com' githubLink='www.google.com' imagePath='./projectpic.png' imageAltText='Website design for finance startup'/>
        
        {/* TODO: change link to github */}
        {/* NOTE: This link shares the same sizes as the link found in Skills.tsx */}
        <div className="flex flex-col justify-center gap-[10px] mt-4">     
          <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] lg:text-[24px] lg:leading-[26px] 3xl:text-[28px] 3xl:leading-[32px] lightenDirect" href="www.google.com" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
            Browse GitHub
            <svg className={`w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
          </a>
          
          <hr className={`border-1 border-(--neutral-800) ${(isHovered) ? "grow" : "shrink"}`}/>
        </div>
      </div>
    </section>
  )
}

export default Projects;