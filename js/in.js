document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    // @ts-ignore
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    // @ts-ignore

    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
