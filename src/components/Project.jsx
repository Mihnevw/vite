import ProjectImg1 from '../assets/hospital.png';
import ProjectImg2 from '../assets/school.png';
import ProjectImg3 from '../assets/inventory.jpg';
import ProjectImg4 from '../assets/pos.png';

function Project() {
  return (
    <div className='bg-indigo-800 m-20 max-w-full p-10'>
      <div className='grid justify-items-center'>
        <h1 className='text-3xl text-white mt-10'>Projects</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
        {/* Project Card */}
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black font-semibold'>
                Hospital Management System
              </div>
              <p className='text-blue-600 hover:underline'>Subheading</p>
              <p className='text-gray-700 text-base leading-normal'>
                A Hospital Management System is software that automates hospital operations like patient records, appointments, billing, and inventory, improving efficiency and patient care.
              </p>
            </div>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[150px] h-[150px]' src={ProjectImg1} alt="Hospital" />
            </div>
          </div>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[150px] h-[150px]' src={ProjectImg2} alt="School" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                School Management System
              </div>
              <a href="#" className='text-blue-600 hover:underline'>Subheading</a>
              <p className='text-gray-700 text-base leading-normal'>
                A School Management System is software that streamlines school operations, including student records, attendance, timetables, grading, and communication, enhancing efficiency and organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className='my-8 border-gray-300' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                Inventory Management System
              </div>
              <a href="#" className='text-blue-600 hover:underline'>Subheading</a>
              <p className='text-gray-700 text-base leading-normal'>
                An Inventory Management System is software that tracks stock levels, orders, sales, and deliveries, optimizing inventory control and reducing shortages or overstocking.
              </p>
            </div>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[150px] h-[150px]' src={ProjectImg3} alt="Inventory" />
            </div>
          </div>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[150px] h-[150px]' src={ProjectImg4} alt="POS" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                POS Management System
              </div>
              <a href="#" className='text-blue-600 hover:underline'>Subheading</a>
              <p className='text-gray-700 text-base leading-normal'>
                A POS Management System is software that handles sales transactions, inventory tracking, and customer management, streamlining the checkout process and improving business operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
