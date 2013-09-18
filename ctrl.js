// hosted at: /ctrl.js
this.version = 1;

this.addEventListener("install", function(event)
{
  // Tell the system that this service worker can handle fetch events.
  event.services = ["fetch"];
});

this.addEventListener("fetch", function(event)
{
  var url = e.request.url;
  console.log(url);

  var query = url.query;  // [ToDo] Decode it
  console.log(query);

  if(query.toString())
  {
//    webp2p.search(query, function(result){
	  var result = "Profit!";

    event.respondWith(new OriginResponse(
    {
      statusCode: 200,
      body: result
    }));

//    });
  }
});