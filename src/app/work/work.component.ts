import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  itemRef: AngularFireList<any>;
  posts: Observable<any>;
  constructor(private db: AngularFireDatabase, private fire: AngularFireAuth) { 
  this.itemRef= db.list('myJob');
  this.posts=this.itemRef.valueChanges();
  }


  ngOnInit() {
  }

}
