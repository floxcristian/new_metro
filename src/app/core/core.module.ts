//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//DIRECTIVAS
import { MenuHorizontalOffcanvasDirective } from './directives/menu-horizontal-offcanvas.directive';
import { MenuHorizontalDirective } from './directives/menu-horizontal.directive';
//PIPES
import { UrlImagePipe } from './pipes/url-image.pipe';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { MenuAsideDirective } from './directives/menu-aside.directive';
import { LetDirective } from './directives/let.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
     //PIPES
     UrlImagePipe,
     FirstNamePipe,
     //DIRECTIVAS
     MenuHorizontalDirective,
     MenuHorizontalOffcanvasDirective,
     MenuAsideDirective,
     LetDirective
  ],
  declarations: [
     //PIPES
     UrlImagePipe,
     FirstNamePipe,
     //DIRECTIVAS
     MenuHorizontalDirective,
     MenuHorizontalOffcanvasDirective,
     UrlImagePipe,
     FirstNamePipe,
     MenuAsideDirective,
     LetDirective

   ]
})
export class CoreModule { }
