// helper method to fetch and resolve data from server API
async function fetchServerData(): Promise<number> {
  const res = await fetch("https://api.example.com/v");
  const data = await res.json();
  return data;
}

async function getVersion() {
  const version = await fetchServerData();//now type of version becomes number as we use Promise with number generic to set type of resolved value
  return version;
}
