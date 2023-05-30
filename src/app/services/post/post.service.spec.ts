import { HttpClient } from "@angular/common/http";
import { PostService } from "./post.service"
import { post } from '../../models/post.model';
import { of } from "rxjs";
describe('post service', () => {
    let postService: PostService;
    let mockPostService : jasmine.SpyObj<HttpClient>
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
        mockPostService = jasmine.createSpyObj('HttpClient', ['get', 'delete'])
        postService = new PostService(mockPostService);
    })
    describe('get post method', () => {
        it('should return  expected post when get post is called', (done) => {
            mockPostService.get.and.returnValue(of(post));
            postService.getPost().subscribe((response: post[]) => {
                expect(response).toEqual(post);
                done()
            });
            expect(mockPostService.get).toHaveBeenCalled();
            expect(mockPostService.get).toHaveBeenCalledTimes(1);
        })
    })
})