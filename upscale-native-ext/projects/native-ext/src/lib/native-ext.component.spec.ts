import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeExtComponent } from './native-ext.component';

describe('NativeExtComponent', () => {
  let component: NativeExtComponent;
  let fixture: ComponentFixture<NativeExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeExtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
