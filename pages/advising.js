
import Layout from '../public/components/layout'
import Link from 'next/link'
export default function Advising() {
    return(
        <Layout>
	<div className="max-w-md w-full font-sans mx-auto max-w-4xl mt-10">
    <div className="text-lg justify-center mb-6">
    <h1 className="text-lg flex justify-center font-bold"> How We Work Together</h1>

    <div className="text-lg flex justify-center p-4">
Having over a decade of experience being an executive, I’ve been in your shoes as President & CEO (+$45MM). I’ve worked with many business owners just like you.  My goal is to help you transform your business into a more professionally managed organization.  
</div>
<div className="text-lg flex justify-center p-4 font-bold">
My area of expertise is small/mid-size companies that need direction on growing revenue, developing a strategic roadmap for scalable growth, increased visibility and collaboration across all verticals,
</div>
<div className="text-lg justify-center p-4">
Most recently, I have:
<ul className="text-lg block justify-center p-4">
<li className="text-lg block justify-center p-4">
    Helped scale a home service organization and triple their organic revenue under a year
    </li>
    <li className="text-lg block justify-center p-4">
    Roadmapped financial resources for a staffing agency that recently launched another venture 
    </li>
    <li className="text-lg block justify-center p-4">
    Optimized expansion by developing go to market strategy and managed supply chain disruption by identifying potential roadblocks and solutions to those issues
    </li>
</ul>
</div>

<div className="text-lg flex justify-center p-4 font-bold">
Why don’t I have an industry specialty?
</div>

<div className="text-lg flex justify-center p-4 font-bold">
Because it’s about the people; your team.  We move toward a more professionally managed organization, and a higher value, by closing the gap between you and your team.
</div>
<div className="text-lg justify-center p-4">
For a select few owners, I offer “unlimited calls and emails” with a monthly commitment.  I am part of your team, on a fractional basis, helping you to move it forward.  You and your team can reach out to me at any time for any question.  No meter running.  The help you need, when you need it.
</div>
<div className="text-lg p-4">
To learn more, click below to schedule a call and I have added more detail in the <Link href="/faq">
          <a className="underline">FAQ.</a>
        </Link>
</div>
<div className="text-lg p-4">
Also, check out Knowledge for some tools to help you and your team.
</div>


</div>
</div>


        </Layout>   
    )
    
}
