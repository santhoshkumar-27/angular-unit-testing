import { HttpClient, HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing"

const testUrl = '/data';
interface Data {
    name: string;
}
describe('testing client module', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                // HttpClientModule,
                HttpClientTestingModule,
            ]
        })
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    })
    it('should call the testurl with get request', (done) => {
        let testData: Data = {
            name: 'Santhoshkumar'
        }
        httpClient.get<Data>(testUrl).subscribe((res: any) => {
            expect(res).toEqual(testData);
            done();
        });
        const request = httpTestingController.expectOne(testUrl);
        request.flush(testData)
        expect(request.request.method).toBe('GET');
    });

    it('should test multiple requests', () => {
        let testData: Data[] = [{
            name: 'Santhoshkumar'
        }, {
            name: 'kumar'
        }];
        httpClient.get<Data[]>(testUrl).subscribe(
            (res: any) => {
                expect(res.length).toBe(0);
                // done();
            }
        );
        httpClient.get<Data[]>(testUrl).subscribe(
            (res: any) => {
                expect(res.length).toBe(1);
                // done();
            }
        );
        httpClient.get<Data[]>(testUrl).subscribe(
            (res: any) => {
                expect(res.length).toBe(2);
                // done();
            }
        );
        const requests = httpTestingController.match(testUrl);
        expect(requests.length).toBe(3);
        requests[0].flush([]);
        requests[1].flush([testData[0]]);
        requests[2].flush(testData);
    })
})