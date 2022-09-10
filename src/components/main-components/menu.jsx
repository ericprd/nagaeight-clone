export default function Menu() {
  return (
    <ul className='z-40 absolute top-0 left-0 right-0 bottom-0 text-white text-center'>
      <li className='relative float-left block top-0 bottom-0 h-1/2 w-full tablet:h-full tablet:w-1/2 z-40  group '>
        <div className="bg-[url('https://nagaeight.com/themes/nagaeight/assets/img/home/discover_section2.jpg')] absolute top-0 left-0 right-0 bottom-0 w-[200%] -z-10 bg-cover origin-[50%] scale-100 opacity-0 group-hover:opacity-100 ransition-all duration-300"></div>
        <a href='https://nagaeight.com/menu' className=''>
          <div className='absolute top-1/2 right-0 left-0 -translate-y-1/2 flex justify-center items-center'>
            <p className='text-[2rem] tablet:text-[3rem] group-hover:-translate-x-[25px] transition-all duration-500'>
              Discover the Menu
            </p>
            <p className='group-hover:translate-x-[25px] text-[2rem] tablet:text-[3rem] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              →
            </p>
          </div>
        </a>
      </li>
      <li className='relative group float-left block top-0 bottom-0 h-1/2 w-full tablet:h-full tablet:w-1/2 z-40 hover:-translate-x-[25px] transition-all duration-300'>
        <a
          href='mailto:nagaeightrestaurant@gmail.com'
          target='_blank'
          rel='noreferrer'>
          <div className='absolute top-1/2 right-0 left-0 -translate-y-1/2 flex justify-center items-center'>
            <p className='text-[2rem] tablet:text-[3rem] group-hover:-translate-x-[25px] transition-all duration-300'>
              Book your table now!
            </p>
            <p className='group-hover:translate-x-[35px] text-[2rem] tablet:text-[3rem] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              →
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
}
