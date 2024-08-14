/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiendasService } from './tiendasService.service';

describe('Service: TiendasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiendasService]
    });
  });

  it('should ...', inject([TiendasService], (service: TiendasService) => {
    expect(service).toBeTruthy();
  }));
});
