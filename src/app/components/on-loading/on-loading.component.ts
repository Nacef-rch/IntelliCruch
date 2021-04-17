import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-on-loading',
  templateUrl: './on-loading.component.html',
  styleUrls: ['./on-loading.component.scss']
})
export class OnLoadingComponent implements OnInit {
  public onProgress:number=0;
  @Output() loaded = new EventEmitter<boolean>();
  public loadingText:string="Loading Project ..."

  constructor() { }

  ngOnInit(): void {
  
      setTimeout(() => {
   
          const progressInterval = setInterval(() => {
            if (this.onProgress === 10){
              this.loadingText= 'Project Initialization ...'
            }
            if (this.onProgress === 30){
            
                this.loadingText= 'Project Analysis ...'
              
              
            }
            if (this.onProgress === 100) {
              this.loaded.emit(true);
              clearInterval(progressInterval);
              
            } else {
              this.onProgress += 5;
              
            }
          }, 600);
        
      }, 1000);
    
  }

}
