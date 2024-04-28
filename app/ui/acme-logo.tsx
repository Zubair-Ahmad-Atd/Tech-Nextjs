import { GlobeAltIcon } from '@heroicons/react/24/outline';
// CZA
import { AcademicCapIcon} from '@heroicons/react/24/solid'; 

import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[90deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}   


// CODE BY ZUBAIR AHMAD (CZA)
  
// const AcmeLogo = () => {
//   return (
//     <div className={`${lusitana.className} flex flex-row items-center text-red-500`}> 
//       <AcademicCapIcon  className='h-20 w-20 rotate-45'/>
//       <p className='text-[44px]'>PIAIC</p>
//     </div>
//   )
// }

// export default AcmeLogo







