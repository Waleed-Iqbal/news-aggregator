## How to run the app

- Clone this repo
- Make sure to have node 18 installed in your machine
- Install all package by executing "npm install"
- Add a ".env" file in the root level and add your NewsAPI key like REACT_APP_NEWS_API_KEY=<your_key_here>
- Execute "npm run dev" and the app server should start on locally (usually on http://localhost:3000)

## Notes / Features

- The home page (/home) will show some headline where news can be search by keywords, date range and categories.
- The news on home page (/home) can be filtered by sources
- The settings page (/settings) will set user preferences. There are some default preferences already set.
- These set preferences will be lost after page refresh
- The news feed page (/news-feed) will show news based on the preferences set in the settings page (/settings)
- Unknown urls will redirect to the home page
- In case of API failure, an error message is shown on the UI
- Loading states are added
- The app is mobile friendly

## Challenges / Restrictions

- Non paid versions of the APIs are a big hassle
- APIs fail with message like "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."
  - Unable to record a demo due to this
- Cannot install docker as I have restrictions on my machine
