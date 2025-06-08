import { TestBed } from '@angular/core/testing';

import { BlogpostServices } from './blogpost.services';

describe('BlogpostServices', () => {
  let service: BlogpostServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogpostServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
