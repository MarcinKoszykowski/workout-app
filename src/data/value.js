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
    register: 'User has been registered',
    confirmation: 'The password and confirmation password do not match',
    error: 'Server connection ERROR',
    email: 'Email is alredy taken',
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

export { login, register, user };
