import { faSnowflake, faSun, faMoon, faCloudRain, faCloud, faWind, faCloudSun, faCloudMoon,
  faSmog } from "@fortawesome/free-solid-svg-icons";

export const getUserPosition = () => {
  return new Promise((resolve, reject)=> {
    navigator.geolocation.getCurrentPosition(pos => {
      const lon = pos.coords.longitude.toFixed(5);
      const lat = pos.coords.latitude.toFixed(5);
      resolve({ lon, lat });
    },
      (error) => {
        reject(error);
      })
  })
};

export const getIcon = (name) => {
  switch (name) {
    case 'snow':
      return faSnowflake;
    case 'rain':
      return faCloudRain;
    case 'fog':
      return faSmog;
    case 'wind':
      return faWind;
    case 'cloudy':
      return faCloud;
    case 'partly-cloudy-day':
      return faCloudSun;
    case 'partly-cloudy-night':
      return faCloudMoon;
    case 'clear-day':
      return faSun;
    case 'clear-night':
      return faMoon;
    default:
      return faCloud;
  }
};
