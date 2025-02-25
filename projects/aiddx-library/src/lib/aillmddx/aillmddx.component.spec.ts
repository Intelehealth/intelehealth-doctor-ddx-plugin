import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AillmddxComponent } from './aillmddx.component';


describe('AillmddxComponent', () => {
  let component: AillmddxComponent;
  let fixture: ComponentFixture<AillmddxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AillmddxComponent]
    });
    fixture = TestBed.createComponent(AillmddxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
