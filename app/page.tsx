import Image from 'next/image'
import ImageOne from '@/public/OIP.jpeg'
import ImageTwo from '@/public/OIP (1).jpeg'
import ImageThree from '@/public/OIP (2).jpeg'
import ImageFour from '@/public/OIP (3).jpeg'
import ImageFive from '@/public/OIP (4).jpeg'
export default function Home() {
  return (
  <><div></div><h1   className="font-black text-6xl font-style: italic "> <br/> Minions</h1><div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 m-12 rounder-lg'>

      <div className="relative h-64  border-2 lg:col-span-2 md:col-span-1 sm:col-span-1 rounded-lg ">
        <Image src={ImageTwo} fill alt='imgB' />
      </div>
      <div className="relative min-h-64 border-2 lg:row-span-2 md:row-span-2 sm:row-span-1 rounded-lg">
        <Image src={ImageThree} fill alt='imgc' />
      </div>
      <div className="relative min-h-64 border-2 lg:row-span-2 md:row-span-2 sm:row-span-1 rounded-lg">
        <Image src={ImageFour} fill alt='imgD' />
      </div>
      <div className="relative h-64 border-2 rounded-lg">
        <Image src={ImageOne} fill alt='imgA' /></div>
      <div className="relative h-64  border-2 lg:col-span-2 md:col-span-1 sm:col-span-1 rounded-lg">
        <Image src={ImageFive} fill alt='imgE' />
      </div>
    </div></>
  )
}
