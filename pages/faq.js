import Layout from '../public/components/layout'


const questions = [{
  id:1,
  question:`How long does an engagement last?`,
  answer:`The minimum commitment is three months and most of my engagements are more than a year with a changing role to best support your needs.`},
  {id:2,
  question:`Who do you help?`,
  answer:`I do not focus on industries because my goal is to create focus for you and your team while ensuring that smart financial decisions are made to support the growth.Some business owners get themselves wrapped up in how “complex” their industry is and why specific experience is required.  We’re not a good fit.  I work with owners who want to create momentum from and for their team.`},
  {id:3,
  question:`Are you a fractional CFO?`,
  answer: `That is only part of the service for you.  There is no “one size fits all” so the amount of financial experience is based on your current staff and needs.  Typically, I provide support to your accounting staff, create reporting for owners, and work with owners and team to drive the business forward.`},
  {id:4,
  question:`Do you have a system?`,
  answer:`Definitely not - I have rescued dozens of business owners who have tried to force feed a system to their employees, and lost ground.   I focus on the principles of a well-run company:  Planning, Accountability and Process.  Get those three principles right, and you have set the stage for growth. I am a Certified Value Builder™ and some owners get supercharged from this monthly coaching engagement where we focus on creating a more valuable company.`},
  {id:5,
  question:`What if I don’t need a Fractional Executive?`,
  answer:`The Value Builder option plus monthly financial review might be best for you.  We can discuss your needs and develop a commitment that works for both of us.`},
  {id:5,
  question:`Tell me more about this “Unlimited Calls and Emails”`,
  answer:`I’m no good to you if you have to wait for help.  You and  your team are welcome to call or email me at any time, and I’ll get back to you as quickly as possible.  I can provide a deeper level of support to you when I am interacting with you and your team in a freestyle sort of way.`},
  {id:6,
  question:`How do I contact you to learn more?`,
  answer:`Set up a call by clicking below and schedule a Discovery/Roadmap call.`
}]

const Faq = () => {
  return (

    <Layout>
<div className="max-w-md w-full mx-auto font-sans max-w-4xl mt-10">
<div className="text-lg justify-center">
<h1 className="text-2xl flex justify-center mb-6 font-bold">FAQ</h1>
{
			questions.map((x , i) => {
		    return (
                <div className="w-full justify-center mb-6" key={questions.id}>
                  <div className="text-lg font-bold w-full justify-center mb-6">
                    {questions[i].question}</div>
                    <span>{questions[i].answer}</span>
                </div>
                    );
	}
	)}


</div>
<div className="flex justify-center">
    </div>

</div>

        </Layout>
    )
}

export default Faq;