import { TestBed } from '@angular/core/testing';

import { AiddxLibraryService } from './aiddx-library.service';

describe('AiddxLibraryService', () => {
  let service: AiddxLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiddxLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
