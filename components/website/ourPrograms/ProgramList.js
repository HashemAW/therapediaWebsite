import React from 'react';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';

export function ProgramList({ list, color }) {
  return (
    <>
      <div className='w-full lg:w-1/2 grid grid-cols-1 gap-0 items-start justify-start'>
        {list.filter((e, i) => (i < (list.length - 2))).map((e) => (
          <div key={e} className='flex flex-row gap-5  items-center justify-start'>
            <Icon path={mdiStarFourPoints} size={'15px'} className='text-orange' />
            <span className={`w-11/12  text-${color} text-base font-como-bold break-word`}>{e}</span>
          </div>
        ))}
      </div>

      <div className='w-full lg:w-1/2 grid grid-cols-1 gap-0 items-start justify-start'>
        {list.filter((e, i) => (i >= (list.length - 2))).map((e) => (
          <div key={e} className='flex flex-row gap-5  items-center justify-start'>
            <Icon path={mdiStarFourPoints} size={'15px'} className='text-orange' />
            <span className={`w-11/12  text-${color} text-base font-como-bold break-word`}>{e}</span>
          </div>
        ))}
      </div>
    </>
  );
}
