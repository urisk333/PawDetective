const BASE_URL = "http://localhost:3005";

async function getPaws() {
  try {
    const allPaws = await fetch(`${BASE_URL}/paws`);
    return await allPaws.json();
  } catch (error) {
    console.log(error);
  }
}

async function postPaws(body) {
  try {
    const newPaws = await fetch(`${BASE_URL}/paws`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await newPaws.json();
  } catch (error) {
    console.log(error);
  }
}

const ApiService = {
  getPaws,
  postPaws,
};
export default ApiService;
