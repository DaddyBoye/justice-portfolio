const Contributors = ({ name, image, link }) => (
  <div
    className="content-card p-0 pl-2 flex items-center space-x-2 py-2 rounded-md"
    onClick={() => window.open(link, '_blank')}
  >
    <img
      className="w-[45px] h-[45px] rounded-lg bg-[#3c3c3d]"
      src={image}
      alt={name}
    />
    <p className="text-left text-sm font-bold text-[#eaeaea]">{name}</p>
  </div>
);

export default Contributors;
