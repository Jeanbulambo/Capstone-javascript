export default async function getCountries() {
  const url = 'https://restcountries.com/v2/all';
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}