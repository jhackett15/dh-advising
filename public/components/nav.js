import Link from 'next/link'
import Image from 'next/image'


function Nav() {
  return (
    
      <div className="max-w-md font-sans mx-auto max-w-4xl mt-20">
      <nav className="border-b-2">
        <div className="w-full lg:w-auto">
          <div className="text-lg lg:flex-1 flex justify-center mb-6">
          <Link href="/">
            <a className="m-6 lg:inline-block lg:mt-0">
              HOME
            </a>
            </Link>
            <Link href="/about">
            <a className="m-6 lg:inline-block lg:mt-0">
              ABOUT
            </a>
            </Link>
            <Link href="/advising">
            <a className="m-6 lg:inline-block lg:mt-0">
              ADVISING
            </a>
            </Link>
            <Link href="/faq">
            <a className="m-6 lg:inline-block lg:mt-0">
              FAQ
            </a>
            </Link>
            <Link href="/blog">
              <a className="m-6 lg:inline-block lg:mt-0">
                BLOG
              </a>
          </Link>
        </div>
  </div>
</nav>
    </div>
  )
}

export default Nav