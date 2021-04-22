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
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'journals',
        loadChildren: () => import('../journaldiary/journaldiary.module').then(m => m.JournaldiaryPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'createaccount',
        loadChildren: () => import('../createaccount/createaccount.module').then(m => m.CreateaccountPageModule)
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
