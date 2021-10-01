

const IndustriesCard =({id, title, desc}) => {
	return(

    <div className="container flex md:flex-wrap text-center max-w-md mx-auto md:max-w-2xl">
  <div className="md:flex">
    <div className="p-8">
      <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">{title}</div>
      <p className="mt-2 text-gray-500">{desc}</p>
    </div>
  </div>
</div>

  );
}

export default IndustriesCard;