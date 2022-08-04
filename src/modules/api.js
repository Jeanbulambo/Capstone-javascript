export default async function getCountries() {
    let url = 'https://restcountries.com/v2/all';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};