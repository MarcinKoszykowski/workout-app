const login = {
  button: {
    login: 'log in',
    register: 'sign up',
  },
  form: {
    email: {
      name: 'email',
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      errorText: 'wrong email format',
    },
    password: {
      name: 'password',
      type: 'password',
    },
  },
  infoText: {
    incorrect: 'The email or password is incorrect.',
    error: 'Server connection ERROR',
  },
};

const register = {
  button: {
    login: 'back to login',
    register: 'register',
  },
  form: {
    email: {
      name: 'email',
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      errorText: 'wrong email format',
    },
    password: {
      name: 'password',
      type: 'password',
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,40}$',
      errorText: 'upper case, lower case, number, symbol and min 8 chars',
    },
    confirm: {
      name: 'confirm',
      type: 'password',
    },
  },
  infoText: {
    register: 'Success! User has been registered.',
    confirmation: 'The password and confirmation password do not match.',
    error: 'Server connection ERROR',
    email: 'Email is alredy taken.',
  },
};

const user = {
  button: {
    save: 'save',
  },
  form: {
    age: {
      name: 'age',
      pattern: '[1-9]|[1-9][0-9]|1[0-2][0-9]|130',
      errorText: 'min: 1, max: 130',
    },
    height: {
      name: 'height',
      pattern: '[1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|250',
      errorText: 'min: 1, max: 250',
    },
    weight: {
      name: 'weight',
      pattern: '[1-9]|[1-9][0-9]|[1-2][0-9][0-9]|300',
      errorText: 'min: 1, max: 300',
    },
  },
};

const app = {
  name: 'workout app',
  404: {
    text: `404`,
    sub: 'page not found',
  },
  error: {
    server: 'server connection error',
    delete: 'error deleting item',
    addTraingin: 'error adding item',
    addDetails: 'error adding details',
  },
};

export { login, register, user, app };
