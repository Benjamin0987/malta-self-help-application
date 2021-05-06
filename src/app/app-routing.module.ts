import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./createaccount/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'startupslides',
    loadChildren: () => import('./startupslides/startupslides.module').then( m => m.StartupslidesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mdinamaltapage',
    loadChildren: () => import('./mdinamaltapage/mdinamaltapage.module').then( m => m.MdinamaltapagePageModule)
  },
  {
    path: 'journaldiary',
    loadChildren: () => import('./journaldiary/journaldiary.module').then( m => m.JournaldiaryPageModule)
  },
  {
    path: 'journals',
    loadChildren: () => import('./journals/journals.module').then( m => m.JournalsPageModule)
  },
  {
    path: 'profilepage',
    loadChildren: () => import('./profilepage/profilepage.module').then( m => m.ProfilepagePageModule)
  },
  {
    path: 'maltaislandpage',
    loadChildren: () => import('./maltaislandpage/maltaislandpage.module').then( m => m.MaltaislandpagePageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
