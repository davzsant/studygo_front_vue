import type { RouteLocationNormalized,NavigationGuardNext } from "vue-router";
import router from ".";

export default function checkAuth(
    to:RouteLocationNormalized,
    from:RouteLocationNormalized,
    next:NavigationGuardNext
)
{
    const isLoggedIn = localStorage.getItem('jwtToken')

    if(to.matched.some(record => record.meta.requiresAuth))
    {
        console.log("Essa rota precisa de autenticacao")
        if(!isLoggedIn)
        {
            return next({name: 'Login'})
        }
    }

    next()
}