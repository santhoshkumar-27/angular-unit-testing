import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./post-details/posts/posts.component";
import { PostViewComponent } from "./post-details/post-view/post-view.component";

const routes: Routes = [
    {
        path: 'post',
        component: PostsComponent
    },
    {
        path: 'details/:id',
        component: PostViewComponent,
    },
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full',
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}