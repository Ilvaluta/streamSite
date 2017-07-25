//Site Settings
var settings = {
  'logo': 'img/logo.png', //Your logo image, you can type text too
  'twitchUsername': 'twitch', //Your Twitch username
  'numberOfVideos': 4, //Number of broadcasts/highlights to show on page
  'giveAwayMessage': 'We are doing a giveaway..', //Message to show when the goal has been reached
  'noGiveAwayMessage': 'There is no giveaway atm, sorry :(',
  'giveawayUrl': 'https://gleam.io/6FH24/your-giveaway' //Gleam.io giveaway URL, refer to documentation to see how to get this
};

//SPONSOR CONFIG
var sponsor = {
  'img': 'img/g2a.png', //Image of your main sponsor
  'url': 'http://www.g2a.com', //Website address of your sponsor/affiliate link
  'text': '<h3>Use coupon #coupon to get 3% off all games</h3>' //Text that appears under the sponsor image
};

// COLORS
var colors = {
  'header': '#000', //The background color of the header (Where the logo and stream info is)
  'socialBar': 'rgba(139, 101, 181, 1)', // The color of the bar under the header, where the social media icons are
  'page': 'rgb(24, 24, 24)', //The background color of the page - Takes colors and images as input
  'box': 'rgba(0, 0, 0, 1)', //The background color of the content boxes
  'title': 'rgba(139, 101, 181, 1)', //Background color of the title sections on top of the boxes
  'hover': '#7bbee8' //The color certain elements change to on hover (Social media links for example)
};

//TITLE CONFIG
var titles = {
  'giveaway': 'Giveaway', //Text for the title of the goal section
  'sponsor': 'Main sponsor', //Title for hte sponsor section
  'video': 'Latest VODs', //Title for the video section
  'tweets': 'Latest Tweets/ReTweets', //Title for the tweets section
  'bio': 'About me' //Title for the Bio section
};

// SOCIAL MEDIA ICONS
var socialMediaIcons = {
  "twitter" : {
    "url" : "http://twitter.com/twitch",
    "icon" : "fa-twitter",
    "id" : "#twitterIcon",
  },
  "shop" : {
    "url" : "test",
    "icon" : "fa-shopping-cart",
    "id" : "#shopIcon"
  },
  "reddit" : {
    "url" : "http://reddit.com/r/test",
    "icon" : "fa-reddit-alien",
    "id" : "#redditIcon"
  },
  "snapchat" : {
    "url" : "test",
    "icon" : "fa-snapchat-ghost",
    "id" : "#snapchatIcon"
  },
  "paypal" : {
    "url" : "test",
    "icon" : "fa-paypal",
    "id" : "#paypalIcon"
  },
  "discord" : {
    "url" : "test",
    "icon" : "fa-headphones",
    "id" : "#discordIcon"
  },
  "youtube" : {
    "url" : "http://youtube.com",
    "icon" : "fa-youtube-play",
    "id" : "#youtubeIcon"
  }
};

//BIO CONFIG
var bio = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni suscipit velit! Id porro ullam sunt voluptatem, dolores. Vero ducimus nostrum velit nihil quo dolores inventore nemo asperiores. Voluptatem, animi.</p>\
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem asperiores error repellat pariatur ipsa vel culpa nisi, dolore nobis ex quasi tempore nesciunt ducimus ullam debitis. Minus, itaque sapiente culpa!</p>\
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tenetur vitae cupiditate? Vel libero deserunt consequatur aperiam. Ducimus unde, nostrum minus accusantium minima suscipit similique, dolorum est eum fugiat quos.</p>';
var bioPic = 'img/bio.png'; //The pic you would like to use in the bio section

// TWITTER CONFIG
var configList = {
    "profile": {
      "screenName": 'twitter'  //Your twitter username
    },
    "domId": 'tweetlist',
    "maxTweets": 5, //Number of tweets you want to show at a time
    "enableLinks": true,
    "showUser": false,
    "showTime": true,
    "showImages": false,
    "lang": 'en'
};
