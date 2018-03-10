
console.log('service worker loaded');

const cachePrefix = 'static-';
let currentCache = null;

self.addEventListener('install', event => {
	event.waitUntil(
		new Promise(function(resolve, reject) {
			fetch('resources-manifest.json')
				.then(resp => resp.json())
				.then(respJson => {
					console.log(respJson['TO_PRECACHE']);
					
					let myCache = null;
					currentCache = cachePrefix + respJson['VERSION'];

					if (currentCache in caches.keys()){
						console.log('cache exists');
						console.log('keys: ', caches.keys());
						resolve();
					} else {
						Promise.all(
							respJson['TO_PRECACHE'].map(function(item){
								console.log("cache doesn't exists, downloading");
								caches.open(currentCache)
									.then(cache => {
										myCache = cache;

										return cache.match(item);
									})
									.then(resp => {
										if (resp) {
											return resp;
										}
										return fetch(item);
									})
									.then(resp => {
										const response = resp.clone();
										myCache.put(item, resp);

										return response;
									})
							})
						).then(resolve);
					}
				})
				.then(function(){
					console.log('service worker installed');
				})
				.catch(err => function(err){
					console.log(err);
					reject();
				});
		})
	);
});

self.addEventListener('fetch', function(event) {

	function cacheServeHandler(){
		if (currentCache) {
			caches.open(currentCache)
				.then(cache => {
					//myCache = cache; ?
					//const response = resp.clone();
					console.log('Opened cache');

					event.respondWith(
					    cache.match(event.request).then(function(response) {
					      return response || fetch(event.request);
					    })
					  );
				})
		} else {
			console.log("Cache doesn't exist !");
		}
	}

	event.waitUntil(new Promise(function(resolve, reject) {
		cacheServeHandler();
	}));
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log('cache match found');
      return response || fetch(event.request);
    })
  );
});
