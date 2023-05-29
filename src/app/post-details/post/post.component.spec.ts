import { PostComponent } from "./post.component"
import { post } from '../../models/post.model'
import { first } from "rxjs";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
describe('Post component', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let element: HTMLElement;
    let debugElement: any;
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
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.post = post;
        fixture.detectChanges(); // we have to put this detectchanges method in order to render
        element = fixture.nativeElement;
        debugElement = fixture.debugElement; // debugElement used to ssr testing mode
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
    it('should check the weather the title is present or not using the debug element', () => {
        const titleElement = debugElement.query(By.css('#title')).nativeElement
        expect(titleElement?.textContent).toContain('testing')
    })
    it('should check the weather the title is present or not', () => {
        const ele = element.querySelector('#title');
        expect(ele?.textContent).toContain('testing')
    })
    it('should check the weather the body is present or not', () => {
        const ele = element.querySelector('#body');
        expect(ele?.textContent).toContain('this is testing of insurance')
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