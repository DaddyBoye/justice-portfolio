import { FaGithub } from 'react-icons/fa';

const GitBtn = ({ link }) => {
    return (
      <div className='content-card py-[5px] flex space-x-2 items-center justify-center rounded-md' onClick={() => window.open(link, '_blank')}>
        <div className='text-3xl flex items-center' style={{ color: '#181717', padding: '0px 1px' }}><FaGithub /></div>
        <p className='text-center text-sm font-bold text-[#eaeaea]'>GitHub Repo</p>
      </div>
    );
  };
  
  export default GitBtn;

