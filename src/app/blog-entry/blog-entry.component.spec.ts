import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryComponent } from './blog-entry.component';

describe('BlogEntryComponent', () => {
  let component: BlogEntryComponent;
  let fixture: ComponentFixture<BlogEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogEntryComponent]
    });
    fixture = TestBed.createComponent(BlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
