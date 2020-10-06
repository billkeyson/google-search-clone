const response  = { 
  url: {
    type: 'application/json',
    template: 'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json'
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '2090000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '727f04f3ed3168b6d'
      }
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '2090000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '727f04f3ed3168b6d'
      }
    ]
  },
  context: {
    title: 'googleDemo'
  },
  searchInformation: {
    searchTime: 0.490472,
    formattedSearchTime: '0.49',
    totalResults: '2090000000',
    formattedTotalResults: '2,090,000,000'
  },  
    items: [
      {
        kind: 'customsearch#result',
        title: 'Hello - YouTube',
        htmlTitle: '<b>Hello</b> - YouTube',
        link: 'https://www.youtube.com/watch?v=_WS9w10ygpU',
        displayLink: 'www.youtube.com',
        snippet: 'Jun 23, 2016 ... Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL \nRecordings Ltd., under exclusive license to Columbia Records, ...',
        htmlSnippet: 'Jun 23, 2016 <b>...</b> Provided to YouTube by Sony Music Entertainment <b>Hello</b> · Adele 25 ℗ 2015 XL <br>\nRecordings Ltd., under exclusive license to Columbia Records,&nbsp;...',
        formattedUrl: 'https://www.youtube.com/watch?v=_WS9w10ygpU',
        htmlFormattedUrl: 'https://www.youtube.com/watch?v=_WS9w10ygpU',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJHNxdCQYZ-ath77UErR6huMprmSH8r5WvywsW8jHETmH3w4qBVqzUCH0',
              width: '300',
              height: '168'
            }
          ],
          imageobject: [
            {
              width: '1280',
              url: 'https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg',
              height: '720'
            }
          ],
          person: [
            {
              name: 'Adele - Topic',
              url: 'http://www.youtube.com/channel/UCRw0x9_EfawqmgDI2IgQLLg'
            }
          ],
          metatags: [
            {
              'og:image': 'https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg',
              'twitter:app:url:iphone': 'vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks',
              'twitter:app:id:googleplay': 'com.google.android.youtube',
              'og:image:width': '1280',
              'twitter:card': 'player',
              'theme-color': '#ff0000',
              'og:site_name': 'YouTube',
              'twitter:url': 'https://www.youtube.com/watch?v=_WS9w10ygpU',
              'twitter:app:url:ipad': 'vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks',
              'al:android:package': 'com.google.android.youtube',
              'twitter:app:name:googleplay': 'YouTube',
              title: 'Hello',
              'al:ios:url': 'vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks',
              'twitter:app:id:iphone': '544007664',
              'og:description': 'Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...',
              'al:ios:app_store_id': '544007664',
              'twitter:image': 'https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg',
              'twitter:player': 'https://www.youtube.com/embed/_WS9w10ygpU',
              'twitter:player:height': '720',
              'twitter:site': '@youtube',
              'og:video:type': 'text/html',
              'og:video:height': '720',
              'og:video:url': 'https://www.youtube.com/embed/_WS9w10ygpU',
              'og:type': 'video.other',
              'twitter:title': 'Hello',
              'al:ios:app_name': 'YouTube',
              'og:title': 'Hello',
              'og:image:height': '720',
              'twitter:app:id:ipad': '544007664',
              'al:web:url': 'https://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks',
              'og:video:secure_url': 'https://www.youtube.com/embed/_WS9w10ygpU',
              'og:video:tag': 'Adele',
              'og:video:width': '960',
              'al:android:url': 'vnd.youtube://www.youtube.com/watch?v=_WS9w10ygpU&feature=applinks',
              'fb:app_id': '87741124305',
              'twitter:app:url:googleplay': 'https://www.youtube.com/watch?v=_WS9w10ygpU',
              'twitter:app:name:ipad': 'YouTube',
              'twitter:description': 'Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...',
              'og:url': 'https://www.youtube.com/watch?v=_WS9w10ygpU',
              'twitter:player:width': '960',
              'al:android:app_name': 'YouTube',
              'twitter:app:name:iphone': 'YouTube'
            }
          ],
          videoobject: [
            {
              embedurl: 'https://www.youtube.com/embed/_WS9w10ygpU',
              playertype: 'HTML5 Flash',
              isfamilyfriendly: 'True',
              uploaddate: '2016-06-23',
              description: 'Provided to YouTube by Sony Music Entertainment Hello · Adele 25 ℗ 2015 XL Recordings Ltd., under exclusive license to Columbia Records, a Division of Sony M...',
              videoid: '_WS9w10ygpU',
              url: 'https://www.youtube.com/watch?v=_WS9w10ygpU',
              duration: 'PT4M56S',
              unlisted: 'False',
              name: 'Hello',
              paid: 'False',
              width: '960',
              regionsallowed: 'AR,AS,BO,BR,CL,CO,CR,DO,EC,GT,GU,HN,MP,MX,NI,PA,PE,PR,PY,SV,US,UY,VE,VI',
              genre: 'Music',
              interactioncount: '21471356',
              channelid: 'UCRw0x9_EfawqmgDI2IgQLLg',
              datepublished: '2016-06-23',
              thumbnailurl: 'https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg',
              height: '720'
            }
          ],
          cse_image: [
            {
              src: 'https://i.ytimg.com/vi/_WS9w10ygpU/maxresdefault.jpg'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
        htmlTitle: '<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news',
        link: 'https://www.hellomagazine.com/',
        displayLink: 'www.hellomagazine.com',
        snippet: 'HELLO! brings you the latest celebrity & royal news from the UK & around the \nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, ...',
        htmlSnippet: '<b>HELLO</b>! brings you the latest celebrity &amp; royal news from the UK &amp; around the <br>\nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies,&nbsp;...',
        cacheId: 'hxjkDmKHGvIJ',
        formattedUrl: 'https://www.hellomagazine.com/',
        htmlFormattedUrl: 'https://www.<b>hello</b>magazine.com/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrFJKj5Z05x3Oik1ptcuuuy59bHOq359QK_F2Pug3AQIxhDa6Sb7xmPeo',
              width: '225',
              height: '225'
            }
          ],
          metatags: [
            {
              'p:domain_verify': '2e0d0d07c9164557a351ff28f09074ef',
              'og:image': 'https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png',
              'og:type': 'website',
              'og:site_name': 'HELLO!',
              handheldfriendly: 'True',
              'msvalidate.01': '802E2A1202224ED23A9EF77A39836CEC',
              author: 'HELLO!',
              'og:title': 'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
              locality: 'London, UK',
              origen: 'hellomagazine.com',
              title: 'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
              distribution: 'global',
              'og:description': 'HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, weddings, pregnancies and more!',
              'fb:pages': '89982930077',
              viewport: 'width=device-width, initial-scale=1',
              'dc.creator': 'HELLO!',
              organization: 'HELLO!',
              mobileoptimized: '0',
              'fb:admins': '89982930077',
              'resource-type': 'document',
              'dc.language': 'English',
              lang: 'en-GB',
              'og:url': 'https://www.hellomagazine.com/',
              'botify-site-verification': 'rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug'
            }
          ],
          cse_image: [
            {
              src: 'https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png'
            }
          ],
          sitenavigationelement: [
            {
              name: 'Celebrities',
              url: 'Celebrities'
            },
            {
              name: 'Celebrities',
              url: 'Celebrities'
            },
            {
              name: 'Celebrities',
              url: 'U.S. Edition'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan ...',
        htmlTitle: '<b>hello</b> | Healthy Toothpaste &amp; Mouthwash - Naturally Friendly, Vegan ...',
        link: 'https://www.hello-products.com/',
        displayLink: 'www.hello-products.com',
        snippet: 'Shop our naturally friendly products for your family here. Our vegan friendly \ntoothpaste is free from dyes, artificial sweeteners and other preservatives.',
        htmlSnippet: 'Shop our naturally friendly products for your family here. Our vegan friendly <br>\ntoothpaste is free from dyes, artificial sweeteners and other preservatives.',
        cacheId: 'lcA_2yf_mQgJ',
        formattedUrl: 'https://www.hello-products.com/',
        htmlFormattedUrl: 'https://www.<b>hello</b>-products.com/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUPa9sSDFfSdnplmReYFkV88NxNy17A-KZDOicIZzb3InO-aiid8xrcDnk',
              width: '259',
              height: '195'
            }
          ],
          metatags: [
            {
              'msapplication-tilecolor': '#ffffff',
              'theme-color': '#ffffff',
              'og:type': 'website',
              'twitter:card': 'summary',
              'og:site_name': 'Hello Products',
              'msvalidate.01': '782AB2D27CB855D9F86E2B56FBC572DA',
              'og:title': 'hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan & Never Tested on Animals',
              bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
              'msapplication-tileimage': '/ms-icon-144x144.png',
              'og:description': 'Shop our naturally friendly products for your family here. Our vegan friendly toothpaste is free from dyes, artificial sweeteners and other preservatives.',
              'article:modified_time': '2020-08-26T14:33:15+00:00',
              viewport: 'width=device-width, initial-scale=1.0',
              'og:locale': 'en_US',
              'og:url': 'https://www.hello-products.com/',
              'format-detection': 'telephone=no'
            }
          ],
          cse_image: [
            {
              src: 'https://www.hello-products.com/wp-content/uploads/2020/01/headermobile-1.jpg'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Sanrio: The Official Home of Hello Kitty & Friends',
        htmlTitle: 'Sanrio: The Official Home of <b>Hello</b> Kitty &amp; Friends',
        link: 'https://www.sanrio.com/',
        displayLink: 'www.sanrio.com',
        snippet: 'The official website for all things Sanrio - the official home of Hello Kitty & Friends \n- games, events, characters, videos, shopping and more!',
        htmlSnippet: 'The official website for all things Sanrio - the official home of <b>Hello</b> Kitty &amp; Friends <br>\n- games, events, characters, videos, shopping and more!',
        cacheId: 'XcVtgsJCXsYJ',
        formattedUrl: 'https://www.sanrio.com/',
        htmlFormattedUrl: 'https://www.sanrio.com/',
        pagemap: {
          offer: [
            {
              pricecurrency: 'USD',
              price: '10.00'
            }
          ],
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUygQ1A3Mosgug8a1ftBHorZgswqaBs9URZ8mVF9DlUjliWY8gq7CYFw',
              width: '223',
              height: '92'
            }
          ],
          product: [
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/little-twin-stars-home-fragrance-diffuser-05101-201912/5f16301573696400170000d6/large_thumb.jpg?c=1595376020',
              name: 'Little Twin Stars Home Fragrance Diffuser',
              url: 'Little Twin Stars Home Fragrance Diffuser'
            },
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/2sweet-hello-kitty-sitting-pretty-necklace/5e7ecbd07369640017000007/large_thumb.jpg?c=1585368016',
              name: '2Sweet x Hello Kitty Sitting Pretty Necklace',
              url: '2Sweet x Hello Kitty Sitting Pretty Necklace'
            },
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/hello-kitty-45th-anniversary-fairy-doll/5dc34a7373616e3d89000063/large_thumb.jpg?c=1573079667',
              name: 'Hello Kitty 45th Anniversary Fairy Doll',
              url: 'Hello Kitty 45th Anniversary Fairy Doll'
            },
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/pompompurin-mini-pouch-charm-40882-201912/5f1a32db7369640018000113/large_thumb.jpg?c=1595552475',
              name: 'Pompompurin Mini Pouch Charm',
              url: 'Pompompurin Mini Pouch Charm'
            },
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/stoney-clover-lane-x-hello-kitty-hearts-backpack-613509-202004/5f29cc947369646e7d00036c/large_thumb.jpg?c=1596574868',
              name: 'Stoney Clover Lane x Hello Kitty Hearts Backpack',
              url: 'Stoney Clover Lane x Hello Kitty Hearts Backpack'
            },
            {
              image: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/cinnamoroll-star-ballpoint-pen-70119-201908/5f4706647369641138000a8a/large_thumb.jpg?c=1598490212',
              name: 'Cinnamoroll Star Ballpoint Pen',
              url: 'Cinnamoroll Star Ballpoint Pen'
            }
          ],
          metatags: [
            {
              'application-name': 'Sanrio',
              'msapplication-tilecolor': '#FFFFFF',
              'p:domain_verify': '70619ea1cff70071aab743f7d8b7279d',
              'og:image': 'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png',
              'msapplication-square70x70logo': 'weblinc/store_front/favicons/mstile-70x70.png',
              'og:type': 'website',
              'msvalidate.01': 'A4631A88C85C75C62A1BE7F3504D246C',
              'ga-tracking-id': 'UA-3300118-1',
              'og:title': 'The Official Home of Hello Kitty & Friends - Sanrio',
              'msapplication-wide310x150logo': 'weblinc/store_front/favicons/mstile-310x150.png',
              'csrf-param': 'authenticity_token',
              locale: 'en',
              'msapplication-tileimage': 'weblinc/store_front/favicons/mstile-144x144.png',
              'msapplication-square150x150logo': 'weblinc/store_front/favicons/mstile-150x150.png',
              environment: 'production',
              viewport: 'width=device-width',
              'msapplication-square310x310logo': 'weblinc/store_front/favicons/mstile-310x310.png',
              'csrf-token': 'iMDWuastZKITBm0k/Yx8LiBQvjx1Ootrb9TlMC/zl9BwlG6y+GyNDL41VAeETd7ZQ3+2+wqCIfALEZP6Y87xaQ==',
              'og:url': 'https://www.sanrio.com/',
              breadcrumbs: [
                '5d8cf5b173616e7f0b000004'
              ]
            }
          ],
          cse_image: [
            {
              src: 'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png'
            }
          ],
          hproduct: [
            {
              fn: '2Sweet x Hello Kitty Sitting Pretty Necklace',
              photo: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/2sweet-hello-kitty-sitting-pretty-necklace/5e7ecbd07369640017000007/large_thumb.jpg?c=1585368016',
              url: 'https://www.sanrio.com/products/2sweet-hello-kitty-sitting-pretty-necklace'
            },
            {
              fn: 'Stoney Clover Lane x Hello Kitty Hearts Backpack',
              photo: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/stoney-clover-lane-x-hello-kitty-hearts-backpack-613509-202004/5f29cc947369646e7d00036c/large_thumb.jpg?c=1596574868',
              url: 'https://www.sanrio.com/products/stoney-clover-lane-x-hello-kitty-hearts-backpack-613509-202004'
            },
            {
              fn: 'Cinnamoroll Star Ballpoint Pen',
              photo: 'https://sanrio-production-weblinc.netdna-ssl.com/product_images/cinnamoroll-star-ballpoint-pen-70119-201908/5f4706647369641138000a8a/large_thumb.jpg?c=1598490212',
              currency: 'USD',
              currency_iso4217: '840',
              url: 'https://www.sanrio.com/products/cinnamoroll-star-ballpoint-pen-70119-201908'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Hello (Adele song) - Wikipedia',
        htmlTitle: '<b>Hello</b> (Adele song) - Wikipedia',
        link: 'https://en.wikipedia.org/wiki/Hello_(Adele_song)',
        displayLink: 'en.wikipedia.org',
        snippet: 'Hello (Adele song) - Wikipedia',
        htmlSnippet: '<b>Hello</b> (Adele song) - Wikipedia',
        cacheId: 'z7n3yz7lb8gJ',
        formattedUrl: 'https://en.wikipedia.org/wiki/Hello_(Adele_song)',
        htmlFormattedUrl: 'https://en.wikipedia.org/wiki/<b>Hello</b>_(Adele_song)',
        pagemap: {
          hcard: [
            {
              fn: 'Adele',
              nickname: 'Adele'
            }
          ],
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTPwGd0i5S8YOngLxcsTn99Z9YW0VOk9ICPGGFfTGRDMViG3FuJ1Lwwk',
              width: '225',
              height: '225'
            }
          ],
          metatags: [
            {
              referrer: 'origin',
              'og:image': 'https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png'
            }
          ],
          cse_image: [
            {
              src: 'https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Hello Design',
        htmlTitle: '<b>Hello</b> Design',
        link: 'https://www.hellodesign.com/',
        displayLink: 'www.hellodesign.com',
        snippet: 'Hello is a creative agency driven to craft worthy experiences. We believe \neverything will be digital—surrounding us like the air we breathe. Hello is ...',
        htmlSnippet: '<b>Hello</b> is a creative agency driven to craft worthy experiences. We believe <br>\neverything will be digital—surrounding us like the air we breathe. <b>Hello</b> is&nbsp;...',
        cacheId: 'bpnW6X-_EvAJ',
        formattedUrl: 'https://www.hellodesign.com/',
        htmlFormattedUrl: 'https://www.<b>hello</b>design.com/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR--0_qKuJoRNnvSwoiYALScg3GTJgsjRFwAbRZLQ0tpurCbrxgSMwjOngj',
              width: '310',
              height: '163'
            }
          ],
          metatags: [
            {
              cluster: 'ip-10-3-3-5.us-west-2.compute.internal',
              'og:image': 'https://www.hellodesign.com/image/732/b17/0.5,0.5',
              'og:type': 'website',
              'twitter:title': 'Hello Design',
              'og:image:width': '1200',
              'twitter:card': 'summary_large_image',
              'og:site_name': 'Hello',
              author: 'Hello Design',
              'og:title': 'Hello Design',
              'og:image:height': '630',
              'og:image:type': 'jpeg',
              'og:description': 'Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.',
              'twitter:image:src': 'https://www.hellodesign.com/image/732/b17/0.5,0.5',
              viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
              'twitter:description': 'Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.',
              'og:url': 'https://www.hellodesign.com/index.html'
            }
          ],
          cse_image: [
            {
              src: 'https://www.hellodesign.com/image/732/b17/0.5,0.5'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Nest Hello Video Doorbell - Know Who\'s Knocking - Google Store',
        htmlTitle: 'Nest <b>Hello</b> Video Doorbell - Know Who&#39;s Knocking - Google Store',
        link: 'https://store.google.com/us/product/nest_hello_doorbell',
        displayLink: 'store.google.com',
        snippet: 'Nest Hello lets you know who\'s there, so you never miss a thing. It replaces your \nexisting wired doorbell and delivers HD video and bright, crisp images, even at ...',
        htmlSnippet: 'Nest <b>Hello</b> lets you know who&#39;s there, so you never miss a thing. It replaces your <br>\nexisting wired doorbell and delivers HD video and bright, crisp images, even at&nbsp;...',
        formattedUrl: 'https://store.google.com/us/product/nest_hello_doorbell',
        htmlFormattedUrl: 'https://store.google.com/us/product/nest_<b>hello</b>_doorbell',
        pagemap: {
          offer: [
            {
              pricecurrency: 'USD',
              price: '229',
              availability: 'http://schema.org/InStock',
              sku: '_nest_hello_doorbell'
            }
          ],
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1NnFJEylpnzkTZDRTfusbcHfq6UjXiZGuxzmF9cCR1LZc7fuJpiwVxt8',
              width: '225',
              height: '225'
            }
          ],
          product: [
            {
              name: 'Nest Hello',
              description: 'Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.',
              brand: 'Google'
            }
          ],
          metatags: [
            {
              'og:image': 'https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw',
              'og:type': 'website',
              'twitter:card': 'summary',
              'twitter:title': 'Nest Hello',
              'og:site_name': 'Google Store',
              'msvalidate.01': '5B96ACB2BFE6A95B22143473B8763663',
              'og:title': 'Nest Hello',
              'msapplication-tileimage': 'https://www.gstatic.com/images/branding/product/1x/googleg_96dp.png',
              'og:description': 'Video Doorbell',
              'twitter:image': 'https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw',
              'twitter:image:alt': 'Nest Hello Video Doorbell',
              'twitter:site': '“@madebygoogle”',
              viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
              'twitter:description': 'Video Doorbell',
              'og:url': 'https://store.google.com/product/nest_hello_doorbell'
            }
          ],
          cse_image: [
            {
              src: 'https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw'
            }
          ],
          hproduct: [
            {
              fn: 'Nest Hello',
              description: 'Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.',
              currency: 'USD',
              currency_iso4217: '840'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery',
        htmlTitle: 'HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery',
        link: 'https://www.hellofresh.com/',
        displayLink: 'www.hellofresh.com',
        snippet: 'America\'s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the \nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!',
        htmlSnippet: 'America&#39;s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the <br>\nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!',
        cacheId: 'Q2DT63kc83YJ',
        formattedUrl: 'https://www.hellofresh.com/',
        htmlFormattedUrl: 'https://www.<b>hello</b>fresh.com/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUxV5GVE_b8Zs-_via3mf53nHhflF_SxlVyTAx5AZPL81C8rlyQZYmyA',
              width: '200',
              height: '200'
            }
          ],
          question: [
            {
              name: 'How does HelloFresh’s meal kit delivery service work?'
            },
            {
              name: 'Why choose HelloFresh for your meal kit service?'
            },
            {
              name: 'Which food meal plans & recipes does HelloFresh offer?'
            },
            {
              name: 'How much does HelloFresh cost?'
            },
            {
              name: 'How many times a week does HelloFresh deliver?'
            },
            {
              name: 'Does HelloFresh support a healthy lifestyle?'
            },
            {
              name: 'Does HelloFresh give nutrition & calorie information?'
            },
            {
              name: 'Can I skip a week of delivery?'
            },
            {
              name: 'How does HelloFresh’s meal kit delivery service work?'
            },
            {
              name: 'Why choose HelloFresh for your meal kit service?'
            },
            {
              name: 'Which food meal plans & recipes does HelloFresh offer?'
            },
            {
              name: 'How much does HelloFresh cost?'
            },
            {
              name: 'How many times a week does HelloFresh deliver?'
            },
            {
              name: 'Does HelloFresh support a healthy lifestyle?'
            },
            {
              name: 'Does HelloFresh give nutrition & calorie information?'
            },
            {
              name: 'Can I skip a week of delivery?'
            },
            {
              name: 'How does HelloFresh’s meal kit delivery service work?'
            },
            {
              name: 'Why choose HelloFresh for your meal kit service?'
            },
            {
              name: 'Which food meal plans & recipes does HelloFresh offer?'
            },
            {
              name: 'How much does HelloFresh cost?'
            },
            {
              name: 'How many times a week does HelloFresh deliver?'
            },
            {
              name: 'Does HelloFresh support a healthy lifestyle?'
            },
            {
              name: 'Does HelloFresh give nutrition & calorie information?'
            },
            {
              name: 'Can I skip a week of delivery?'
            }
          ],
          answer: [
            {
              text: 'Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...'
            },
            {
              text: 'HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...'
            },
            {
              text: 'HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...'
            },
            {
              text: 'The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...'
            },
            {
              text: 'Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.'
            },
            {
              text: 'Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.'
            },
            {
              text: 'Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...'
            },
            {
              text: 'Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...'
            },
            {
              text: 'Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...'
            },
            {
              text: 'HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...'
            },
            {
              text: 'HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...'
            },
            {
              text: 'The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...'
            },
            {
              text: 'Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.'
            },
            {
              text: 'Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.'
            },
            {
              text: 'Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...'
            },
            {
              text: 'Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...'
            },
            {
              text: 'Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...'
            },
            {
              text: 'HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...'
            },
            {
              text: 'HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...'
            },
            {
              text: 'The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...'
            },
            {
              text: 'Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.'
            },
            {
              text: 'Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.'
            },
            {
              text: 'Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...'
            },
            {
              text: 'Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...'
            }
          ],
          metatags: [
            {
              'p:domain_verify': '5aea915e1ac0b408298cfb02478eb3b2',
              country: 'us',
              'og:image': 'https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png',
              'theme-color': '#FFF',
              'apple-mobile-web-app-title': 'Home',
              'og:title': '#1 Meal Kit Delivery Service | Fresh Meal Delivery | HelloFresh',
              'og:description': 'America’s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the most recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!',
              version: '6.1181.0',
              'twitter:site': '@hellofresh',
              'site:name': 'HelloFresh',
              viewport: 'width=device-width, initial-scale=1.0',
              'og:locale': 'en-US',
              'og:url': 'https://www.hellofresh.com/'
            }
          ],
          cse_image: [
            {
              src: 'https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Hello – The Best Elementor & WordPress Theme | Elementor.com',
        htmlTitle: '<b>Hello</b> – The Best Elementor &amp; WordPress Theme | Elementor.com',
        link: 'https://elementor.com/hello-theme/',
        displayLink: 'elementor.com',
        snippet: 'Learn about Hello WordPress theme: the best Elementor theme. Fast, elegant \nand customizable. Get Hello- the fastest WordPress theme ever created.',
        htmlSnippet: 'Learn about <b>Hello</b> WordPress theme: the best Elementor theme. Fast, elegant <br>\nand customizable. Get <b>Hello</b>- the fastest WordPress theme ever created.',
        cacheId: 'kfKsMZ4-7PcJ',
        formattedUrl: 'https://elementor.com/hello-theme/',
        htmlFormattedUrl: 'https://elementor.com/<b>hello</b>-theme/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYzocAKR-jAONkcohvDtZ3fyzCBB9RlVT7nq63XMNpdS8E4M8osOpfnt3s',
              width: '259',
              height: '194'
            }
          ],
          metatags: [
            {
              'og:image': 'https://elementor.com/wp-content/uploads/2019/06/screenshot.png',
              'og:type': 'article',
              'og:image:width': '1200',
              'twitter:card': 'summary_large_image',
              'og:site_name': 'Elementor',
              'og:title': 'Hello – The Best Elementor & WordPress Theme | Elementor.com',
              'og:image:height': '900',
              bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
              'msapplication-tileimage': 'https://elementor.com/wp-content/uploads/2020/06/cropped-elementor_logo_gradient_circle-270x270.png',
              'og:description': 'Learn about Hello WordPress theme: the best Elementor theme. Fast, elegant and customizable. Get Hello- the fastest WordPress theme ever created.',
              'fb:app_id': '340177129773995',
              'article:modified_time': '2020-09-02T05:33:49+00:00',
              viewport: 'width=device-width, initial-scale=1',
              'og:locale': 'en_US',
              'og:url': 'https://elementor.com/hello-theme/'
            }
          ],
          cse_image: [
            {
              src: 'https://elementor.com/wp-content/uploads/2019/06/screenshot.png'
            }
          ]
        }
      },
      {
        kind: 'customsearch#result',
        title: 'Hello! - Super Simple Songs',
        htmlTitle: '<b>Hello</b>! - Super Simple Songs',
        link: 'https://supersimple.com/song/hello/',
        displayLink: 'supersimple.com',
        snippet: 'Start off your lesson with “Hello!”, a fun and energetic song to talk about how you \nfeel as you greet each other. Flashcards (1). Hello! Flashcards ...',
        htmlSnippet: 'Start off your lesson with “<b>Hello</b>!”, a fun and energetic song to talk about how you <br>\nfeel as you greet each other. Flashcards (1). <b>Hello</b>! Flashcards&nbsp;...',
        cacheId: '10rqg5qx9kEJ',
        formattedUrl: 'https://supersimple.com/song/hello/',
        htmlFormattedUrl: 'https://supersimple.com/song/<b>hello</b>/',
        pagemap: {
          cse_thumbnail: [
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJLr4kiVVG6bwXSqwmTBm5UG8bS6_GWBCwOSnkBSbn7lfV30tKuekDHn_',
              width: '271',
              height: '186'
            }
          ],
          metatags: [
            {
              'og:image': 'https://supersimple.com/wp-content/uploads/hello-2-1080-740.jpg',
              'apple-itunes-app': 'app-id=1458640095',
              'og:type': 'article',
              'og:image:width': '1080',
              'twitter:card': 'summary_large_image',
              'og:site_name': 'Super Simple',
              handheldfriendly: 'True',
              'og:title': 'Hello! - Super Simple',
              'og:image:height': '740',
              'og:description': 'Start off your lesson with “Hello!”, a fun and energetic song to talk about how you feel as you greet each other.',
              'fb:app_id': '136744340266048',
              'article:modified_time': '2019-10-09T06:17:32+00:00',
              viewport: 'width=device-width, initial-scale=1, user-scalable=0',
              mobileoptimized: '320',
              'og:locale': 'en_US',
              'og:url': 'https://supersimple.com/song/hello/'
            }
          ],
          cse_image: [
            {
              src: 'https://supersimple.com/wp-content/uploads/hello-2-1080-740.jpg'
            }
          ]
        }
      }
    ]
  }


export default response;