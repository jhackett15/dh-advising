import Image from 'next/image'

const ServiceCard =({id, title, desc, image}) => {
    
	return(

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-md text-indigo-500 font-semibold">{title}</div>
      <p class="mt-2 text-gray-500">{desc}</p>
    </div>
  </div>
</div>

	  );
}


export default ServiceCard;