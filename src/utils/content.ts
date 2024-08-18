import { INewsAPIResponse, IPageInfo } from "./interfaces";

export enum AppNavigationLinks {
  default = "/",
  home = "/home",
  newsFeed = "/news-feed",
  settings = "/settings",
}

export enum PageTitles {
  default = "/",
  home = "Home",
  newsFeed = "News Feed",
  settings = "Settings",
}

export const PageInfo: IPageInfo = {
  default: {
    title: PageTitles.home,
    link: AppNavigationLinks.default,
  },
  home: {
    title: PageTitles.home,
    link: AppNavigationLinks.home,
  },
  newsFeed: {
    title: PageTitles.newsFeed,
    link: AppNavigationLinks.newsFeed,
  },
  settings: {
    title: PageTitles.settings,
    link: AppNavigationLinks.settings,
  },
};

// remove after dev complete
export const newsAPIMockData: INewsAPIResponse = {
  status: "ok",
  totalResults: 32,
  articles: [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CNN",
      title:
        "Israeli strike kills at least 10 in southern Lebanon in one of the deadliest incidents since October 7 - CNN",
      description: null,
      url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQd1pPTTJtMmIzRHR0UFlsRUZTamk4VG56aUJmeWFLem5uSnFfbXZQbGo1dHlFS0RySWJydVZNc0ZHaTI4cF9MLVEzMUhBc2VzZ280X0p3VDJMQkhCaENIWTJSMTRxMzdfY3lKWlVGWHM5R21BekFjY2hhN3JJUWxYLTVSUmg1Z3ZLeGJXOVVBS2F5SFFrcURBZ2d1TWVfUmhx0gGXAUFVX3lxTFBJTE1rcGRGQnhzaGlFM2NCMlBDRWt3bjEtRkNKRHdKQkpMLUVLemVmNENDOXl6SDJzVmZSS3dicDhOM01yTkI1R3Qyd2JPX2NUZDRhUXZuSkxNTWhYNVV1Q3dhb0FaWDg3c3VpSUhVVnFtVVgtLVAzdDRUbmxYeXNiWnhPUnJiYlRrU1Q2TzVNOXZvRzQ2UXc?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T09:48:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The New York Times",
      title:
        "Fresh Mulch and Wet Paint: Chicago Cleans Up Before Democrats Descend - The New York Times",
      description: null,
      url: "https://news.google.com/rss/articles/CBMibkFVX3lxTFBobC0xakdPRkZJRGNKWGdRb3o3cmJrM0liQXgzbnJxaHFqRUp2bjY1N2hnd3E0ZXB2b1BkYUhNTmtaRFUzMHhqelpkRldwQllxQi1MbTEwTnUxU2tSRUJnZDBPSEVBZVdpS0dIeEt3?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T09:01:18Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "BBC.com",
      title:
        "Kamala Harris's economy plan: new housing and end to price-gouging - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE95UHpwalAxci12NGRlVVFBTk1mNDJHdlNvLUlWVXpXNnl2aWxOclJVUlR5dG1OSUtzUFllSDdqNGZNVC1uZDlkRzVDeXJmNEJIaUVqRkZHTGpfQdIBX0FVX3lxTFBEaTllbmxRcm0xRmdhTzBaRWg1cDZUWENtc3pROHE1cWFSX2E4czV5clhJZTZCM01DY0Zxb3FCcm1JTk5LMDZGVDJqOHJUMmxnQ1J5cVdPOFRFM2hHdTYw?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T07:21:01Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Daily Beast",
      title:
        "Matthew Perry’s ‘Ketamine Queen’s Other Victim Revealed - The Daily Beast",
      description: null,
      url: "https://news.google.com/rss/articles/CBMimwFBVV95cUxQbVNqMGVKZmp6cWlkdlNyMm9fYWRWb1lCS2NmWFRfOXlHOXV3UmtMaXNTT1FRb0p0cFU4bXVIdnRXSWtiaU03Q2FQSEFWdklSUWtjQi1VU3BxWWNGb1hJM3BBdGRJYVh5NUZiR0VNcVVHVG1WMWFqQkNacXFGRzhzdEs4ZVJma2RPVXBVTVVJMk13N251ZDNTbmZ0Zw?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T07:19:38Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Washington Post",
      title:
        "Supreme Court keeps block on Biden’s new Title IX regulations in some states - The Washington Post",
      description: null,
      url: "https://news.google.com/rss/articles/CBMingFBVV95cUxPUkZsTk1JWWwwR3RnYURUajZKY0h5WVZKSXRxNkNVOGNjUkRSNFFZUGVVWFFCZE1GZ0p2UTBLUXZqLUNtRW8tRWxlVUc2dnlkOWFvTHYyUnhnTjNxU3E4ZDByWThsY1hBNjJlRlIyNmwwWl90alR2NDN4YXgwS0dtdW56TXEzT2g3UkpHTjFFV2RZUEpiMFROU3lYVTJGZw?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T06:44:35Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "BBC.com",
      title:
        "Woman charged in alleged scheme to steal Graceland from Presley family - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1KZ2VreWxMcGR0UjJEVHJ6S2s3NFhNNGxvQ05JSXp1QmktX1pHTHd5Vm85NVpxb0toX1BkclZST3VscEx4V3JsMmhseWp5a290WnhUUDdPbWxqd9IBX0FVX3lxTE1jQ3czWW9GRFhjTUMtTS1oUGhiRmZ4WEx3QjJaTlZQd2VRTU9URld3bFh3Y2UtaFlBVXFYczEyOG1xajdPZFNTWWJZWDBfczFIM19sNXhraDBXcDBKTldn?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T05:47:48Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Associated Press",
      title:
        "Congo’s humanitarian crisis helped mpox spiral again into a global health emergency - The Associated Press",
      description: null,
      url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxQYVZIWlpHcW1kNWl0U25ZSW4zVjhtN3VaY0xrMi1LNG5oTTJBdGlldXVVZnRVQzludDRLVmFnVlNZMTVaT3paOXhVdlRkTkFDQzNMdVYzb01YTG1ReXgtRW9BbjRfWWZFalJGSW5ldDRyTVg5Q2NoZVBNZWVYYkktS0JXNUt3VVNIMS1PQ20xWGlSLXdGSmlNVnNB?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T05:12:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "BBC.com",
      title: "Florida woman convicted of fatally shooting neighbour - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFcXRpWnRtVW9jd083MWR0cDQtbXR4TzVYTl9GOHMwODl1LXFfMUVVZzBoaDkwa0dUc3pNZExyUVlqcHBrX3A0cHRyRGlBQ0RzeDB2Mk45SWFBQdIBX0FVX3lxTFA2NTFHbW8wTTBfSkdZV2xuM1F3OUtIcDB3Nm5LOWJIMnpILWx1TVdzd3dsRXViRUtMNUZJVzJHUEtrenRaQkZ1OFgzak1kTWdFSFliNnVoaWMtYjBjc1k4?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T04:44:04Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "ABC News",
      title:
        "Hurricane Ernesto strengthens to Category 2 as it approaches Bermuda - ABC News",
      description: null,
      url: "https://news.google.com/rss/articles/CBMipwFBVV95cUxOM2psUDY5ZllLd1ZJMkxWNDdwbmVOWVlSb0prYVU5azBNcDZMNjctTWswWG5YWW44VXBYeGlvTnRLeVBaMmdyUjBqVHpRaGswQ2FZNnpvTXNCdFduN3lwWXp3eVVOVlVHSFJ3QXhiN1ZTamRCNFRWV3VEWHhlN2VKQ01wUVhJcFJXNE96TEtpU3NtQzhyWkxtZExibEV3WHdyVVQtTmwwY9IBrAFBVV95cUxQYUtfdkRJcUlsVHdvRXBLcmVkVHRSZENNQl9SOFlZVXJibXc5bHBGdWJSeUVrdDVkeXhIRE9aN25ZQXhCV3o3cHZwNFAwUGtlWEdHUmpDYzdwekxtcDFtMHgyWDdXbHlDcDk4QkJ5Mm5uT1NVWDE4RE5JdXoxRjE5NGNDZjRVRV85X2dZekF5cGZMb0hhYmJnQWRvR281Q3BUQU1rcDZPalNwRG1I?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T04:39:28Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "NBC Sports Bay Area",
      title:
        "Report: Aiyuk wants final-year adjustment in 49ers' contract offer - NBC Sports Bay Area",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxNNUE4WmpGenBoRDFTcWhFWFRTX2pYZGJVYXZSNW5HT3dpV0pad1U0OUtMQWkzLWNpdUlTNTJCdlY5ck40VFpEaUdqd1J1LTJPSURJaG43Q1ZfWWRUWjJ5U2JyQXNHb3k0dnZBeHdjU0pkUnZnakdEa09aaXUzZnh6Zl9YbzBjMlpYX1pVRFNYbG5iRzRGazktaS03RTNHQ2pNNm0w0gGrAUFVX3lxTFBJcWlhVXdXejdxYzRyd2lzc2doWDAwa04zX1FXOFd1dXpCR3NWamViaEtvaUNMZ1ZNY1hwQm5keXgxeGhmMzFJMjdUZk45TEFzZGZNbkFHQUZRcHRwa3JtZVNZNHU4SnRCYWRxaUIwOTh6ZS10WEgyX2tXVGVCcEl6aVJyQlpQZ3Q5MHNDRlR4OHNydWc2UlpOTVlzZ2puanJzVlhZbF8xS1phVQ?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T04:05:07Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Wall Street Journal",
      title:
        "Exclusive | Behind Ukraine’s Russia Invasion: Secrecy, Speed and Electronic Jamming - The Wall Street Journal",
      description: null,
      url: "https://news.google.com/rss/articles/CBMipgFBVV95cUxNVDV1TGpxRXZEZU5Hb3hsWU4wOVdBN2w2SEhMM0stQ3VfZEl1VEZFMlEwSEFLeEtLZllJLU5hVHBMMXpIeklnd2tZQThpME1uVnhUTndZNGloRkpCWEZHbm9yNHNudXBWUUhvNUN0ZFJvT1J5TW05Rnc4ZWppeVRVRDhBVzZhamp5RWdIOU5qdmQ3Tm5OQmpxVmdYV2NMdzk5ZDZBWTdR?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T04:01:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CNET",
      title:
        "Looking to Freeze Your Credit After the National Public Data Breach? Here’s How - CNET",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxOSXd1eUFIQTlRWTd6Q2l6SDc0TTBTdGNIbVJfVmpqendFQVRTcEhJV1k0bGRxMXhoeDBtWUhha2ZHeUlRNmJLRHkwaE1EMk1jRXFCUzJycm41bUxyR25aMTVkNnNJblBYYUZGUExvUlgya2xPUDVVa3o1Uk5wSXhzRkVHSzRZaDNlU0lvWUpqZnRjckFzekJYVDdIWld4NFVYZXEwcGE3X2ViNTZOYkZuQlNjdktLOFc0UkxPaDE2Q0h0WDVnT0lrem82RQ?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T03:57:01Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "BBC.com",
      title:
        "Ukraine incursion destroys key Russian bridge in Kursk region - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBvTkdPWm5zQ3dkbnBYNFIyWWhsU1prQ29lYlZ6dDlBblFrT0pQMWhUWE9YODNLeENDV25RSVA0VzQ0OWJOWUg5UElaa2J6MHFDaWQxaTZCMzRaZ9IBX0FVX3lxTFBoQUtIY19JRkFTY0gwNkhBa1NudU12R3JISzVUbUc3LXdKTk9QVHJzNExFWEpkUjhyZmlQWTdubE12VU9Wb19YVWRzUFdxN2ZSbWd0NjU2SUtBc2ZkREQw?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T03:40:08Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "ABC7 Los Angeles",
      title:
        "Brace for impact, California drivers! Car insurance rates set to skyrocket. Here's why - ABC7 Los Angeles",
      description: null,
      url: "https://news.google.com/rss/articles/CBMivgFBVV95cUxOMmdVeTViZWtzZnNEd1JzSndhcmFRZ0Z3cl85UEVDZld0ZlFDaTdqWFFuOFpyYUFaeS1iMFV6ZVBqTlJ1TU03SHo0SGtDRm5ZVmlOZGE4Zk0wYm5RTkVDNW5jZHZmV3Vyc2d1QzNIMHZRXy1XOFBkT2RXYnJjQ0pZdzNpRVBtaDJwYVZuVENXSWJWUV9VTkFJcE41ckpNNENYTnpOdVBPdWFiRDFlcVFxWG5OZDRwa2Q0Y3RlX09R?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T03:24:47Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "WCVB Boston",
      title:
        "First human case of EEE reported in Mass. since 2020 - WCVB Boston",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiigFBVV95cUxNU3NabmJHZkp3V241TjBBNjRldUlLeE5lS1IzMFZnV2N2YkF0NWI5TkxRdzdQZklMQkZNNlk1UjE3Yy1JNzZsVl9vQ0pQcE9VTU5pMGhTMFRjbDRKV3llVkhXMjFxODYyZG4tMkhYcEZ3ZlBuUm9VaTNXYmtaS2RNUUJqT2ptczBrd1E?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T02:36:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CBS Boston",
      title:
        'Massachusetts to "seize control" of St. Elizabeth\'s from Steward; deals reached on 4 other hospitals - CBS Boston',
      description: null,
      url: "https://news.google.com/rss/articles/CBMingFBVV95cUxNcDc3TmlLUWxnZjhCWHRXWHY0UXQxZlI2Mm9iQkktbGhvbXNhR202eXhzRkZKOHk0enZ5RjNTNFVGNlhQVFowTEs3dC1sSUZZZF8tUUJ3ZThfaWQ4cEp1ckJqUnozc1VKUElibG5XcHdMeTE0ZURJS1BYdHFCbExWQURJRkZoRnlUQ3FSNEd3U2UzUkdmRHNHM2h5NHpPUdIBowFBVV95cUxObzZ4TzdlR0FrS1BheTNaM2ZUeFlkbzVjYXZ1S1FVYUpSVDBYZHREYmstbDRIMW1qWjJxS0FyaTRxYXFHNzcwQmdCX2t3dVFMeWxCS3NfejdRWE1WTG1HZkZLZDNtdXR6NS1acmdGN2JFRU9oNFVXRHhCSlh1UVVLODNmX1VESlI1eV9JdVA2VWN0LWVDSjVlb0h2SUlFTWdjRk9N?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T02:05:28Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "CBS News",
      title:
        "Willie Brown threatens to sue Trump over helicopter ride story - CBS News",
      description: null,
      url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVF9nNk1lRUdCNEFxa0tzWUhjVHYtUTU0cTFwSjlGdHZPZHc1SmJldldpUlVHclVyNk05cWhGbjU3dXlXZnpJWE9vMW03aDVDNFdFU0hQOHdjSlZTMm1qMHZIakNHNjcxVmstNFpxdVFUMWpfSHJYMW5MMmRDZV84eXJFenc3aEHSAYwBQVVfeXFMUDVmVEt3blY2VTZrOHpDRTNBMDNtZ0NEMlNvWm1FczZGQnR6R3lncGt2NGVuU2FNYXIyUGRpSllUOS03MjR1QU00U05WMERqQmV5OEJLZDFOVjJmMFM1NU1FNXp3aXVxc3h1dTZiaTZUTGJCVS0xaG1sNkRQV0M3NGUxb1U4eXNGVkE4c0s?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T01:42:26Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Bleacher Report",
      title:
        "Caitlin Clark Thrills Fans in WNBA Return After Olympic Snub as Fever Beat Mercury - Bleacher Report",
      description: null,
      url: "https://news.google.com/rss/articles/CBMixgFBVV95cUxNMExuMHFKTzlJUF9hSEV1aHVqTHlkb05BNHRjNkFxSXJDRkpGelZjZVF4YzVmR2o5ZERMN0tlbUFkVE1icUpGb25jZFZnX0xoTUZQTFZ1b25sTDVERk9xamxmbHdpbElmWFNZMFE4Mmw1Vi1TU1BFdU5xWERTUDJjMlBybloyekNJWEU3YmpSbVJFVzdZNV8zVDc0MERhR202VFl4YnB3eXc2ZndMN1pzNDdxQ21RaC1Yak1rU1dwWGhreTQtN2fSAdsBQVVfeXFMTnBLcTJJaDRLczdERGNtUTREOWp5SGZ5c0xRVXFwRzFockZ6dGhMbjZ1TUU3aHpGT3JSQUdhN2NwTGh4UV9VVjZ5Wlc1bGtyTDI2MndPNWg4MXd2T25UTXBGMHBzZXhydWJhRjgyWHJHb2o1MjF5b1VsdC10YmpxRkRtTUEySk1xdHNDYlZaM01keTk5OGw2Y1d2VWtva3NFek1wcDV5NDZ0OVhWenVtRWxUajM3ak5ZR21hcVUwQzZnS0VVdkNtWU96cm11am83UWJjZDFOSUNvTk1R?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T01:35:51Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Daily Norseman",
      title:
        "Vikings Sign Matt Corral, Place J.J. McCarthy on Injured Reserve - Daily Norseman",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPdk5WbTRYdjdxMU9QVnNzMTNQd1FwcVB4ay1TWl90enM4RF9BLUw2VTBKNTFaQjVOcTludmpIUjV6Sk5JcVBQTTFNaGh4dVlFODhad2pReGVFemk4eHlPVndwRExaLXoydkN1RWQyeUdfVXk0VjRsTmRLSUdWZXdKYkxGc1NzSDlsWm1EQ3hhYWhKV3o1dDlvYWN2a3FYcThySlhDc2YzbF9FVGdGT1FybmRnU3FZOE12eFE?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-17T00:24:16Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "POLITICO",
      title:
        "DNC delegates are jubilant about Harris. They’re also looking past the convention with caution. - POLITICO",
      description: null,
      url: "https://news.google.com/rss/articles/CBMikgFBVV95cUxOSXh3cDRrRmw5MXlYM0tYMHNsX00tTHctbmlMTTI3U082QTRIX1VCLTN4b3h2emxIUVFRQU40WUhsXy1xdkg1ZF9BWjVzeDZlOE0xWWs4Y0NEeF83Ui12TklQU1pRWngtMTY4SEwtSzNfOEJ4Z3ktZjU1ajJLWTdoODljZW0wNkMyWUNUalJDVVNOUQ?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-16T22:21:00Z",
      content: null,
    },
  ],
};
