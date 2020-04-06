const main = '/';
const login = '/login';
const sport = '/sport/:name';
const calendar = '/calendar';

const setSportRoute = (name) => `/sport/${name}`;

export { main, login, sport, calendar, setSportRoute };
