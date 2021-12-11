import { SendPaw } from './components/Interfaces';

const BASE_URL: string = 'http://localhost:3005';

async function getPaws() {
  try {
    const allPaws = await fetch(`${BASE_URL}/paws`);
    return allPaws.json();
  } catch (error) {
    console.log(error);
  }
}

async function postPaws(body: SendPaw) {
  const {
    email,
    token,
    lostOrFound,
    picture,
    animal,
    description,
    location,
    lat,
    long,
  } = body;

  // What will come back from DB if wrong body is passed (?) catch statement?

  const pet = {
    lostOrFound,
    picture,
    animal,
    description,
    location,
    lat,
    long,
    email,
  };

  try {
    const newPaws = await fetch(`${BASE_URL}/paws`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    });
    return await newPaws.json();
  } catch (error) {
    console.log(error);
  }
}

async function deletePaws(id: string): Promise<void> {
  await fetch(`${BASE_URL}/paws/${id}`, {
    method: 'DELETE',
  });
}

const apiService = {
  getPaws,
  postPaws,
  deletePaws,
};

export default apiService;
