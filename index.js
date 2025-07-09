require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const githubData = {
   "login": "priyanshuraj-dev",
  "id": 192135965,
  "node_id": "U_kgDOC3PDHQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/192135965?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/priyanshuraj-dev",
  "html_url": "https://github.com/priyanshuraj-dev",
  "followers_url": "https://api.github.com/users/priyanshuraj-dev/followers",
  "following_url": "https://api.github.com/users/priyanshuraj-dev/following{/other_user}",
  "gists_url": "https://api.github.com/users/priyanshuraj-dev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/priyanshuraj-dev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/priyanshuraj-dev/subscriptions",
  "organizations_url": "https://api.github.com/users/priyanshuraj-dev/orgs",
  "repos_url": "https://api.github.com/users/priyanshuraj-dev/repos",
  "events_url": "https://api.github.com/users/priyanshuraj-dev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/priyanshuraj-dev/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-18T18:11:08Z",
  "updated_at": "2025-06-29T17:59:44Z"
}

app.get('/github',(req,res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/twitter', (req, res) => {
  res.send('raj');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code </h1>');
});

app.get('/youtube',(req,res) => {
    res.send('<h2>Chai aur Code </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
