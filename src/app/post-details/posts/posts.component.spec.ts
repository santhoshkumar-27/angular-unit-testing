import { of } from "rxjs";
import { post } from "../../models/post.model"
import { PostsComponent } from "./posts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostService } from "src/app/services/post/post.service";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PostComponent } from "../post/post.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
// class mockPostService {
//     getPost() {

//     }

//     deletePost(post: post) {
//         return of(true);
//     }
// }

@Component({
    selector: 'app-post',
    template: `<div></div>`
})
class FakePostComponent {
    @Input() post!: post;
}

describe('Posts component', () => {
    let posts: post[] = [
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
    let fixture: ComponentFixture<PostsComponent>;
    let component: PostsComponent;
    let mockPostService: any;
    let nativeElement: HTMLElement;
    let debugElement: any;
    // let postService: PostService;
    beforeEach(() => {
        mockPostService = jasmine.createSpyObj(['getPost', 'deletePost'])
        TestBed.configureTestingModule({ // testbed resolve the dependency injection issuess
            imports: [
                HttpClientTestingModule,
            ],
            declarations: [
                PostsComponent,
                PostComponent,
                // FakePostComponent
            ],
            providers: [
                HttpClient,
                {
                    provide: PostService,
                    useValue: mockPostService,
                    // useClass: MockPostService,
                    // useValue: mockPostService,
                    // userClass: mockPostService
                }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
        // component = TestBed.inject(PostsComponent);
        // postService = TestBed.inject(PostService);
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        nativeElement = fixture.nativeElement;
        debugElement = fixture.debugElement;

    });
    describe('getPost', () => {
        it('should set the post value from the webservice and set to the Post method', () => {
            mockPostService.getPost.and.returnValue(of(posts));
            fixture.detectChanges();
            expect(component.vm.posts.length).toBe(3);
        })
    })
    describe('delete', () => {
        beforeEach(() => {
            mockPostService.deletePost.and.returnValue(of(true))
            // spyOn(postService, 'deletePost').and.returnValue(of(true))
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
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
    describe('template', () => {
        it('should create one post element for a each post', () => {
            mockPostService.getPost.and.returnValue(of(posts));
            fixture.detectChanges();
            // const divElements = nativeElement.querySelectorAll('.single-post');
            const divElements = debugElement.queryAll(By.css('.single-post'));
            expect(divElements.length).toEqual(posts.length);
        })
    })

    describe('real post component', () => {
        it('should create exact same number of post component with posts', () => {
            mockPostService.getPost.and.returnValue(of(posts));
            // call ngoninit methods
            fixture.detectChanges();
            const postComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent)) // for a search of child components
            expect(postComponentDEs.length).toBe(posts.length);
        })
        it('should check the whether the postcomponent recieves the same post data from parent component', () => {
            mockPostService.getPost.and.returnValue(of(posts));
            // call ngoninit methods
            fixture.detectChanges();
            const postComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent))
            let postComponent = postComponentDEs[0].componentInstance as PostComponent;
            // expect(postComponent.post).toEqual(posts[0]);
            for(let i = 0; i < postComponentDEs.length; i++) {
                // expect(postComponentDEs[i]).toEqual(posts[i]);
            }
        })
    })
})