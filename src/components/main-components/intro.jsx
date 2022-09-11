import { introDesktopStyle, introMobileStyle } from "../../styles/main-style";

export default function Intro() {
  return (
    <>
      <video
        className={`hidden tablet:block ${introDesktopStyle}`}
        autoPlay
        muted
        loop
        playsInline>
        <source
          src='https://nagaeight.com/themes/nagaeight/assets/video/home/nagadesktop.mp4'
          type='video/mp4'
        />
        <source
          src='https://nagaeight.com/themes/nagaeight/assets/video/home/moxhe.webm'
          type='video/webm'
        />
      </video>
      <video
        className={`tablet:hidden mx-auto z-[3] ${introMobileStyle}`}
        autoPlay
        muted
        loop
        playsInline>
        <source
          src='https://nagaeight.com/themes/nagaeight/assets/video/home/nagamobile.mp4'
          type='video/mp4'
        />
        <source
          src='https://nagaeight.com/themes/nagaeight/assets/video/home/moxhe.webm'
          type='video/webm'
        />
      </video>
      <span className='text-white absolute bottom-14 text-center z-[100] inline-block w-full'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className='mx-auto mb-6'
          // xmlns:xlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          width='22px'
          height='32px'
          viewBox='0 0 22 32'
          enableBackground='new 0 0 22 32'
          // xml:space='preserve'
        >
          <g>
            <path
              fill='none'
              stroke='#ffffff'
              strokeWidth='2'
              strokeMiterlimit='10'
              d='M21,11c0-5.523-4.477-10-10-10C5.477,1,1,5.477,1,11v10c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10V11z'></path>
            <path
              fill='none'
              stroke='#ffffff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              d='M13.208,8.792c0-1.231-0.998-2.229-2.229-2.229S8.75,7.561,8.75,8.792c0,0.408,0,1.821,0,2.229c0,1.23,0.998,2.229,2.229,2.229s2.229-0.998,2.229-2.229C13.208,10.613,13.208,9.2,13.208,8.792z'></path>
          </g>
        </svg>
        <p>Sroll to Discover</p>
      </span>
    </>
  );
}
