
import { SharedService } from './shared.service';

// describe('SharedService', () => {
//   let service: SharedService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(SharedService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


describe('SharedService', () => {
  it('should add two numbers correctly', () => {
    const service = new SharedService();
    const result = service.addMethod(10, 20);
    expect(result).toBe(30);
  });
});