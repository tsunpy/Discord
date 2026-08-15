// easiest way to grab your token is just to open Network Tab with DevTools, do literally anything, check reqheaders and grab 'Authorization' key
// this completely purges all your favorite gifs, if you like some, back them up
const token = "xxxx";

// empty proto (f2, length-delimited, 0 bytes) 
const emptyFavGifs = new Uint8Array([0x12, 0x00]);
const settingsB64 = btoa(String.fromCharCode(...emptyFavGifs));

fetch("https://discord.com/api/v9/users/@me/settings-proto/2", {
  method: "PATCH",
  headers: {
    "Authorization": token,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ settings: settingsB64 })
})
  .then(r => r.json())
  .then(d => console.log("Favorited GIFs cleared:", d))
  .catch(console.error);
