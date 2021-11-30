import $api from '../request'

const HomeAPI = {
    Menus: 'Meau/GetCurrentUserMeanu'
}

export function GetMenu() {
    return $api.get(HomeAPI.Menus)
}

