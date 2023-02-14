import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUploadFireBase } from 'src/environments/firebase';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'; //>> tạo chức năng kéo thả


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  files :  FileUploadFireBase[] = []

  constructor(
    private storage: AngularFireStorage
  ) { }

  selectFile(event : any){
    this.files = []
    let files = event.target.files
    for(let file of files){
      this.files.push(new FileUploadFireBase(file, this.storage))
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
  }
}
