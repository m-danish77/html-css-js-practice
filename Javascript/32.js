// Create a function:
// loginUser(username, password)
// It should return a Promise.
// If username === "admin" and password === "1234" → resolve("Login successful")
// Otherwise → reject("Invalid username or password")
// Then consume it with async await syntax

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login successful");
    } else {
      reject(new Error("Invalid username or password"));
    }
  });
}

async function signIn() {
  try {
    const response = await loginUser("admin", "1234");
    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
}

signIn();
