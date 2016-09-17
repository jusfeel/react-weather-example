import axios from 'axios';

const API_KEY = '06a7d3ecbff035d98a0aac3c6089fd3f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//http://userpage.chemie.fu-berlin.de/diverse/doc/ISO_3166.html
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},cn`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
