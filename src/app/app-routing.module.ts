import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FolderComponent} from './folder/folder.component';
import {MainComponent} from './main/main.component';
const routes: Routes = [
  {  path: 'folder/:name', component: FolderComponent },
  {  path: '', component: MainComponent },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }
