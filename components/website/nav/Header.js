import Navbar from "./Navbar.js";
import { useState } from "react";
import Sidebar from "./Sidebar.js";
import Image from 'next/image'
import Link from '../../Link';

const Header = ({ pageLabel, links}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full font-sans font-bold py-5">
      <div className="flex  w-full  px-10 items-center justify-between gap-10">
          <Link className='w-full lg:w-1/5' href='/'>
            <Image
            src="/images/logo-03-cropped.svg"
            alt="Therapedia logo"
            // width={200}
            // height={0} 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            />
          </Link>
          <Navbar  pageLabel={pageLabel} links={links}/>
          <div className="lg:hidden flex w-1/5">
            <button className='block lg:hidden w-full' onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="sidebar" aria-label="Open Menu">
              <Image
                className="block lg:hidden "
                src="/images/website/icon-menu.svg"
                alt="Menu"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
              />
            </button>
            <Sidebar pageLabel={pageLabel} open={open} setOpen={setOpen} links={links} />
          </div>
      </div>
    </header>
  );
};

export default Header;