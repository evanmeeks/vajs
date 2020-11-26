var winObservers2 = () => {
  document.getElementsByTagName("html").style = "overflow:scroll; margin: 20px";
  document.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.href.split("(")[1].split(",")[0];
      console.log("click", id);
      var img = document.createElement("img");
      img.src = `https://snap.mfcimg.com/snapimg/955/640x480/mfc_1${id}?no-cache=`;
      var div = (document.createElement(
        "div"
      ).innerHTML = `<div id="${id}"><span onClick="document.getElementById(${id}).remove()">x</span><img src="${img.src}" alt='as' /></div>`);

      document.body.appendChild(div);
    });
  });
  window.document.getElementsByTagName("html")[0].style =
    "overflow:scroll; height:101vh";
  window.document.getElementsByTagName("body")[0].style =
    "overflow:scroll; height:101vh";
};
winObservers2();
