import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-j-cole',
  templateUrl: './j-cole.component.html',
  styleUrls: ['./j-cole.component.scss']
})
export class JColeComponent implements OnInit {
  // Data for two-way data binding
  artistNameDisplay;
  artistNicknamesDisplay;
  artistGreatestSongDisplay;
  artistBioDisplay;

  // Reactive Form
  artistForm = new FormGroup({
    artistName: new FormControl('', [Validators.required]),
    artistNicknames: new FormControl(''),
    artistGreatestSong: new FormControl('', [Validators.required, Validators.minLength(3)]),
    artistBio: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  get artistName() {return this.artistForm.get('artistName')};

  get artistNicknames() {return this.artistForm.get('artistNicknames')};

  get artistGreatestSong() {return this.artistForm.get('artistGreatestSong')};

  get artistBio() {return this.artistForm.get('artistBio')};

    // Testing Form
    onSubmit(){
      console.log(`${this.artistForm.value.artistName}`)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
