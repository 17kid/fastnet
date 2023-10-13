import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fastnet';

  ngOnInit(): void {
    this.setScrollVar();

    window.addEventListener("scroll", this.setScrollVar);
    window.addEventListener("resize", this.setScrollVar);
  }

  setScrollVar(){
    const htmlElement = document.documentElement;
    const percentfromHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    // console.log(Math.min(percentfromHeightScrolled * 100, 100));
    htmlElement.style.setProperty("--scroll", Math.min(percentfromHeightScrolled * 100, 100).toString());
  }

}
