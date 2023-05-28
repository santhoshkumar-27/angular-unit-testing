import { PostComponent } from "./post.component"
import { post } from '../../models/post.model'
import { first } from "rxjs";
import { TestBed, ComponentFixture } from "@angular/core/testing";
describe('Post component', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let post: post = {
        id: 1,
        title: 'testing',
        body: 'this is testing of insurance',
    }
    beforeAll(() => {
        // component = new PostComponent();
        TestBed.configureTestingModule({
            declarations: [
                PostComponent,
            ]
        })
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.post = post;
    })
    it('should create post component using testbed', () => {
        // TestBed.configureTestingModule({
        //     declarations: [
        //         PostComponent,
        //     ]
        // })
        // const fixture = TestBed.createComponent(PostComponent); // fixture is known as class instance with the templete rendered
        // const component = fixture.componentInstance;
        expect(component).toBeDefined();
    })
    it('should raise an event when the delete post is clicked', (done) => {
        component.onDelete.pipe(
            first()
        ).subscribe((selectedPost: post) => {
            expect(selectedPost).toEqual(post);
            done();
        })
        component.deletePost(new MouseEvent('click'))
    })
})