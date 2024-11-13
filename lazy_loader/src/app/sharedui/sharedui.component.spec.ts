import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareduiComponent } from './sharedui.component';

describe('ShareduiComponent', () => {
  let component: ShareduiComponent;
  let fixture: ComponentFixture<ShareduiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareduiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
