async function postFakeData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Danish",
      age: 24,
    }),
  });

  const data = await res.json();
  console.log(data);
}

postFakeData();
