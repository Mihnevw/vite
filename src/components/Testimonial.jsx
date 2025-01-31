import B1 from '../assets/avatar1.jpg';
import B2 from '../assets/avatar2.jpg';
import B3 from '../assets/avatar3.jpg';
import B4 from '../assets/avatar4.jpg';

function Testimonial() {
  return (
    <div className="flex  m-20 ssm:flex-col lg:flex-row">
      <div className='grid justify-items-center'>
        <h1 className='text-3xl text-white mt-10'>Team: </h1>
      </div>
      <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto 
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex 
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">

          <img
            src={B1}
            alt="image"
            className='absolute -left-6 w-28 h-28 rounded-full shadow-lg'
          />

          <div className='min-w-0 py-5 pl-28 pr-5'>
            <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
              Mike
            </div>
            <div className='text-slate-500 font-medium text-sm sm:text-base
            leading-tight truncate dark:text-slate-300'>
              Manager
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto 
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex 
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">

          <img
            src={B2}
            alt="image"
            className='absolute -left-6 w-28 h-28 rounded-full shadow-lg'
          />

          <div className='min-w-0 py-5 pl-28 pr-5'>
            <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
              Peter
            </div>
            <div className='text-slate-500 font-medium text-sm sm:text-base
            leading-tight truncate dark:text-slate-300'>
              Back-End Dev
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto 
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex 
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">

          <img
            src={B3}
            alt="image"
            className='absolute -left-6 w-28 h-28 rounded-full shadow-lg'
          />

          <div className='min-w-0 py-5 pl-28 pr-5'>
            <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
              Silvester
            </div>
            <div className='text-slate-500 font-medium text-sm sm:text-base
            leading-tight truncate dark:text-slate-300'>
              Front-End Dev
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto 
        bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex 
        items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">

          <img
            src={B4}
            alt="image"
            className='absolute -left-6 w-28 h-28 rounded-full shadow-lg'
          />

          <div className='min-w-0 py-5 pl-28 pr-5'>
            <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
              John
            </div>
            <div className='text-slate-500 font-medium text-sm sm:text-base
            leading-tight truncate dark:text-slate-300'>
              Full Stack Dev
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial