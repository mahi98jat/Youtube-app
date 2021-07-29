async function searchData() {
  let cont = document.getElementById("data_container");
  cont.innerHTML = null;
  let query = document.getElementById("input").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyBd6hyLGx9H95neL9mnfdOKBCprr9TreJM&maxResults=20`
  );
  let data = await res.json();
  console.log(data);

  let { items } = data;
  console.log(items);
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "vid_cont");
    div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    cont.appendChild(div);
  });
}

async function showHomePage() {
  let cont = document.getElementById("data_container");
  cont.innerHTML = null;
  let res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?q=India&viewCount>20000000&key=AIzaSyBd6hyLGx9H95neL9mnfdOKBCprr9TreJM&maxResults=20"
  );

  let data = await res.json();
  console.log(data);
  let { items } = data;
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "vid_cont");
    div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    cont.appendChild(div);
  });
}
showHomePage();
