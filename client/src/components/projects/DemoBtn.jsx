import { HiMiniSignal } from "react-icons/hi2";

const DemoBtn = ({ link }) => {
    return (
      <div className='content-card py-[5px] flex space-x-2 items-center justify-center rounded-md' onClick={() => window.open(link, '_blank')}>
        <div className='text-3xl flex items-center' style={{ color: '#03c7ec', padding: '0px 1px' }}><HiMiniSignal /></div>
        <p className='text-center text-sm font-bold text-[#eaeaea]'>Live Demo</p>
      </div>
    );
  };
  
  export default DemoBtn;

