
function Greeting() {
  return (
    // TODO: change text and photo + its alt text
    <section className="font-(family-name:--THICCCBOI-Medium) py-[86px] xs:py-[120px] md:py-[160px] 3xl:py-[200px]">
      <div className="px-[16px] xs:px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-y-[64px] md:gap-y-[16px] gap-x-[40px] 3xl:gap-x-[54px] items-center">
          <div className="flex flex-col gap-[16px] justify-center">
            <h2 className="text-(--neutral-800) text-[30px] leading-[42px] xs:text-[42px] xs:leading-[52px] md:text-[48px] md:leading-[64px] 3xl:text-[72px] 3xl:leading-[86px]">Who's behind all this great work?</h2>
            <p className="text-(--neutral-600) text-[18px] leading-[30px] md:text-[22px] md:leading-[36px] 3xl:max-w-[590px] 3xl:text-[24px] 3xl:leading-[42px]">Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labor.</p>
          </div>

          <img className="max-w-[100%]" src="./greetings.jpeg" width="auto" height="auto" alt="Sam Moore"/>          
        </div>
      </div>
    </section>
  )
}

export default Greeting;