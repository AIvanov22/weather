const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast'

const fetchWeatherApi = async (endpoint, options = {}) => {
  try {
    const res = await fetch(baseUrl + endpoint, {
      ...options
    })
    return res.json();
  } catch (err) {
    return Promise.reject(err);
  }
}
export const weatherByCity = async (city) => {
  const requestOptions = 'locationMode=single&iconSet=icons1&unitGroup=metric&aggregateHours=24&combinationMethod=aggregate&shortColumnNames=true&contentType=json&unitGroup=metric&forecastDays=6&includeAstronomy=true'
  return await fetchWeatherApi(
    `?locations=${city}&${requestOptions}&key=${process.env.REACT_APP_WEATHER_API_KEY}`, {
      method: 'GET'
    }
  );
}
