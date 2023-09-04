import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { EditorComponent } from './editor/editor.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: ProfileComponent },
  { path:'blog', component: BlogComponent },
  { path:'blog/:id', component: BlogEntryComponent },
  { path:'blog/edit/:id', component: EditorComponent },
  { path:'404', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
