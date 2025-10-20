type SkillCellComponentProps = {
    skillName: string;
}

function SkillCell({skillName} : SkillCellComponentProps) {
  return (
    <h3 className="font-(family-name:--THICCCBOI-SemiBold) text-(--neutral-800) py-[31px] xs:py-[40px] 3xl:py-[60px] border-y-1 border-y-(--neutral-400) text-[21px] leading-[30px] xs:text-[24px] md:text-[26px] md:leading-[36px] lg:leading-[34px] 3xl:text-[36px] 3xl:leading-[48px] -mt-[1px]">{skillName}</h3>
  )
}

export default SkillCell;