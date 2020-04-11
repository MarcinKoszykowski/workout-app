const login = {
  button: {
    login: 'log in',
    register: 'sign up',
  },
  form: {
    email: {
      name: 'email',
      type: 'email',
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
      type: 'email',
    },
    password: {
      name: 'password',
      type: 'password',
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,40}$',
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
  errorText: {
    password: 'upper case, lower case, number, symbol and min 8 chars.',
  },
};

const user = {
  button: {
    save: 'save',
  },
  form: {
    age: {
      name: 'age',
      max: 130,
    },
    height: {
      name: 'height',
      max: 250,
    },
    weight: {
      name: 'weight',
      max: 300,
    },
  },
};

const app = {
  name: 'workout app',
  404: {
    text: `404`,
    sub: 'page not found',
  },
};

export { login, register, user, app };
