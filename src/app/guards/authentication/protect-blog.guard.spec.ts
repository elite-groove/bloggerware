import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectBlogGuard } from './protect-blog.guard';

describe('ProtectBlogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectBlogGuard]
    });
  });

  it('should ...', inject([ProtectBlogGuard], (guard: ProtectBlogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
