import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitsiExternoComponent } from './jitsi-externo.component';

describe('JitsiExternoComponent', () => {
  let component: JitsiExternoComponent;
  let fixture: ComponentFixture<JitsiExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JitsiExternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JitsiExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
