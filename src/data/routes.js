const main = '/';
const login = '/login';
const sport = '/sport/:name';
const calendar = '/calendar';
const page404 = '/404';

const setSportRoute = (name) => `/sport/${name}`;

export { main, login, sport, calendar, setSportRoute, page404 };
