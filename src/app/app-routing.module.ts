import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats/splash',
    pathMatch: 'full'
  },
  {
    path: 'cats/splash',
    loadComponent: () => import('./features/cats-breeds/pages/splash/splash.page').then(m => m.SplashPage)
  },
  { 
    path: 'cats/landing',
    loadComponent: () => import('./features/cats-breeds/pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'cats/detail/:id',
    loadComponent: () => import('./features/cats-breeds/pages/detail/detail.page').then( m => m.DetailPage)
  },
  { path: '**', redirectTo: '' }  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
