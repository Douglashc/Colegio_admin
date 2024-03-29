import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/dashboard/project.module').then(m => m.ProjectModule)},
            {path: 'lista-colegio', loadChildren: () => import('app/modules/admin/modulo-colegio/tabla-listar-colegio/tabla-listar-colegio.module').then(m => m.TablaListarColegioModule)},
            {path: 'registrar-colegio', loadChildren: () => import('app/modules/admin/modulo-colegio/form-registrar-colegio/form-registrar-colegio.module').then(m => m.FormRegistrarColegioModule)},
            {path: 'editar-colegio/:id', loadChildren: () => import('app/modules/admin/modulo-colegio/form-actualizar-colegio/form-actualizar-colegio.module').then(m => m.FormActualizarColegioModule)},
            {path: 'lista-tipo-persona', loadChildren: () => import('app/modules/admin/modulo-tipo-persona/tabla-listar-tipo-persona/tabla-listar-tipo-persona.module').then(m => m.TablaListarTipoPersonaModule)},
            {path: 'registrar-tipo-persona', loadChildren: () => import('app/modules/admin/modulo-tipo-persona/form-registrar-tipo-persona/form-registrar-tipo-persona.module').then(m => m.FormRegistrarTipoPersonaModule)},
            {path: 'editar-tipo-persona/:id', loadChildren: () => import('app/modules/admin/modulo-tipo-persona/form-actualizar-tipo-persona/form-actualizar-tipo-persona.module').then(m => m.FormActualizarTipoPersonaModule)},
            {path: 'lista-curso/:id', loadChildren: () =>import('app/modules/admin/modulo-curso/tabla-listar-curso/tabla-listar-curso.module').then(m => m.TablaListarCursoModule)},
            {path: 'registrar-curso/:id', loadChildren: () =>import('app/modules/admin/modulo-curso/form-registrar-curso/form-registrar-curso.module').then(m => m.FormRegistrarCursoModule)},
            {path: 'editar-curso/:idcolegio/:id', loadChildren: () => import('app/modules/admin/modulo-curso/form-actualizar-curso/form-actualizar-curso.module').then(m => m.FormActualizarCursoModule)},
            {path: 'lista-persona/:id', loadChildren: () => import('app/modules/admin/modulo-persona/tabla-listar-persona/tabla-listar-persona.module').then(m => m.TablaListarPersonaModule)},
            {path: 'registrar-persona/:id', loadChildren: () => import('app/modules/admin/modulo-persona/form-registrar-persona/form-registrar-persona.module').then(m => m.FormRegistrarPersonaModule)},
            {path: 'editar-persona/:idcurso/:id', loadChildren: () => import('app/modules/admin/modulo-persona/form-actualizar-persona/form-actualizar-persona.module').then(m => m.FormActualizarPersonaModule)}
            
        ]
    }
];
