import { useState } from 'react';
import SkillCell from './SkillCell';
import blank from '../../public/blank.pdf';
// TODO: replace blank with actual resume up top and in link's href

function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="font-(family-name:--THICCCBOI-Medium) py-[160px]">
      <div className="flex flex-col justify-center gap-14 md:gap-16 px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 flex-wrap">
          <h2 className="text-(--neutral-800) text-[30px] leading-[42px] xs:text-[42px] xs:leading-[52px] md:text-[48px] md:leading-[64px] 3xl:text-[72px] 3xl:leading-[86px] max-w-[940px] 3xl:max-w-[1064px]">My work skills</h2>
          <div className="flex flex-col justify-center gap-2">     
            <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] lg:text-[24px] lg:leading-[26px] 3xl:text-[28px] 3xl:leading-[32px] lightenText" href={blank} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
              Browse resume
              <svg className={`w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
            </a>
            <hr className={`border-1 border-(--neutral-800) ${(isHovered) ? "grow" : "shrink"}`}/>
          </div>
      </div>

      <div className="xs:grid xs:grid-cols-2 lg:grid-cols-3 xs:gap-x-[40px] xs:auto-cols-fr">
        {/* TODO: replace with actual skills */}
        <SkillCell skillName="Brand Identity" />
        <SkillCell skillName="Logo Design" />
        <SkillCell skillName="Brand Messaging" />
        <SkillCell skillName="Graphic Design" />
        <SkillCell skillName="Brand Position" />
        <SkillCell skillName="Illustration" />
      </div>
    </div>
  </section>
  )
}

export default Skills;