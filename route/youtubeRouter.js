const express = require('express');
const youtubeRouter = express.Router();
const { google } = require('googleapis');
//routes
youtubeRouter.get('/:query', getSearchListbyQuery);

module.exports = youtubeRouter;

function getSearchListbyQuery(req, res, next) {
    let service = google.youtube('v3');
    service.search.list({
        auth: 'AIzaSyBfmlyyM7uBtom1wBGVkTUuY98PKhHa3iE',
        part: 'snippet',
        q: req.params.query
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        let videolist = response.data.items;
        if (videolist.length == 0) {
            console.log('No video found.');
        } else {
            res.send(`This video's ID is ${videolist[0].id.videoId}. Its title is ${videolist[0].snippet.title} and it has published by ${videolist[0].snippet.channelTitle}
            <div class="item">
                <iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/${videolist[0].id.videoId}" frameborder="0" allowfullscreen></iframe>
            </div>`);
        }
    });
}