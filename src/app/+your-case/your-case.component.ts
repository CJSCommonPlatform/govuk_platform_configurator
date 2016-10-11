import {applicationOriginalUrl, applicationParams} from '../../ng-app.config';
import {Component, Inject, Optional, OnInit} from '@angular/core';
import {State} from '../components/common/state.service';

@Component({
  selector: 'your-case',
  templateUrl: 'your-case.template.html',
  providers: [State]
})
export class YourCaseComponent implements OnInit {

  private caseUniqueReferenceNumber: string;
  private casePostcode: string;
  private submitted: boolean = false;

  constructor(state: State, params, applicationUrl);
  constructor(private state: State,
    @Optional() @Inject(applicationParams) params?,
    @Optional() @Inject(applicationOriginalUrl) applicationUrl?) {


    console.log('In YourComponent', params);
    console.log('In YourComponent', applicationUrl);

    if (params && params.casePostcode) {
      this.caseUniqueReferenceNumber = params.caseUniqueReferenceNumber;
      this.casePostcode = params.casePostcode;
    }
  };

  ngOnInit(): void {
    if (this.caseUniqueReferenceNumber && this.casePostcode) {
      this.onYourCaseSubmitted();
    }
  }

  onYourCaseSubmitted() {
    this.submitted = true;
    console.log('case reference number', this.caseUniqueReferenceNumber);
    console.log('case postcode', this.casePostcode);
  }
}
