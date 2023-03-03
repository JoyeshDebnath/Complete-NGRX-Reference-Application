import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    // lazy loading ....👇
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((module) => {
        return module.CounterModule;
      }),
    // lazy load 👆
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
