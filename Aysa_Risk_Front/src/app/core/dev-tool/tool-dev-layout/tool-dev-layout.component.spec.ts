import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDevLayoutComponent } from './tool-dev-layout.component';

describe('ToolDevLayoutComponent', () => {
  let component: ToolDevLayoutComponent;
  let fixture: ComponentFixture<ToolDevLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolDevLayoutComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDevLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
