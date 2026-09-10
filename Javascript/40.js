async function putFakeData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${url}/1`, {
    method: "DELETE",
  });

  console.log("Status:", res.status);
}

putFakeData();
