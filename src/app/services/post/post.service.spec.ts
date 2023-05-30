import { HttpClient } from "@angular/common/http";
import { PostService } from "./post.service"
import { post } from '../../models/post.model';
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";
describe('post service', () => {
    let postService: PostService;
    let mockHttpClient : jasmine.SpyObj<HttpClient>
    const post: post[] = [
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
    beforeAll(() => {
        mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'delete'])
        TestBed.configureTestingModule({
            providers: [
                PostService,
                {
                    provide: HttpClient,
                    useValue: mockHttpClient
                }
            ],

        })
        // postService = new PostService(mockHttpClient);
        postService = TestBed.inject(PostService);
    })
    describe('get post method', () => {
        it('should return  expected post when get post is called', (done) => {
            mockHttpClient.get.and.returnValue(of(post));
            postService.getPost().subscribe((response: post[]) => {
                expect(response).toEqual(post);
                done()
            });
            expect(mockHttpClient.get).toHaveBeenCalled();
            expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
        })
    })

    describe('delete post method', () => {
        it('should return method if delete action done perfectly', (done) => {
            mockHttpClient.delete.and.returnValue(of(true));
            postService.deletePost(post[0]).subscribe((res: any) => {
                done();
            })
            expect(mockHttpClient.delete).toHaveBeenCalled();
            expect(mockHttpClient.delete).toHaveBeenCalledTimes(1);
        })
    })
})