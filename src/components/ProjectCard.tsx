import { useState, type ReactElement } from 'react';

type ProjectCardComponentProps = {
    appName: string;
    appType: string;
    title: ReactElement; // To allow text with italics or bold, use a React Fragment to pass in text
    description: ReactElement; // A ReactElement is an object with type, props, and key properties
    demoLink: string;
    githubLink: string;
    imagePath: string;
    imageAltText: string;
}

function ProjectCard({ appName, appType, title, description, demoLink, githubLink, imagePath, imageAltText }: ProjectCardComponentProps) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex flex-col lg:grid lg:items-center lg:grid-cols-[1fr_1.2fr] 3xl:grid-cols-[1fr_1.35fr] border-1 border-(--neutral-300) bg-(--neutral-100) ${(isHovered) ? "scaleDownIndirect" : "scaleUpIndirect"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
        <div className="overflow-hidden lg:order-last">
            <img className={`max-w-[100%] ${(isHovered) ? "zoomInIndirect" : "zoomOutIndirect"}`} src={imagePath} width="auto" height="auto" alt={imageAltText}/>
        </div>

        <div className="lg:order-first flex flex-col justify-center gap-4 pt-[31px] pb-[54px] px-[22px] xs:px-[30px] xs:pt-[46px] md:px-[38px] lg:py-[32px] 3xl:px-[60px]">
            <div className="flex flex-wrap items-center">
                <h4 className="text-(--neutral-800) text-[16px] leading-[18px] md:text-[18px] md:leading-[20px]">{appName}</h4>
                <div className="textDivider"></div>
                <h4 className="text-(--neutral-800) text-[16px] leading-[18px] md:text-[18px] md:leading-[20px]">{appType}</h4>
            </div>
            
            <h3 className={`font-(family-name:--THICCCBOI-SemiBold) text-(--neutral-800) text-[21px] leading-[30px] xs:text-[24px] md:text-[26px] md:leading-[36px] lg:leading-[34px] 3xl:text-[36px] 3xl:leading-[48px] ${(isHovered) ? "removeOpacityIndirect" : "addOpacityIndirect"}`}>{title}</h3>
            <p className="text-(--neutral-600) text-[18px] leading-[30px] 3xl:text-[20px] 3xl:leading-[36px]">{description}</p>

            <div className="flex items-end justify-start gap-10 flex-wrap mt-4">
                <div className="flex flex-col justify-center gap-[10px] max-w-max mt-3 md:mt-5 lg:mt-7">     
                    <a className="flex gap-2 items-center font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) text-[20px] leading-[22px] 3xl:text-[28px] 3xl:leading-[32px]" href={demoLink} target="_blank" rel="noopener noreferrer">
                        View project
                        <svg className={`w-[22px] h-[22px] 3xl:w-[26px] 3xl:h-[26px] pointer-events-none fill-(--neutral-800) ${isHovered ? "moveFromOriginToTopRight" : "moveFromTopRightToOrigin"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M215.52-152.35 151.87-216l460.89-460.89H356.41v-91h411v411h-91v-256.35L215.52-152.35Z"/></svg>
                    </a>
                    
                    <hr className="border-1 border-(--neutral-800)"/>
                </div>

                <a className={`flex items-center justify-center cursor-pointer ${(isHovered) ? "removeOpacityIndirect" : "addOpacityIndirect"}`} href={githubLink} target="_blank" rel="noopener noreferrer" aria-label='View GitHub'>
                    <svg className=" w-[40px] h-[40px] 3xl:w-[46px] 3xl:h-[46px] pointer-events-none fill-(--neutral-800)" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;