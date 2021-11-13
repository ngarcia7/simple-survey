import { TestBed } from '@angular/core/testing';

import { SurveyControlService } from './survey-control.service';

describe('SurveyControlService', () => {
  let service: SurveyControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
