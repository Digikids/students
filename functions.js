export function openSelector(sidebar, closeBtn, sidebarValue, closeBtnValue) {
  sidebar.style.right = sidebarValue;
  closeBtn.style.right = closeBtnValue;
}

export async function getPosts(ref) {
  const rawData = await fetch(
    `https://digikids.cdn.prismic.io/api/v2/documents/search?ref=${ref}`
  );
  const data = await rawData.json();
  return data.results;
}

export async function getApi() {
  const rawApi = await fetch("https://digikids.cdn.prismic.io/api/v2/");
  const api = await rawApi.json();
  var masterRefObj = api.refs.find((refs) => refs.id === "master");
  var masterRef = masterRefObj.ref;
  return masterRef;
}

export function makeCards(cards, numberOfCards) {
  for (let i = 0; i < numberOfCards; i++) {
    var clone = cards[0].cloneNode(true);
    cards[0].insertAdjacentElement("afterend", clone);
  }
}
