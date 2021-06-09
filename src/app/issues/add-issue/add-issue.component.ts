import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/issue.modal';
import { IssuesService } from '../issues.service';
@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss'],
})
export class AddIssueComponent implements OnInit {
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];
  submitted: boolean = false;
  issueDescriptionCount: number = 0;

  @ViewChild('f') addIssueForm: any = '';

  constructor(private issueService: IssuesService, private route: Router) {}

  ngOnInit(): void {}

  issueDescriptionChanged() {
    this.issueDescriptionCount =
      this.addIssueForm.value.issueDescription.length;
  }

  addNewIssue(): void {
    this.issueService
      .addIssue(
        new Issue(
          '',
          this.addIssueForm.value.issueDescription,
          this.addIssueForm.value.issueSeverity,
          this.addIssueForm.value.status
        )
      )
      .subscribe((data: any) => {
        this.issueService.newIssue.emit(data);
        this.submitted = true;
        this.route.navigate(['']);
      });
  }
}
