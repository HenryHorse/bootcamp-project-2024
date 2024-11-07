export default function Home() {
  return (
	  <div className="about max-w-2xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
		  <h1 className="text-center text-2xl font-mono mt-4">Welcome to my website!</h1>
		  <div className="about-image flex justify-center mt-6">
			  <img className="rounded-full w-[300px] h-[300px] object-cover" src="/assets/images/me.jpeg"
				   alt="My Photo"/>
		  </div>
		  <div className="font-mono mt-6 space-y-4 text-lg text-gray-700 leading-relaxed">
			  <p>
				  <em>Hello there!</em> My name is Shayan Daijavad.
				  I'm a 4th year Computer Science Major at <strong>Cal Poly SLO</strong>.
			  </p>
			  <p>
				  My strengths are in graph theory and algorithm design and complexity.
				  I am currently involved in two research projects, one relating to migration networks, and the
				  other to Markov Chain Monte Carlo algorithms.
				  I also tutor at the Cal Poly CSSE Tutoring Center.
			  </p>
			  <p>
				  A little bit about me, I love reading, playing video games, exercising, cooking, and listening to
				  music.
				  I'm also trying to learn how to play the guitar.
				  If you are interested, below is a list of some of my favorite things.
			  </p>
			  <ul className="list-disc list-inside space-y-2">
				  <li><strong>Books</strong>: <em>The Left Hand of Darkness</em> by Ursula K. Le
					  Guin, <em>Circe</em> by Madeline Miller, <em>The Will of the Many</em> by James Islington
				  </li>
				  <li><strong>Music</strong>: Olivia Rodrigo, Laufey, Taylor Swift</li>
				  <li><strong>Video Games</strong>: Baldur's Gate 3, Dark Souls, Red Dead Redemption 2</li>
				  <li><strong>Shows and Movies</strong>: <em>Friends</em>, <em>Neon Genesis Evangelion</em>, <em>The
					  Lord of the Rings</em></li>
				  <li><strong>Exercise</strong>: Weightlifting, yoga, running</li>
				  <li><strong>Food</strong>: Pizza, ramen</li>
			  </ul>
		  </div>
	  </div>
  )
}