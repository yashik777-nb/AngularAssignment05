import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss'],
})
export class AddIssueComponent implements OnInit {
  issueDescription: string;
  issueSeverity: string;
  issueStatus: string;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];

  constructor() {
    this.issueDescription = '';
    this.issueSeverity = '';
    this.issueStatus = '';
  }

  ngOnInit(): void {}
  onFormSubmit(): void {}
}
