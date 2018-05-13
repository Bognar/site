import { Component } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('gocrazy', [
      state('void', style({opacity:0})),
      transition('void <=> *,* <=> *', [
        animate(1000)

      ])
     
    ])

  ]
})
export class AppComponent {
  title = 'iFun Studios';
  showmenu = false;
  itemRef: AngularFireList<any>;
  posts: Observable<any>;
  constructor(private db: AngularFireDatabase, private fire: AngularFireAuth) { 
  this.itemRef= db.list('post');
  this.posts=this.itemRef.valueChanges();
  }
  
}
