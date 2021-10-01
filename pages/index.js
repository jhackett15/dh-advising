import Layout from '../public/components/layout'
import Image from 'next/image'
import dh from '../public/images/dh.png'

export default function Home() {
    return(
      <div className="h-screen justify-center py-40">
<Layout>
<div className="max-w-md w-1/2 mx-auto font-sans max-w-4xl mt-20">
<div className="flex justify-center">
<Image className='justify-center flex' src={dh} alt="Picture of the author" width={250}
      height={250}/>
      </div>
<div className="text-lg justify-center p-4 mb-2">
<h1 className="text-3xl flex justify-center underline">Dan Hackett</h1>
<div className="text-lg flex justify-center p-4">
<h5 className="text-lg flex justify-center">I help owners build more valuable companies through data-driven, strategic roadmaps that lead to organic & scalable growth. </h5>
</div>
<div className="flex justify-center p-4">
<div className="rounded-full border-black justify-center border-4 border-opacity-100 py-3 px-6">
    <button>
    <a>WORK WITH ME</a>
    </button>
    </div>
    </div>
</div>
{/* <div className="flex w-1/2 flex-wrap">
  <div>Greater transparency and accountability across the organization</div>
  <div>Improved productivity and efficiency</div>
  </div>
  <div className="flex w-1/2 flex-wrap">
  <div>Clear objectives with outcomes</div>
  <div>Enhanced monitoring and reporting</div>
</div> */}

</div>

        </Layout>
        </div>
    )
}