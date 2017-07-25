//streamSite - www.streamsite.com
//Version - 1.02
/*jshint esversion: 6 */

$(document).ready(() => {
  let highlights = $('#highlights');
  let followers = $('#followers');
  let streaminfo = $('#streaminfo');
  let sponsorSlot = $('#sponsorSlot');
  let bioSection = $('#bio');
  let giveaway = $('.giveaway');

  //Function to check whether the logo variable is an image or text
  function isImage(input) {
    if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(input)) {
      return 'true';
    } else { // input is not an image
      return 'false';
    }
  }

  //Slices the first 10 chars from the date of a video to create the date
  function getDate(input) {
    const date = input.slice(0, 10);
    return date;
  }

  function getHighlights() {
    $.ajax({
      url: `https://api.twitch.tv/kraken/channels/${settings.twitchUsername}/videos?highlights=true&limit=${settings.numberOfVideos}`,
      data: { client_id: 'sy8t405is27qepl3jf8j7by99b3wo5k', },
    }).done(highlights => {
      $.each(highlights.videos, (i, item) => {
        $('.highlights').append(`
            <div class="video col-md-3 col-12">
              <a href="${item.url}">
                <img src="${item.preview}" class="img-fluid">
              </a>
              <a class="video-text" href="${item.url}"><p>${item.title}</p></a><div class="video-date">${getDate(item.recorded_at)}</div></div>
            `);
      });
    });
  }

  function getBroadcasts() {

    //JSON request to grab information about the recent broadcasts
    $.ajax({
      url: `https://api.twitch.tv/kraken/channels/${settings.twitchUsername}/videos?broadcasts=true&limit=${settings.numberOfVideos}`,
      data: {
        client_id: 'sy8t405is27qepl3jf8j7by99b3wo5k',
      },
    }).done(broadcasts => {
      $.each(broadcasts.videos, (i, item) => {
          $('.broadcasts').append(`
            <div class="video col-md-3 col-12">
              <a href="${item.url}">
                <img src="${item.preview}" class="img-fluid">
              </a>
              <a class="video-text" href="${item.url}"><p>${item.title}</p></a><div class="video-date">${getDate(item.recorded_at)}</div></div>
            `);
        }),

        // JSON request to see if stream is online
        $.ajax({
          url: `https://api.twitch.tv/kraken/streams/${settings.twitchUsername}`,
          data: {
            client_id: 'sy8t405is27qepl3jf8j7by99b3wo5k',
          },
        }).done(live => {
          if (live.stream == null) {
            streaminfo.html(`
                      <a href="http://twitch.tv/${settings.twitchUsername}"><span class="offlinetext">Offline (Go to channel)</span></a>
                      <a href="${broadcasts.videos[0].url}" target="_blank">
                        <img src="${broadcasts.videos[0].preview}" class="statusThumbnail">
                      </a>`);
          } else {
            streaminfo.html(`<a href="http://twitch.tv/${settings.twitchUsername}"><span class="onlinetext">Online</span></a>
                      <img src="${live.stream.preview.medium}" class="statusThumbnail">
                    <p>Viewers : ${live.stream.viewers} | Playing : ${live.stream.game}</p>`);
          }
        });
    });
  }

  followers.html(`<p>${settings.giveAwayMessage}</p>`);

  //Request information for recent highlights
  //Toggle highlights and broadcasts button
  function toggleVideos() {
    $('#videoType').on('click', () => {
      const type = $('#videoType').val();
      if (type == 'Broadcasts') {
        $('.broadcasts').addClass('hidden');
        $('.highlights').removeClass('hidden');
        $('#vodType').html('<h3>Highlights</h3>');
        $('#videoType').val('Highlights');
      } else if (type == 'Highlights') {
        $('.highlights').addClass('hidden');
        $('.broadcasts').removeClass('hidden');
        $('#vodType').html('<h3>Broadcasts</h3>');
        $('#videoType').val('Broadcasts');
      }
    });
  }

  toggleVideos();

  function socialMedia() {
    $.each(socialMediaIcons, (i, item) => {
      if (item.url != '') {
        $(item.id).append(`<a href="${item.url}"><i class="fa fa-2x ${item.icon}" style="color:${item.color}" aria-hidden="true"></i></a>`);
      } else {
        $(item.id).addClass('hidden');
      }
    });
  }

  socialMedia();

  function addHover() {
    let hoverItems = $('.hover li a');
    if (colors.hover != '') {
      let hoverColor = '#FFF';
    } else {
      var hoverColor = colors.hover;
    }

    hoverItems.hover(function () {
      $(this).css('color', colors.hover);
    }, function () {
      $(this).css('color', '');
    });
  }

  addHover();

  giveaway.html(`<a class="e-widget no-button" id="giveawaylink" href="${settings.giveawayUrl}" rel="nofollow"></a>
`);

  let logoSpot = $('#logo');
  if (isImage(settings.logo) == 'true') {
    logoSpot.append(`<img src="${settings.logo}" class="img-fluid">`);
  }

  if (isImage(settings.logo) == 'false') {
    logoSpot.append(`<h1>${settings.logo}</h1>`);
  }

  function setColors() {
    let headerSection = $('.header-section');
    let contentSection = $('.content-section');
    let boxes = $('.bg');
    let socialMedia = $('#socialMedia');
    socialMedia.css('background-color', colors.socialBar);
    headerSection.css('background-color', colors.header);
    if (isImage(colors.page) == 'true') {
      contentSection.css('background', `url(${colors.page})`);
    }

    if (isImage(colors.page) == 'false') {
      contentSection.css('background-color', colors.page);
    }

    if (isImage(colors.box) == 'false') {
      boxes.css('background-color', colors.box);
    }

    $('.title').css('background-color', colors.title);
  }

  function setTitles() {
    let titleGoal = $('#goalTitle');
    titleGoal.text(titles.giveaway);
    let titleSponsor = $('#sponsorTitle');
    titleSponsor.text(titles.sponsor);
    let titleVideo = $('#videoTitle');
    titleVideo.text(titles.video);
    let titleTweets = $('#tweetsTitle');
    titleTweets.text(titles.tweets);
    let titleBio = $('#bioTitle');
    titleBio.text(titles.bio);
    sponsorSlot.html(`<a target="_blank" href="${sponsor.url}"><img src="${sponsor.img}"></a><h5>${sponsor.text}</h5>`);
    bioSection.html(`<img src="${bioPic}" class="img-fluid" alt="me">${bio}`);
  }

  twitterFetcher.fetch(configList);
  setColors();
  setTitles();
  getHighlights();
  getBroadcasts();
});
