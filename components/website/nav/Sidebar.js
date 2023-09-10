import {Transition } from "@headlessui/react";
import Image from 'next/image'

import { MainMenuLinks } from "./MainMenuLinks";
import { SocialMediaIcons } from '../../SocialMediaIcons';
import LineSeperator from '../../LineSeperator'
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

const Sidebar = ({ pageLabel, open = false, setOpen, links }) => {

  const { i18n } = useTranslation('common');

  
  return (
    <>
      <Transition show={open}>
        <Transition.Child
          className="fixed rtl:left-0 ltr:right-0 top-0 w-[250px] z-30 h-screen lg:hidden"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div id="sidebar" className="fixed right-0 top-0 w-[250px] h-screen bg-white pt-20 p-8 z-50">
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <Image
                className="absolute top-5 ltr:left-5 rtl:right-5"
                src="/images/website/icon-close-menu.svg"
                alt="Close Menu"
                width={20}
                height={20}
              />
            </button>

            <MainMenuLinks pageLabel={pageLabel} links={links} classes=' flex flex-col gap-y-5 text-sm text-grey' />
            <LineSeperator thickness={8}  color='red'/>
            <SocialMediaIcons classes='  w-full flex flex-col items-center justify-between gap-10' subclasses='w-full  flex flex-row gap-2 lg:gap-10   items-center justify-center'/>

          </div>
        </Transition.Child>

      </Transition>
    </>
  );
};

export default Sidebar;