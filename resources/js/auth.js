/** Login Configuration */
import bearer from '@websanova/vue-auth/drivers/auth/bearer';
import axios from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'laravel-vue-spa',
    tokenStorage: ['localStorage'],
    rolesVar: 'is_admin',
    // register new user
    registerData: {
        url: 'auth/register',
        method: 'POST',
        redirect: '/login'
    },
    // login user
    loginData: {
        url: 'auth/login',
        method: 'POST',
        redirect: '',
        fetchUser: true
    },
    // logout user
    logoutData: {
        url: 'auth/logout',
        method: 'POST',
        redirect: '/',
        makeRequest: true
    },
    // get the user
    fetchData: {
        url: 'auth/user',
        method: 'GET',
        enable: true
    },
    // refresh the jwt token
    refreshData: {
        url: 'auth/refresh',
        method: 'GET',
        enabled: true,
        interval: 30
    }
}
export default config
