import React from "react";
import "./Section6.css";
import { useState } from "react";

// const Section6 =()=>{
//     return(
//         <div className="faq"><h1>Frequently Asked Questions</h1>
//         <p>Netflix is a streaming service that offers a wide variety of award-winning TV programs, films, anime, documentaries and more-on thousands internet connected devices.You can wach as much as you want, whenever you want.all for one low monthly price.There's always something new to discover and new TV programs and films are added every week.</p>
//         </div>
//     )
// }

// export default Section6

const Section6 = () => {
	const [selected, setSelected] = useState(null)
	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return (
		<div className='section6'>
			<h1>Frequently Asked Questions</h1>
				<div className='accordion'>
					{data.map((item, i) => (
						<div className="item">
							<div className="title" onClick={() =>toggle(i)}>
								<h2>{item.question}</h2>
								<span>{selected === i ? '-' : '+'}</span>
							</div>
                            
							<div className={selected === i ? 'content show' : 'content'}>
								{item.answer} 
							</div>
						</div>
					))}
			</div>
			<br /><br/>
						<div className="email">
						<input className="holder" type='email' placeholder='Email address'/>
						<button className='getstarted'>Get Started</button>
					</div>

			</div>
		
			)
					
}
		
		
			const data=[
			{
				question :'What is Netflix?',
				answer:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!',
    },
			{
				question : 'How much does Netflix cost ?',
			answer:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.',
    },
			{
				question: 'Where can i watch ?',
			answer:'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while your on the go and without an internet connection. Take Netflix with you anywhere.',
    },

			{
				question:'How do I cancel ?',
			answer:'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.',
    },
			{
				question:'What can I Watch on Netflix?',
			answer:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
			{
				question:'Is Netflix good for kids ?',
			answer:'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    }

			]

export default Section6