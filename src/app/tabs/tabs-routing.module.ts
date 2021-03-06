import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'saved',
        loadChildren: () => import('../saved/saved.module').then(m => m.SavedPageModule)
      },
      {
        path: 'journals',
        loadChildren: () => import('../journals/journals.module').then(m => m.JournalsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profilepage/profilepage.module').then(m => m.ProfilepagePageModule)
      },
      {
        path: 'mdinamaltapage',
        loadChildren: () => import('../mdinamaltapage/mdinamaltapage.module').then(m => m.MdinamaltapagePageModule)
      },
      {
        path: 'journaldiary',
        loadChildren: () => import('../journaldiary/journaldiary.module').then(m => m.JournaldiaryPageModule)
      },
      {
        path: 'saved',
        loadChildren: () => import('../saved/saved.module').then(m => m.SavedPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/startupslides',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
