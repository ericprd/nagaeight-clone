import Intro from "../components/main-components/intro";

export default function Main() {
  return (
    <main className='min-h-[100vh] pt-[54px] pb-[15px] lg:pt-[75px] lg:pb-[22px]'>
      <canvas className='w-[calc(100%-44px)] h-[calc(100vh-97px)] fixed top-[75px] left-[22px]'></canvas>
      <div className='overflow-hidden min-h-[calc(100%-97px)]'>
        <Intro />
      </div>
    </main>
  );
}

// "w-[calc(100%-44px)] overflow-hidden mx-auto";
