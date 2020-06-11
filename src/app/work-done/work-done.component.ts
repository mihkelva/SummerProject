import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-work-done',
  templateUrl: './work-done.component.html',
  styleUrls: ['./work-done.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkDoneComponent implements OnInit {

  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: '../../assets/tark_maja_pic.png',
        // description: 'Tark-maja',
        // title: 'Tark-maja',
        alt: 'Tark-maja',
        ariaLabel: 'Tark-maja projekti pilt' 
      },
      { 
        img: '../../assets/tark_maja_pic.png',
        // description: 'Tark-maja',
        // title: 'Tark-maja',
        alt: 'Tark-maja pisipilt',
        ariaLabel: 'Tark-maja projekti pisipilt' 
      }
    ),
    new Image(
      1, 
      { 
        img: '../../assets/game_design_img.gif',
        // description:'Mängudisaini projekt',
        // title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Mängudisaini projekti pilt' 
      }, 
      {
        img: '../../assets/game_design_img.gif',
        // description: 'Mängudisaini projekt',
        // title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Tark-maja projekti pisipilt' 
      }
    ),
    new Image(
      2,
      {
        img: '../../assets/tantsumeka_pic.png',
        // description: 'Tantsumeka veebileht',
        // title: 'Tantsumeka veebileht',
        alt: 'Tantsumeka veebileht',
        ariaLabel: 'Tantsumeka veebilehe pilt'
      },
      {
        img: '../../assets/tantsumeka_pic.png',
        // description: 'Tantsumeka veebileht',
        // title: 'Tantsumeka veebileht',
        alt: 'Tantsumeka veebileht',
        ariaLabel: 'Tantsumeka veebilehe pisipilt' 
      }
    ),
    new Image(
      3,
      {
        img: '../../assets/Stressikaart_pic.jpg',
        // description: 'Stressikaart',
        // title: 'Stressikaart',
        alt: 'Stressikaart',
        ariaLabel: 'Stressikaardi projekti pilt'
      },
      { 
        img: '../../assets/Stressikaart_pic.jpg',
        // description: 'Stressikaart',
        // title: 'Stressikaart',
        alt: 'Stressikaart',
        ariaLabel: 'Stressikaardi projekti pisipilt' }
    ),
    new Image(
      4,
      {
        img: '../../assets/Quizify.jpg',
        // description: 'Quizify',
        // title: 'Quizify',
        alt: 'Quizify',
        ariaLabel: 'Quizify projekti pilt' 
      }, 
      { 
        img: '../../assets/Quizify.jpg',
        // description: 'Quizify',
        // title: 'Quizify',
        alt: 'Quizify',
        ariaLabel: 'Quizify projekti pisipilt' 
      }
    ),
    new Image(
      5, 
      { 
        img: '../../assets/Hasartmängusõltuvus.png',
        // description:'Mängudisaini projekt',
        // title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Mängudisaini projekti pilt' 
      }, 
      {
        img: '../../assets/Hasartmängusõltuvus.png',
        // description: 'Mängudisaini projekt',
        // title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Tark-maja projekti pisipilt' 
      }
    ),
    
  ];

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }

  // output evets
  onShow(event: ImageEvent) {
    console.log('show', event);
  }

  onFirstImage(event: ImageEvent) {
    console.log('firstImage', event);
  }

  onLastImage(event: ImageEvent) {
    console.log('lastImage', event);
  }

  ngOnInit(): void {
  }

}
