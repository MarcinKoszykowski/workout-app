const user = {
  register: '/user/register',
  login: '/user/login',
  id: '/user/get/id',
  editPassword: '/user/edit/password',
};

const details = {
  add: '/details/add',
  userId: '/details/get/userId',
};

const training = {
  add: '/training/add',
  getByUserId: '/training/get/userId',
  delete: '/training/delete',
};

export { user, details, training };
