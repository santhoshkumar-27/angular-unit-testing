import { of } from "rxjs";
import { post } from "../../models/post.model"
import { PostsComponent } from "./posts.component";

describe('Posts component', () => {
    let posts: post[];
    let component: PostsComponent;
    let mockPostService: any;
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
        mockPostService = jasmine.createSpyObj(['getPost', 'deletePost'])
        component = new PostsComponent(mockPostService);
    })
    describe('delete', () => {
        beforeEach(() => {
            mockPostService.deletePost.and.returnValue(of(true))
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
})