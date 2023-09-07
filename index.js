const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or 3000 if running locally

app.get('/api', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get current UTC time
  const currentUtcTime = new Date().toISOString();

  // Construct GitHub URLs
  const githubFileUrl = 'https://github.com/Kmart002/backend-track1/blob/main/index.js';
  const githubRepoUrl = 'https://github.com/Kmart002/backend-track1';

  // Prepare response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTime,
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


