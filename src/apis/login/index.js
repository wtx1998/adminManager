import $api from '../request'

const LoginAPI = {
  Login: 'Auth/Login',
  Roles: 'Roles/GetRoleGroupByUserId'
}

export function login(account) {
  return $api.post(LoginAPI.Login, account)
}

export function getRole(id) {
  return $api.get(LoginAPI.Roles, id)
}
