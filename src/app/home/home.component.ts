import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Toast } from 'bootstrap';
import {IAboutMe, IGetInTouch, IPhilosophy, IStrength} from "./home-type.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  imgPath = 'home_img.png';
  heroText = "Hello, I'm Sujit Aluru";
  heroDesc = "Turning pixels into smiles, one line of code at a time";

  tempRandomText = "some random description about the company and experiences I had there."

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  ngAfterViewInit(): void {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
    sections.forEach((section: Element): void => {
      this.observer.observe(section);
    });
    const getInTouchForm = document.querySelector('.needs-validation') as HTMLFormElement;
    const mailSentToast = document.querySelector('#mail-sent-toast') as HTMLElement;
    if(getInTouchForm && mailSentToast)
      this.formEventListener(getInTouchForm, mailSentToast);
  }

  formEventListener(formSubject: HTMLFormElement, toast: HTMLElement): void {
    formSubject?.addEventListener('submit', (event: Event): void => {
      if (!formSubject.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else {
        const toastBootstrap: Toast = Toast.getOrCreateInstance(toast);
        toastBootstrap.show();
      }

      formSubject.classList.add('was-validated')
    }, false)
  }

  observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    const sectionInView: Element = entries[0].target;
    if(entries[0].isIntersecting) {
      if(sectionInView.className.includes('about-me')) {
        Array.from(sectionInView.children).forEach((listItem: Element, index: number): void => {
          if(listItem.tagName === 'DIV') {
            setTimeout(() => {
              listItem.classList.remove('opacity-0');
              listItem.classList.add('section-list-animation');
            }, (index + 1) * 50)
          }
          else if(listItem.tagName === 'HR') {
            listItem.classList.replace('w-25', 'w-100');
            listItem.classList.replace('opacity-0', 'opacity-100');
          }
          else {
            listItem.classList.remove('opacity-0');
            listItem.classList.add('section-headings-animation');
          }
        })
      }

      else if(sectionInView.className.includes('phil-values')) {
        const heading: Element = sectionInView.children[0].children[0];
        const horRule: Element = sectionInView.children[0].children[1];
        const paragraph: Element = sectionInView.children[0].children[2];
        const image: Element = sectionInView.children[1];
        sectionInView.classList.remove('opacity-0');
        sectionInView.classList.add('section-background-animation');
        setTimeout(() => {
          heading.classList.remove('opacity-0');
          heading.classList.add('section-headings-animation');
          horRule.classList.replace('w-25', 'w-100');
          horRule.classList.replace('opacity-0', 'opacity-50');
          setTimeout(() => {
            image.classList.remove('opacity-0');
            image.classList.add('section-list-animation');
          }, 100)
          setTimeout(() => {
            paragraph.classList.remove('opacity-0');
            paragraph.classList.add('section-list-animation');
          }, 200);
        }, 300);
      }

      else if(sectionInView.className.includes('getInTouch')) {
        const sectionImage: Element = sectionInView.children[0];
        const sectionHeading: Element = sectionInView.children[1].children[0];
        const sectionForm: Element = sectionInView.children[1].children[1];
        sectionHeading.classList.remove('opacity-0');
        sectionHeading.classList.add('section-headings-animation');
        setTimeout(() => {
          sectionImage.classList.remove('opacity-0');
          sectionImage.classList.add('section-list-animation');
          setTimeout(() => {
            sectionForm.classList.remove('opacity-0');
            sectionForm.classList.add('section-list-animation');
          }, 100)
        }, 100)
      }

      else if(sectionInView.className.includes('strengths')) {
        const sectionHeading: Element = sectionInView.children[0].children[0];
        const sectionCaption: Element = sectionInView.children[0].children[1];
        const sectionLink: Element = sectionInView.children[0].children[2];
        const sectionStrengths: Element = sectionInView.children[1];
        const horRule: Element = sectionInView.children[2];
        sectionHeading.classList.remove('opacity-0');
        sectionHeading.classList.add('section-headings-animation');
        horRule.classList.replace('w-25', 'w-100');
        horRule.classList.replace('opacity-0', 'opacity-100');
        setTimeout(() => {
          sectionCaption.classList.remove('opacity-0');
          sectionCaption.classList.add('section-list-animation');
          sectionLink.classList.remove('opacity-0');
          sectionLink.classList.add('section-list-animation');
          setTimeout(() => {
            sectionStrengths.classList.remove('opacity-0');
            sectionStrengths.classList.add('section-list-animation');
          }, 100)
        }, 100)
      }

      this.observer.unobserve(sectionInView)
    }
  }, { threshold: [0.5, 0.6, 0.7, 0.8, 1] })

  aboutMe: IAboutMe[] = [
    {
      section: 'Work Experience',
      caption: 'Companies I\'ve worked for in the past',
      items: [
        {
          org: 'The Qrious Box',
          role: 'Junior Developer Intern',
          duration: 'Jul - Sep, 2021',
          description: this.tempRandomText
        },
        {
          org: 'LTI - Larsen & Toubro Infotech',
          role: 'Graduate Engineer Trainee',
          duration: 'Aug - Oct, 2022',
          description: this.tempRandomText
        },
        {
          org: 'LTIMindtree',
          role: 'Senior Software Engineer',
          duration: 'Nov 2022 - present',
          description: this.tempRandomText
        }
      ]
    },
    {
      section: 'Educational Background',
      caption: 'Schools & Institutions I\'ve been taught in',
      items: [
        {
          org: 'D.A.V School',
          role: 'High School',
          duration: 'March 2014 - March 2016',
          description: this.tempRandomText
        },
        {
          org: 'S.D.A.V School',
          role: 'Senior High School',
          duration: 'March 2016 - March 2018',
          description: this.tempRandomText
        },
        {
          org: 'SSN College of Engineering',
          role: 'B.E. EEE',
          duration: 'Aug 2018 - Jun 2022',
          description: this.tempRandomText
        }
      ]
    }
  ]

  philosophicalValuesSection: IPhilosophy = {
    section: 'Philosophy & Values',
    philosophicalValue: '\n' +
      '          Embracing authenticity, I humbly tread life\'s path with a genuine stride.\n' +
      '          No masks, no pretense, just a sincere connection as my guide. Amidst a world of illusions,\n' +
      '          I choose to be real, cutting through the noise with a humble appeal.\n' +
      '          Authenticity, my guiding light, illuminating the way, where true connections ignite.\n' +
      '        ',
    imageSrc: '../../assets/home/philosophical-value_img.png'
  }

  strengthsSection: IStrength = {
    section: 'Strengths',
    caption: 'With a natural intuition for UI development, I excel in crafting visually appealing, user-friendly interfaces &\n' +
      '       writing efficient & non-redundant code, ensuring responsive designs across devices.\n' +
      '       With Problem-solving at the core of my abilities, allows me to tackle complex challenges & deliver efficient UIs that captivate users & provide a smooth, intuitive interface.',
    strengths: [
      {
        name: 'UI Development',
        description: 'My expertise lies in translating complex requirements into intuitive & engaging user experiences.',
        icon: 'fa-code'
      },
      {
        name: 'Responsive Design',
        description: 'I strive to implement efficient design principles to ensure that my interfaces adapt seamlessly to different screen sizes & devices.',
        icon: 'fa-palette'
      },
      {
        name: 'Problem Solving',
        description: 'I leverage my Problem Solving skills to find creative solutions for user interaction issues or to address compatibility concerns across devices.',
        icon: 'fa-puzzle-piece'
      },
      {
        name: 'Efficient Code',
        description: 'I prioritize writing clean, optimized code that minimizes redundancy & maximizes performance.',
        icon: 'fa-gears'
      },
    ]
  }

  getInTouchSection: IGetInTouch = {
    section: 'Get in Touch',
    imgPath: '../../assets/home/get-in-touch_img.png',
    formAction: 'https://formspree.io/f/mpzgzjge',
    formMethod: 'POST',
    formElements: [
      {
        fieldType: 'I',
        inputType: 'text',
        cols: 'col-md-5',
        id: 'full-name',
        placeholder: 'John Doe',
        label: 'Name'
      },
      {
        fieldType: 'I',
        inputType: 'email',
        cols: 'col-md-5',
        id: 'email',
        placeholder: 'Email Address',
        label: 'Email Address'
      },
      {
        fieldType: 'T',
        inputType: 'text',
        cols: 'col-md-10',
        id: 'message',
        placeholder: 'Your Message',
        label: 'Your Message'
      },
      {
        fieldType: 'B',
        inputType: 'submit',
        cols: 'col-md-2 align-self-end',
        id: 'Send',
        placeholder: '',
        label: ''
      }
    ]
  }

}
