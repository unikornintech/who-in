import axios from 'axios';
import Bluebird from 'bluebird';

const getLoginUrl = () => ``;
const getEventsUrl = () => `http://localhost:3000/events`;

export const login = (username, password) => {
  return Bluebird.resolve(
    axios.post(getLoginUrl(), { username, password }).then(({ data }) => data)
  );
};

export const getEvents = () => {
  return Bluebird.resolve(axios.get(getEventsUrl()));
};
