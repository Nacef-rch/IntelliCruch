import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { SearchComponent } from './components/search/search.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectNewCardComponent } from './components/project-new-card/project-new-card.component';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './shared/dnd.directive';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardCardResComponent } from './components/dashboard-card-res/dashboard-card-res.component';
import { GraphTableContainerComponent } from './containers/graph-table-container/graph-table-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SideBarComponent,
    HeaderComponent,
    MainComponent,
    AccountSettingsComponent,
    TitleHeaderComponent,
    SearchComponent,
    ProjectCardComponent,
    ProjectNewCardComponent,
    FormContainerComponent,
    UploadFileComponent,
    ProgressComponent,
    DndDirective,
    DashboardContainerComponent,
    DashboardCardComponent,
    DashboardCardResComponent,
    GraphTableContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
