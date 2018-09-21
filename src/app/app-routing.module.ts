import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/common/container/container.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'tvSeries',
        loadChildren: './tv-series/tv-series.module#TvSeriesModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'user',
        loadChildren: './modules/user.module#UserModule'// './user/user.module#UserModule'
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
