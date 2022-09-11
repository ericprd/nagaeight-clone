import Section from "../components/section";

export default function ReservationPage() {
  return (
    <main className='min-h-screen pt-[75px] py-[22px]'>
      <div className='overflow-hidden min-h-[calc(100%-97px)]'>
        <Section>
          <div className='bg-[url("https://nagaeight.com/themes/nagaeight/assets/img/reservation_1.jpg")] bg-cover bg-no-repeat bg-[#ebeff3] bg-center relative w-full h-auto pb-[200px] small:p-0 small:fixed small:w-[calc(50vw-15px)] small:h-[calc(100vh-69px)] desktop:w-[calc(58.4vw-22px)] desktop:h-[calc(100vh-97px)] float-left  '></div>

          <div className='float-right min-h-0 w-full h-auto pt-[75px] relative tablet:pt-[30px] pb-[50px] text-center small:h-[calc(100vh-69px)] desktop:w-[calc(41.6vw-22px)] desktop:h-[calc(100vh-97px)]'>
            <article className='text-center w-full px-[30px] middle:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 middle:text-start middle:w-[57%] text-[#676767] inline-block'>
              <h2 className='text-[#676767] text-[2rem] leading-[1.85] mb-[2.5rem]'>
                Reservations
              </h2>
              <a
                href='https://goo.gl/maps/cMiWABVRaJH5VJw5A'
                target='_blank'
                rel='noreferrer'>
                <p className='mb-[10px] text-[1.6rem] leading-[1.9]'>
                  Jalan Danau Tamblingan No. 89 Sanur, Denpasar Selatan,Bali
                  80228
                </p>
              </a>
              <a href='tel:+6281237888089'>
                <p className='mb-[10px] text-[1.6rem] leading-[1.9]'>
                  (+62) 812 3788 8089
                </p>
              </a>
              <a href='mailto:nagaeightrestaurant@gmail.com'>
                <p className='mb-[35px] text-[1.6rem] leading-[1.9] flex text-[#676767]'>
                  <span className='py-[10px] px-[20px] border border-[#676767]'>
                    nagaeightrestaurant@gmail.com
                  </span>
                </p>
              </a>
              <div className='w-[57%]  '>
                <a
                  href='mailto:nagaeightrestaurant@gmail.com?subject=Book a Table'
                  className='inline-block relative w-[205px] mt-[40px] py-[20px] text-center text-[1.2rem] text-white bg-black uppercase tracking-wide'
                  target='_blank'
                  rel='noreferrer'>
                  <span>Book a table!</span>
                </a>
              </div>
            </article>
          </div>
        </Section>
      </div>
    </main>
  );
}
