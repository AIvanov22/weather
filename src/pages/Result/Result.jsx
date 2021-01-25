import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { CurrentDayCard, DayCard, Progress } from '../../components';
import paths from '../../router/paths';
import { getWeather } from '../../store/weather/actions';
import { ResultContainer, DaysCards, ActionsContainer, EmptyData } from './styled';
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Result = () => {
  const dispatch = useDispatch();
  const pageLocation = useLocation();
  const history = useHistory();
  const { currentWeather: weather, loading }= useSelector(({ weather }) => weather, shallowEqual);

  const { address, values } = useMemo(() => {
    return {
      address: weather && weather.address ? weather.address : '',
      values: weather && weather.values ? weather.values : [],
    }
  }, [weather]);

  const getWeatherData = useCallback((data) =>{
    dispatch(getWeather(data));
  },[dispatch]);

  const redirectToHomePage = () => {
    history.push(paths.root);
  };

  useEffect(()=> {
    const params = new URLSearchParams(pageLocation.search);
    const location = params.get('location');
    const lon = params.get('lon');
    const lat = params.get('lat');
    const data = lon && lat ? `${lat},${lon}` : location;
    if (data && data.length > 0) {
      getWeatherData(data);
    }

  }, [getWeatherData, pageLocation.search])


  const { currentDayWeather, daysWeather } = useMemo(() => {
    const notEmpty = values && values.length > 0;
    return {
      currentDayWeather: notEmpty ? values[0] : [],
      daysWeather: notEmpty ? values.slice(1) : [],
    }
  }, [values]);

  return (
    <ResultContainer>
      {
        loading ? (
          <Progress />
        ) : (
          <>
            <ActionsContainer>
              <IconButton aria-label='Home' onClick={redirectToHomePage}>
                <FontAwesomeIcon icon={faHome} color='white'/>
              </IconButton>
            </ActionsContainer>
            {
              currentDayWeather && address ?
                (
                  <CurrentDayCard address={address} {...currentDayWeather} />
                ) : (
                  <EmptyData>No data!</EmptyData>
                )
            }
            <DaysCards>
              {
                daysWeather.map((data) => {
                  return (<DayCard key={Number(data.datetime)} {...data} />);
                })
              }
            </DaysCards>
          </>
        )
      }
    </ResultContainer>
  );
};
