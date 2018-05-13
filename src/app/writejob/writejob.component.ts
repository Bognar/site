import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-writejob',
  templateUrl: './writejob.component.html',
  styleUrls: ['./writejob.component.css']
})
export class WritejobComponent implements OnInit {
  @ViewChild('title') title;
  @ViewChild('excerpt') exerpt;
  @ViewChild('link') link;
  @ViewChild('images') image;
  itemRef: AngularFireList<any>;
  posts: Observable<any>;
  constructor(private db: AngularFireDatabase, private fire: AngularFireAuth) { 
  this.itemRef= db.list('myJob');
  this.posts=this.itemRef.valueChanges();
  }


  ngOnInit() {
  }

}
