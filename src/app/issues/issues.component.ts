import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue.modal';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  Issue = new Issue('', '', '', '');
  @Output() emitIssue = new EventEmitter<Issue>();

  issueDescription: string;
  issueSeverity: string;
  issueStatus: string;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];
  issues!: Issue[];

  constructor(private _issuesService: IssuesService) {
    this.issueDescription = '';
    this.issueSeverity = '';
    this.issueStatus = '';
  }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this._issuesService.getIssues().subscribe(
      (issues: any) => (this.issues = issues),
      (err) => console.log(err)
    );
  }

  onFormSubmit(): void {
    const issue = new Issue(
      '',
      this.issueDescription,
      this.issueSeverity,
      this.issueStatus
    );
    this._issuesService.addIssue(issue).subscribe(
      (data: any) => {
        this.getIssues();
        this.emitIssue.emit(data);
      },
      (err) => console.log(err)
    );
  }
}
