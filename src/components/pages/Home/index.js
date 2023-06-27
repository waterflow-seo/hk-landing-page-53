import { getPlayLink } from '@utilities/dev';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='relative bg-mbl sm:bg-dt bg-cover w-full h-full'>
        <div className='flex flex-col justify-between h-full items-center'>
          <div />
          <div className='relative w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] duration-200'>
            <div className='hidden sm:block'>
              <Image
                src='/assets/main/girl-dt.png'
                alt='girl-dt'
                layout='responsive'
                width={932}
                height={1060}
              />
            </div>

            <div className='sm:hidden'>
              <Image
                src='/assets/main/girl-mbl.png'
                alt='girl-mbl'
                layout='responsive'
                width={562}
                height={1056}
              />
            </div>

            <div className='absolute bottom-5 w-full flex justify-center'>
              <div className='flex flex-col items-center gap-2'>
                <div>
                  <h1 className='text-[36px] md:text-[40px] lg:text-[48px] text-center font-bold text-primary'>
                    爆有錢 Online
                  </h1>
                  <h2 className='text-[36px] md:text-[40px] lg:text-[48px] text-center font-bold text-primary'>
                    赢錢停不了
                  </h2>
                </div>
                <Link href={getPlayLink()}>
                  <a>
                    <div className='relative w-[200px]'>
                      <Image
                        src='/assets/main/button.png'
                        alt='button'
                        layout='responsive'
                        width={281}
                        height={90}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
