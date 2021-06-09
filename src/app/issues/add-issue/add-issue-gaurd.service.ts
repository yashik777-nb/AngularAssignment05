import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AddIssueComponent } from './add-issue.component';

export class AddIssueDeactivateGaurd
  implements CanDeactivate<AddIssueComponent>
{
  canDeactivate(
    component: AddIssueComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component.addIssueForm.dirty);
    console.log(component.addIssueForm.submitted);
    if (component.addIssueForm.dirty && !component.addIssueForm.submitted)
      return confirm('Are you sure you want to leave?');
    else return true;
    // return false;
  }
}
