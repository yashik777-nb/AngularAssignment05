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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddIssueComponent } from './issues/add-issue/add-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueAddedComponent,
    AboutComponent,
    IssueDetailComponent,
    PageNotFoundComponent,
    AddIssueComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
