import {
  backgroundStyle,
  introVideoStyle,
  sectionStyle,
} from "../../styles/main-style";

export default function Intro() {
  return (
    <section className={sectionStyle}>
      <div className={backgroundStyle}></div>
      <video
        className={`hidden md:block ${introVideoStyle}`}
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
        className={`md:hidden mx-auto z-[3] ${introVideoStyle}`}
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
    </section>
  );
}
