import { superHerosListRef } from '../firebase';

import constants from '../constants/constants';

export const updateSuperHerosList = (data) => ({
  type: constants.LOAD_SUPERHEROS,
  payload: data,
});

export const updateHero = NewData => async () => {
  superHerosListRef.update(NewData)
}

export const loadHero = (data) => ({
  type: constants.LOAD_HERO,
  payload: data,
});

export const fetchSuperHeros = () => async dispatch => {
  superHerosListRef.on('value', snapshot => {
    const data = snapshot.val();
    var result = Object.keys(data).map(function(key) {
      return data[key];
    });

    dispatch(updateSuperHerosList(result))
  })
}

export const getHero = (id) => async dispatch => {
  superHerosListRef.on('value', snapshot => {
    const data = snapshot.val()[id];

    dispatch(loadHero(data))
  })
}