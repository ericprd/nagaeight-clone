export default function MenuImage(props) {
  return (
    <div className='flex justify-center'>
      <img
        src={props.src}
        alt={props.alt}
        className='w-full max-w-full small:w-[70vw] small:max-w-[70vw]'
      />
    </div>
  );
}
