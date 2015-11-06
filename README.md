<h1>Seattle Karaoke-Dokie</h1>
<h2>Author: Beth Ernsberger</h2>

<h3>App Info</h3>
<p>Karaoke-Dokie is the spot to find Seattle's best Karaoke spots! Users can find a listing of Yelp's highest rated Karaoke venues, search for local venues using Google Map data, and find out when venues are hosting their next big Karaoke Night. All in one spot!
</p>

<h3>Technologies Used</h3>
<ul>
	<li>HTML5</li>
	<li>CSS3</li>
	<li>Bootstrap</li>
	<li>JavaScript</li>
	<li>JQuery</li>
	<li>JQuery UI</li>
	<li>Cheerio</li>
	<li>Node.js</li>
	<li>Passport.js</li>
	<li>Express.js</li>
	<li>PostgreSQL</li>
	<li>Sequelize</li>
	<li>Yelp API</li>
	<li>Google Maps API</li>
	<li>Facebook Apps</li>
	<li>Google Fonts</li>
	<li>Font Awesome</li>
</ul>

<h3>Approach Taken</h3>
<p>
I began with several user stories for this type of application:
* As someone living in Seattle's Greenlake neighborhood, I want to find a local karaoke venue that’s near me.
* As a karaoke newbie, I want to find out about the most popular places to Karaoke. 
* As an experienced singer, I want to know where to karaoke every night of the week.
* As an avid karaoker, I want to keep track of the places I have karaoke'd in the past.
</p>
<p>
Working from these stories, I utilized Balsamiq to create wireframes for the Home, Venue and Song pages: https://github.com/bethburger42/karaoke-dokie/blob/master/static/images/Wireframes.png
</p>
<p>
After reviewing these mockups with a UX designer and revisiting the user stories, I discarded the Songs page and focused on the main draws to the website: finding nearby karaoke venues and karaoke nights.
</p>

<h3>Order of development</h3>
<ul>
<li>Database: Created a postgres database with User and Provider tables.</li>
<li>Website framework: All pages were built using the Bootstrap framework to allow responsiveness on multiple devices.</li>
<li>Venues page: Yelp list: Set up Yelp API tokens and verified the ability to pull data from the Yelp API. Wrote a "venues" controller to route data from the Yelp API to the Venues page.</li>
<li>Local login: Created a login page and wrote a "strategies" config file for logging into the site and saving sessions.</li>
<li>Facebook login: Created a Facebook app. Added functionality to the "strategies" config file and the login page to allow logging in and out of the app with Facebook.</li>
<li>Calendar page: Search results: Created a test page for scraping data from TheStranger.com website Events listing. Wrote a "calendar" controller to route data from this website to deisplay on the Calendar page.</li>
<li>Venues page: Map: Placed a map on the Venues page and wrote a JavaScript file for integrating map data from Google Maps.</li>
<li>Home page: Designed a carousel to house text and images directing users to the app pages.</li>
<li>Calendar page: Calendar: Designed a calendar using the JQuery UI Datepicker. This utility is the basis for the results from The Stranger website displayed in a list on the page.</li>
<li>Calendar page: Featured venue: Included an image link with floating text to direct users to a featured karaoke venue.</li>
<li>Home page: Embedded a karaoke YouTube video and a karaoke songbook website image and link.</li>
</ul>
<p>
The final application is hosted at: https://karaoke-dokie.herokuapp.com
</p>
