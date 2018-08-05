import SuperHeros from '../api/superheros';

import constants from '../constants/constants';

export const updateSuperHerosList = (data) => ({
  type: constants.LOAD_SUPERHEROS,
  payload: data,
});

export const fetchOrganizations = () => async (dispatch) => {
  try {
    const response = await SuperHeros.getSuperHeros();
    dispatch(updateSuperHerosList(response));
    console.log(response)
  } catch (ex) {
    console.log("Error with the service")
  }
};