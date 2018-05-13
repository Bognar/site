import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  itemRef: AngularFireList<any>;
  posts: Observable<any>;
  constructor(private db: AngularFireDatabase, private fire: AngularFireAuth) { 
  this.itemRef= db.list('post');
  this.posts=this.itemRef.valueChanges();
  }

  ngOnInit() {
  }

}
