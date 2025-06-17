import { TestBed } from '@angular/core/testing';

import { BlogDetailsServices } from './blog-details.services';

describe('BlogDetailsServices', () => {
  let service: BlogDetailsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDetailsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
