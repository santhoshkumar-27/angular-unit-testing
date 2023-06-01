import { TestBed } from "@angular/core/testing"
import { PostService } from "./post.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { post } from "src/app/models/post.model";

describe('postService (httpTestingModule)', () => {
    let postService: PostService;
    let httpTestingController: HttpTestingController;
    const testData : post[] = [
        {
            id: 1,
            body: 'describe test',
            title: 'test'
        },
        {
            id: 2,
            body: 'describe test',
            title: 'test'
        },
        {
            id: 3,
            body: 'describe test',
            title: 'test'
        },
    ] 
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PostService
            ],
            imports: [
                HttpClientTestingModule,
            ]
        })
        postService = TestBed.inject(PostService);
        httpTestingController = TestBed.inject(HttpTestingController)
    })
    describe('getPosts', () => {
        it('should return the array of object when getPost is called', (done) => {
            
            postService.getPost().subscribe(
                (res: any) => {
                    expect(res).toEqual(testData);
                    done();
                }
            )

            const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
            request.flush(testData)
            expect(request.request.method).toBe('GET');
        })

        it('should return the array of object when getPostby Id is called', () => {
            
            postService.getPostById(testData[0].id).subscribe(
                (res: any) => {
                    expect(res).toEqual(testData[0]);
                }
            )
            // postService.getPostById(testData[1].id).subscribe(
            //     (res: any) => {
            //         expect(res).toEqual(testData[1]);
            //     }
            // )

            const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/1');
            // httpTestingController.verify(); // to used to prevent call same endpoint for multiple paras
            request.flush(testData[0])
            expect(request.request.method).toBe('GET');
        })
    })
    afterEach(() => {
        httpTestingController.verify(); // to used to prevent call same endpoint for multiple paras
    })
})