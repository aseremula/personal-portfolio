import Link from './Link';

function Header() {
  return (
    <section className="font-(family-name:--THICCCBOI-Medium) text-center py-[160px]">
      <div className="flex flex-col items-center justify-center gap-5 px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <img className="rounded-full max-w-[100%] 3xl:w-[240px]" src="./headshot.jpeg" width="180" height="auto" alt="Sam Moore"/>
        <h1 className="text-(--neutral-800) text-[42px] leading-[54px] xs:text-[40px] xs:leading-[52px] md:text-[60px] md:leading-[70px] 3xl:text-[90px] 3xl:leading-[104px] max-w-[940px] 3xl:max-w-[1064px]">I'm Sam, and I am a senior industrial designer</h1>
        <p className="text-(--neutral-600) text-[18px] leading-[30px] md:text-[22px] md:leading-[36px] 3xl:text-[24px] 3xl:leading-[42px] max-w-[880px]">Lorem ipsum dolor sit amet consectetur adipsicing eli lectus etiam malesuada nunc lacus velit vitae egestas integer urna phasellu.</p>

        {/* <div className="flex items-center justify-center gap-10 flex-wrap"> */}
          {/* TODO: Add links */}
          {/* <Link destination="https://www.google.com" text="View project" includeUnderline={false} animateUnderline={false}/>
          <Link destination="https://www.google.com" text="Go to Google" includeUnderline={false} animateUnderline={false}/> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default Header;