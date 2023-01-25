import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsService } from './posts.service';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { AboutComponent } from './about/about.component';
import { ParametersComponent } from './parameters/parameters.component';
const routes: Routes = [
  {
    path: '',
    component: FirstcomponentComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'parameters/:id', component: ParametersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PostsService],
})
export class AppRoutingModule {}
