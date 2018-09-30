import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { AdminContainerComponent } from '../components/admin/admin-container/admin-container.component';
import { AdminSidebarComponent } from '../components/admin/admin-container/admin-sidebar/admin-sidebar.component';
import { TvSeriesComponent } from '../components/admin/tv-series/tv-series.component';
import { UsersComponent } from '../components/admin/users/users.component';
import { MessagesComponent } from '../components/admin/messages/messages.component';
import { NotificationsComponent } from '../components/admin/notifications/notifications.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'tvSeries', component: TvSeriesComponent},
      { path: 'users', component: UsersComponent},
      { path: 'messages', component: MessagesComponent},
      { path: 'notifications', component: NotificationsComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    DashboardComponent,
    AdminContainerComponent,
    AdminSidebarComponent,
    TvSeriesComponent,
    UsersComponent,
    MessagesComponent,
    NotificationsComponent,
  ]
})
export class AdminModule { }
