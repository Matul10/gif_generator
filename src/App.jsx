import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
  <div className='w-full min-h-screen flex flex-col background ' >

    <h1 className='bg-white rounded-sm text-center w-11/12 mx-auto mt-[30px] py-3 font-bold text-3xl'>RANDOM GIFS</h1>
    <div className='flex flex-col w-full items-center  '>
      <Random/>
      <Tag/>
    </div>
  </div>
  );
}
