import { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="font-(family-name:--THICCCBOI-Medium) py-[86px] xs:py-[120px] md:py-[160px] 3xl:py-[200px]">
      <div className="flex flex-col items-center justify-center gap-12 px-[16px] xs:px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <h2 className="text-(--neutral-800) text-[30px] leading-[42px] xs:text-[42px] xs:leading-[52px] md:text-[48px] md:leading-[64px] 3xl:text-[72px] 3xl:leading-[86px]">Past projects</h2>

        {/* TODO: add real projects, NOTE: links used must include https:// in front in order to redirect correctly! */}
        <ProjectCard appName='App X' appType='Web Design' title={<>Website design for finance startup</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='https://www.google.com/' githubLink='https://www.google.com/' imagePath='./project_image_template1.png' imageAltText='Website design for finance startup'/>

        <ProjectCard appName='Technology' appType='Branding' title={<>Brand refresh for Technology app</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='https://www.google.com/' githubLink='https://www.google.com/' imagePath='./project_image_template2.jpg' imageAltText='Brand refresh for Technology app'/>

        <ProjectCard appName='Consulting X' appType='Web Design' title={<>Website redesign for Consulting X</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='https://www.google.com/' githubLink='https://www.google.com/' imagePath='./project_image_template3.jpg' imageAltText='Website redesign for Consulting X'/>

        <ProjectCard appName='Education X' appType='Illustrations' title={<>Illustration design for Education X</>} description={<>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque <i>drogon</i> sit amenot.</>} demoLink='https://www.google.com/' githubLink='https://www.google.com/' imagePath='./project_image_template4.jpg' imageAltText='Illustration design for Education X'/>
        
        {/* TODO: change link to github */}
        {/* NOTE: This link shares the same sizes as the link found in Skills.tsx */}
        <div className="flex flex-col justify-center gap-[10px] mt-4">     
          <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] lg:text-[24px] lg:leading-[26px] 3xl:text-[28px] 3xl:leading-[32px] lightenDirect" href="https://www.google.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
            Browse portfolio
            <svg className={`w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
          </a>
          
          <hr className={`border-1 border-(--neutral-800) ${(isHovered) ? "grow" : "shrink"}`}/>
        </div>
      </div>
    </section>
  )
}

export default Projects;