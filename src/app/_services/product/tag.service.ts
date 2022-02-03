import { Injectable } from '@angular/core';
import { Tag } from 'src/app/_models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
tagArray:Tag[]=[
  {id:1,name:"Tag1"},
  {id:2,name:"Tag2"},
  {id:3,name:"Tag3"},
  {id:4,name:"Tag4"},
  {id:5,name:"Tag5"},
  {id:6,name:"Tag6"},
  {id:7,name:"Tag7"},
  {id:8,name:"Tag8"},
  {id:9,name:"Tag9"},
  {id:10,name:"Tag10"}
]
  constructor() { }
  getAllTags():Tag[]
  {return this.tagArray}
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
