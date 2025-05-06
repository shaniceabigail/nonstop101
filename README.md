# tandem
 docusaurus v3.6


## How to Run
1. Install Packages
npm install

2. Fix Audits
npm audit fix

3. Start Application
npm run start


## Deploy
- edit docusaurus.config.js (line 15)
    url: 'https://github.com',
    baseUrl: '/nonstop101',
    organizationName: 'new2nonstop', // Usually your GitHub org/user name.
    projectName: 'nonstop101', // Usually your repo name.

- set GIT_USER variable
    - macOS - export GIT_USER=<your_username>
    - windows - set GIT_USER=<your_username>

- yarn deploy
