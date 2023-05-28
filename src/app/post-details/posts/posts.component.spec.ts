import { of } from "rxjs";
import { post } from "../../models/post.model"
import { PostsComponent } from "./posts.component";
import { TestBed } from "@angular/core/testing";
import { PostService } from "src/app/services/post/post.service";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing'
class mockPostService {
    getPost() {

    }

    deletePost(post: post) {
        return of(true);
    }
}
describe('Posts component', () => {
    let posts: post[];
    let component: PostsComponent;
    // let mockPostService: any;
    let postService: PostService;
    beforeEach(() => {
        posts = [
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
        ];
        // mockPostService = jasmine.createSpyObj(['getPost', 'deletePost'])
        TestBed.configureTestingModule({ // testbed resolve the dependency injection issuess
            imports: [
                HttpClientTestingModule,
              ],
            providers: [
                PostsComponent,
                HttpClient,
                {
                    provide: PostService,
                    // useValue: mockPostService,
                    // useClass: MockPostService,
                    // useValue: mockPostService,
                    userClass: mockPostService
                }
            ]
        })
        component = TestBed.inject(PostsComponent);
        postService = TestBed.inject(PostService);
    })
    describe('delete', () => {
        beforeEach(() => {
            // mockPostService.deletePost.and.returnValue(of(true))
            spyOn(postService, 'deletePost').and.returnValue(of(true))
            // postService.deletePost.and.returnValue(of(true))
            component.vm.posts = posts;
            component.deletePost(posts[0]);
        })
        it('should delete the selected post from the posts', () => {
            expect(component.vm.posts.length).toBe(2);
        })
        it('should delete actual post selected post from the posts', () => {
            expect(component.vm.posts).not.toEqual(posts);
        })
        it('should delete the selected post from the posts only one', () => {
            expect(postService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
})