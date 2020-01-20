import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent} from './components/form/form.component';
import { MapsComponent} from './components/maps/maps.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';





const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },

  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
