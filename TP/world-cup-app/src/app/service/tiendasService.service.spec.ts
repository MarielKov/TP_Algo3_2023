/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiguritasServiceService } from './figuritasService.service';

describe('Service: FiguritasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiguritasServiceService]
    });
  });

  it('should ...', inject([FiguritasServiceService], (service: FiguritasServiceService) => {
    expect(service).toBeTruthy();
  }));
});