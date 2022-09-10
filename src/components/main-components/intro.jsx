import { introVideoStyle } from "../../styles/main-style";

export default function Intro() {
  return (
    <>
      <video
        className={`hidden tablet:block ${introVideoStyle}`}
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
        className={`tablet:hidden mx-auto z-[3] ${introVideoStyle}`}
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
    </>
  );
}
