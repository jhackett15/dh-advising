import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
				
<div className="max-w-md font-sans mx-auto max-w-4xl mt-10">
      <div className="border-b-2"></div>
        <div className="w-full lg:w-auto">
          <div className="text-lg lg:flex-1 flex justify-center mt-6 mb-6">
		  <SocialIcon className="" url="https://twitter.com/HackettDan" />
		  <SocialIcon className="ml-6" url="https://www.linkedin.com/company/executiveprotem/" />
		  </div>
		  <div className="text-lg lg:flex-1 flex justify-center mb-6">
		  <Link href="/terms-of-service" >
			  <a className="underline text-xs">Terms of Service</a>
		  </Link>
		  </div>
		 
		  </div>
		  </div>
    )
  }



