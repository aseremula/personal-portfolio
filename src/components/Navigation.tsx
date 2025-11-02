import { useState, useEffect } from 'react';
import useOnclickOutside from "react-cool-onclickoutside";

function Navigation() {
  const WIDTH_BREAKPOINT = 991; // only show the side menu when a device's width is this number or below in pixels
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenuToggle, setShowMenuToggle] = useState(false);

  // To close side navigation menu if it is open and user clicks outside of it
  const ref = useOnclickOutside(() => {
    setOpenMenu(false);
  });

  // To determine where navigation bar/menu should be placed, check device width
  useEffect(() => {
    getMenuType(); // For initial load of app
    window.addEventListener("resize", getMenuType);
    return () => window.removeEventListener("resize", getMenuType);
  }, []);

  function getMenuType()
  {
    const width = window.innerWidth;
    if(width <= WIDTH_BREAKPOINT)
    {
      // Screen too small to view navigation bar at the top - move menu to the side of the screen
      setOpenMenu(false);
      setShowMenuToggle(true);
    }
    else
    {
      // Screen large enough to support navigation bar at the top (default)
      setOpenMenu(false);
      setShowMenuToggle(false);
    }
  }

  return (
    <nav className="font-(family-name:--THICCCBOI-Medium) bg-(--neutral-100) py-[24px] xs:py-[28px] s:py-[32px] sticky top-0 z-1">
      <div className="flex items-center justify-between px-[24px] max-w-[1216px] 3xl:max-w-[1264px] mx-auto">
        <h1 className="font-(family-name:--THICCCBOI-Bold) text-(--neutral-800) tracking-tight text-[26px] leading-[34px] xs:text-[28px] xs:leading-[32px] md:text-[30px] md:leading-[42px] 2xl:text-[32px] 2xl:leading-[44px] 3xl:text-[36px] 3xl:leading-[48px]"><a href="#home">Webfolio X</a></h1>
        {(!showMenuToggle) ? 
          <ul className="text-(--neutral-800) flex gap-[32px] text-[18px] leading-[20px]">
            <li className="lightenDirect"><a href="#projects">Projects</a></li>
            <li className="lightenDirect"><a href="#skills">Skills</a></li>
            <li className="lightenDirect"><a href="#contact">Contact</a></li>
          </ul>
        :
          // Close side menu if user clicks outside of either the menu or X button by setting multiple refs
          // https://www.npmjs.com/package/react-cool-onclickoutside
          <button ref={ref} className="text-[26px] bg-white cursor-pointer" aria-label={(openMenu) ? "Close menu" : "Open menu"} onClick={() => setOpenMenu(!openMenu)}>
            <div className={`w-[40px] xs:w-[46px] h-[2px] my-[12px] text-[26px] leading-[30px] bg-(--neutral-800) ${(openMenu) ? "hamburgerBarTopDiagonal" : "hamburgerBarFlat"}`}></div>
            <div className={`w-[40px] xs:w-[46px] h-[2px] my-[12px] text-[26px] leading-[30px] bg-(--neutral-800) ${(openMenu) ? "hamburgerBarBottomDiagonal" : "hamburgerBarFlat"}`}></div>
          </button>
        }

        {(showMenuToggle) && 
          <div className={`slide ${(openMenu) ? "out" : "in"} translate-x-[-100%] absolute top-0 left-0 w-[85vw] h-[100vh] z-2 overflow-hidden`}>
            <nav ref={ref} className="absolute top-0 left-0 min-w-[85%] h-[100vh] bg-(--neutral-800) py-[40px] px-[32px]">
              <ul className="text-(--neutral-100) flex flex-col gap-[17px] text-[24px] xs:text-[32px] leading-[26px] xs:leading-[34px]">
                <li><a className="darkenText" href="#projects" onClick={() => setOpenMenu(false)}>Projects</a></li>
                <li><a className="darkenText" href="#skills" onClick={() => setOpenMenu(false)}>Skills</a></li>
                <li><a className="darkenText" href="#contact" onClick={() => setOpenMenu(false)}>Contact</a></li>
              </ul>
            </nav>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navigation;