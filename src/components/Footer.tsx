function Footer() {
  return (
    // TODO: Redo copyright/created by line
    <footer className="font-(family-name:--THICCCBOI-Medium) bg-(--neutral-100) pb-[32px] px-[16px] xs:px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
      <div className="border-t-1 border-t-(--neutral-300) grid grid-cols-[1.2fr] md:grid-cols-[1.2fr_0.6fr] items-center gap-y-[22px] md:gap-y-[16px] gap-x-[16px] mt-[30px] pt-[32px]">
        <p className="text-(--neutral-600) text-[18px] 3xl:text-[20px] leading-[30px] 3xl:leading-[36px]">
          {/* Created by Sam Moore | Design by&nbsp; */}
          Copyright © Webfolio X | Designed by&nbsp;
          <a className="text-(--neutral-800) underline" href="https://brixtemplates.com/" target="_blank" rel="noopener noreferrer">BRIX Templates</a>
          &nbsp;- Powered by&nbsp;
          <a className="text-(--neutral-800) underline" href="https://webflow.com/" target="_blank" rel="noopener noreferrer">Webflow</a>
        </p>

        {/* TODO: change links and arias */}
        <ul className="flex items-center md:justify-end gap-[16px]">
          <li className="flex items-center justify-center lightenDirect">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label={`Sam Moore's GitHub`}>
              <svg className="w-[31px] h-[31px] pointer-events-none fill-(--neutral-800)" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </li>

          <li className="flex items-center justify-center lightenDirect">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label={`Sam Moore's LinkedIn`}>
             <svg className="w-[31px] h-[31px] pointer-events-none fill-(--neutral-800)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;