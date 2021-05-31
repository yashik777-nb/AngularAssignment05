import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueAddedComponent } from './issues/issue-added/issue-added.component';

import { IssuesService } from './issues/issues.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:issueDesc', component: IssueDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueAddedComponent,
    AboutComponent,
    IssueDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
