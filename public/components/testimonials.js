import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const reviews = [
    { title: "At first, I was hesitant because you never know what you are going to get when you find a business consultant from a website. However, after I spoke with Dan on the phone, I immediately knew he was a true professional with vast amount of experience. I proceeded to hire him as a business consultant for our company (a fast growing e-commerce company) and he provided incredible service to the company. He offered a very fair flat rate contract to fly out to Utah, conduct in-person evaluations and analysis, and provide a comprehensive report. His feedback and recommendations were extremely helpful and valuable and it was received well by both the executives and staff. His method is very effective and thoughtful. We are forever grateful for him and his service and we will definitely hire him again.",
      author: "Shu Saito, Founder and CEO, All Filters, LLC | Salt Lake City, Utah"},
    { title: "Dan is a highly skilled critical thinker possessing the ability to see the broad view in any situation. He also has a keen awareness of the need for understanding the present in order to better plan for the future.Of his personal attributes, his integrity is unsurpassed and his caring and nurturing nature are always focused on helping others succeed. If these attributes were not enough, his wit and sense of humor would make any Irishman proud.",
        author:"William Robinson, Strategy & Analysis Executive | Dublin, Ohio"},
        {title: "I first met Dan Hackett in 2006. Our company was six years old at the time and we needed ‘big picture’ help. We needed help with our focus and vision. We needed someone to ask the hard questions.What started with simple conversations between the two of us turned into multiple company-wide strategic planning sessions. Since that day 15 years ago Dan has helped us with every aspect of our organization. From strategy to culture to operations to accounting to finance to safety to legal, to everything. His gentle influence and advice have been a significant reason for our growth and profitability over the years, we wouldn’t be where we are without him.",
        author: "Jack Stull, President, Jcrane Inc | Covington, Ohio"},
        {title: "What started as a strategy session became a trusted advisor relationship.Dan has an ability to keep us focused on the important issues by keeping everyone accountable.  He is a collaborator that makes the team feel comfortable with him as we continue to change and improve.",
        author: "Shelly Heller, President, Allied Shipping & Packaging | Dayton, Ohio"}
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export default function Testimonials(){
  return(
      <div>
          
    <Carousel 
    responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={true}
    partialVisible={true}
    //partialVisible={true}
    centerMode={false}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px">
 
<div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-4xl pb-10">
 "At first, I was hesitant because you never know what you are going to get when you find a business consultant from a website. 
  However, after I spoke with Dan on the phone, I immediately knew he was a true professional 
  with vast amount of experience. I proceeded to hire him as a business consultant for our company 
  (a fast growing e-commerce company) and he provided incredible service to the company. 
  He offered a very fair flat rate contract to fly out to Utah, conduct in-person evaluations and analysis, 
  and provide a comprehensive report. His feedback and recommendations were extremely helpful and valuable and it was received well by both the executives and staff. 
  His method is very effective and thoughtful. We are forever grateful for him and his service and we will definitely hire him again."
  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-10">Shu Saito, Founder and CEO, All Filters, LLC | Salt Lake City, Utah</div>
  </div>

  <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-4xl pb-10">
"Dan is a highly skilled critical thinker possessing the ability to see the broad view in any situation. He also has a keen awareness of the need for understanding the present in order to better plan for the future.Of his personal attributes, his integrity is unsurpassed and his caring and nurturing nature are always focused on helping others succeed. If these attributes were not enough, his wit and sense of humor would make any Irishman proud."
<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-10">William Robinson, Strategy & Analysis Executive | Dublin, Ohio</div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-4xl pb-10">
      "I first met Dan Hackett in 2006. Our company was six years old at the time and we needed ‘big picture’ help. We needed help with our focus and vision. We needed someone to ask the hard questions.What started with simple conversations between the two of us turned into multiple company-wide strategic planning sessions. Since that day 15 years ago Dan has helped us with every aspect of our organization. From strategy to culture to operations to accounting to finance to safety to legal, to everything. His gentle influence and advice have been a significant reason for our growth and profitability over the years, we wouldn’t be where we are without him."
    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-10">Jack Stull, President, Jcrane Inc | Covington, Ohio</div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-4xl pb-10">
      "What started as a strategy session became a trusted advisor relationship.Dan has an ability to keep us focused on the important issues by keeping everyone accountable.  He is a collaborator that makes the team feel comfortable with him as we continue to change and improve."
    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold pt-10">Shelly Heller, President, Allied Shipping & Packaging | Dayton, Ohio</div>
</div>
  </Carousel>
  </div>

  )
}