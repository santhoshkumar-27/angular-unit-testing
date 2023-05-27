import { PostComponent } from "./post.component"
import { post } from '../../models/post.model'
import { first } from "rxjs";
describe('Post component', () => {
    let component: PostComponent;
    let post: post = {
        id: 1,
        title: 'testing',
        body: 'this is testing of insurance',
    }
    beforeEach(() => {
        component = new PostComponent();
        component.post = post;
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