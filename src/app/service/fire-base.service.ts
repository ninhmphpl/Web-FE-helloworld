import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUploadFireBase, upFileArray } from 'src/environments/firebase';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'; //>> tạo chức năng kéo thả


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  files :  FileUploadFireBase[] = []

  constructor(
    private storage: AngularFireStorage
  ) { }
  /**
   * Cái này gán vào phương vào (click)="" của thẻ input type="file"
   * Dùng để chọn ảnh cần thao tác
   * @param event 
   */
  selectFile(event : any){
    let files = event.target.files
    for(let file of files){
      this.files.push(new FileUploadFireBase(file, this.storage))
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
  }

  delete(index : number){
    this.files.splice(index,1)
  }
}