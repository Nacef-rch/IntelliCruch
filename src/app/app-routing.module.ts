import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { ProjectsComponent } from './containers/projects/projects.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardContainerComponent },
  
  { path: '',   redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
