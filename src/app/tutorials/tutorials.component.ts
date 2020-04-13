import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutorials",
  templateUrl: "./tutorials.component.html",
  styleUrls: ["./tutorials.component.scss"],
})
export class TutorialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  universal_tutorials: tutorials[] = [
    {
      url:
        "https://www.universal-tutorial.com/angular-tutorials/whats-new-in-angular-9",
      title: "What's new in Angular 9",
      imageUrl:
        "https://www.universal-tutorial.com/media/angular-tutorials/angular_9/Angular_9.png",
      time_required: 15,
    },
    {
      url:
        "https://www.universal-tutorial.com/angular-tutorials/angular-typography",
      title: "Setup Typography using Angular Material",
      imageUrl:
        "https://universal-tutorial.com/media/angular-tutorials/angular-typography/angular-typography-banner.png",
      time_required: 9,
    },
    {
      url:
        "https://www.universal-tutorial.com/general-tutorials/code-formatting-using-prettier-and-husky",
      title: "How to format your code in Angular",
      imageUrl:
        "https://universal-tutorial.com/media/general-tutorials/prettier-code-format/prettier-code-format-banner_w1800.png",
      time_required: 6,
    },
  ];
}

export interface tutorials {
  url: string;
  title: string;
  imageUrl: string;
  time_required: number;
}
