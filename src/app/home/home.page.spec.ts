import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { IonicModule } from '@ionic/angular';

>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

<<<<<<< HEAD
  beforeEach(() => {
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

>>>>>>> d23a56fe0694267a1ac22e4928cbab3993523980
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
