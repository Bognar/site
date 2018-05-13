import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  @ViewChild('title') title;
  @ViewChild('excerpt') exerpt;
  @ViewChild('fulltext') fulltext;
  @ViewChild('images') image;
  itemRef: AngularFireList<any>;
  posts: Observable<any>;
  constructor(private db: AngularFireDatabase, private fire: AngularFireAuth) { 
  this.itemRef= db.list('post');
  this.posts=this.itemRef.valueChanges();
  }
  
  sendPost(){
    let title = this.title.nativeElement;
    let exerpt = this.exerpt.nativeElement;
    let fulltext = this.fulltext.nativeElement;
    let image = this.image.nativeElement;
    this.itemRef.push({title:title.value, excerp:exerpt.value, fulltext:fulltext.value, image:image.value})
    
  }

  ngOnInit() {
  }
 
}
