import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUploadImagePage } from './tab-upload-image.page';

describe('TabUploadImagePage', () => {
  let component: TabUploadImagePage;
  let fixture: ComponentFixture<TabUploadImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabUploadImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUploadImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
