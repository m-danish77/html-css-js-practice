async function putFakeData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${url}/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    }),
  });

  const data = await res.json();
  console.log(data);
}

putFakeData();
