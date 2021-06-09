import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddIssueComponent } from './issues/add-issue/add-issue.component';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component';
import { IssuesComponent } from './issues/issues.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: IssuesComponent, pathMatch: 'full' },
  {
    path: 'issues',
    component: IssuesComponent,
  },
  { path: 'issues/:issueDescription', component: IssueDetailComponent },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
