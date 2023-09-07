const express = require('express');
const moment = require("moment");
const app = express();
const port = process.env.PORT || 3001; // Use the provided PORT or 3001 if running locally

app.get('/api/:slack_name/:track', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

 // Get the current time in UTC
 const currentUtcTime = moment().utc();

 // Add 1 hour to the current time
 const adjustedTime = currentUtcTime.add(1, 'hour');

 // Format the adjusted time in the desired format
 const adjustedUtcTime = adjustedTime.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  // Construct GitHub URLs
  const githubFileUrl = 'https://github.com/Kmart002/backend-track1/blob/main/index.js';
  const githubRepoUrl = 'https://github.com/Kmart002/backend-track1';

  // Prepare response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
   utc_time: adjustedUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


