import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import axios from 'axios';

const key = '3d13d25c0c34fa3c3db183ad6b8cdff4';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;
const initialState = { favoritesCity: [] }


function getWeatherHome(city) {
    return axios.get(`${url}&q=${city}`)
}

function favoriteCity(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_FAVORITE':
        getWeatherHome(action.value).then(resp => {
            AsyncStorage.getItem('cities').then(data => {
                let tab = [];
                if (data !== null) {
                    tab = JSON.parse(data);
                }
                tab.push(action.value);
                AsyncStorage.setItem('cities', JSON.stringify(tab))
                    .then(() => {
                    })
                    .catch((err) => {
                        alert(err);
                    });
            });
        }).catch(err => {
            alert(`Pas de données pour la ville ${action.value}`);
        });
                nextState = {
                    ...state,
                    value: action.value
                }
                return nextState || state

                case 'DEFAULT_FAVORITE':
                    
                        getWeatherHome(action.value).then(resp => {
                            AsyncStorage.getItem('cities').then(data => {
                                let tab = [];
                                if (data !== null) {
                                    tab = JSON.parse(data);
                                }
                                tab.push(action.value);
                                AsyncStorage.setItem('cities', JSON.stringify(tab))
                                    .then(() => {
                                    })
                                    .catch((err) => {
                                        alert(err);
                                    });
                            });
                        }).catch(err => {
                            alert(`Pas de données pour la ville ${action.value}`);
                        });
            nextState = {
                ...state,
                favoritesCity: [...state.favoritesCity, action.value]
              }

            return nextState || state
    default:
      return state
    }
  }
  
  export default favoriteCity