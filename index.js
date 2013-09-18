window.addEventListener('DOMContentLoaded', function()
{
  // set up the controller
  if(navigator.registerServiceWorker)
  {
    var handler_path = "/ctrl.js";

    navigator.registerServiceWorker("/*", handler_path).then(
    function(serviceWorker)
    {
      navigator.registerProtocolHandler("web+P2P", handler_path+"?%s",
                                        "ShareIt! P2P network");

      console.info("Web+P2P protocol registered and installed");
    },
    function(why)
    {
      console.error("Installing the worker failed!:", why);
    });
  }
  else
    console.error("ServiceWorker is not available");
});