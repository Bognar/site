import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FootComponent } from './foot/foot.component';
import { WriteComponent } from './write/write.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { WritejobComponent } from './writejob/writejob.component';

const appRoutes : Routes = [
  { path: 'work', component:WorkComponent },
  { path: 'write', component:WriteComponent },
  { path: 'writejob', component:WritejobComponent },
  { path: 'info', component:InfoComponent },
  { path: 'about', component:AboutComponent },
  { path: 'blog', component:BlogComponent },
  { path: '', redirectTo: '/', pathMatch:'full' },
  { path: '**', redirectTo: '/', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    InfoComponent,
    AboutComponent,
    BlogComponent,
    NavigationComponent,
    FootComponent,
    WriteComponent,
    WritejobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
