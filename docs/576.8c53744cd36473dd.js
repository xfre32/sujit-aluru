"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[576],{7708:(y,h,c)=>{c.d(h,{x:()=>k});var e=c(4946),u=c(7157),m=c(6814),f=c(6538);const v=["heroSectionContainer"];function b(a,g){if(1&a&&(e.TgZ(0,"a",13),e._UZ(1,"i",14)(2,"i",15),e.qZA()),2&a){const i=e.oxw();e.Q6J("routerLink","/"+i.sharedService.prevPage)}}function x(a,g){if(1&a&&(e.TgZ(0,"a",16),e._UZ(1,"i",17)(2,"i",18),e.qZA()),2&a){const i=e.oxw();e.Q6J("routerLink","/"+i.sharedService.nextPage)}}const _=function(a){return{"order-xl-last":a}};let k=(()=>{class a{constructor(i){this.sharedService=i,this.prevId=0,this.currId=0,this.transitionAnimation="",this.observer=new IntersectionObserver(l=>{const t=l[0].target;if(l[0].isIntersecting){const o=l[0].target.children[0].children[0],n=l[0].target.children[1];o.classList.remove("opacity-0"),o.classList.add(this.transitionAnimation),setTimeout(()=>{n.classList.remove("opacity-0"),n.classList.add(this.transitionAnimation)},200),this.observer.unobserve(t)}},{threshold:[.3,.4,.5,.6]})}ngOnInit(){this.prevId=this.sharedService.pageNavs.map(i=>i.path).indexOf(this.sharedService.previousPath),this.currId=this.sharedService.pageNavs.map(i=>i.path).indexOf(this.sharedService.currPath),this.sharedService.nextPage=this.currId<4?this.sharedService.pageNavs[this.currId+1].path:"",this.sharedService.prevPage=this.currId>0?this.sharedService.pageNavs[this.currId-1].path:"",this.transitionAnimation=this.currId>=this.prevId?"slide-in-left":"slide-in-right"}ngAfterViewInit(){this.observer.observe(this.heroSectionContainer.nativeElement)}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(u.F))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-hero"]],viewQuery:function(i,l){if(1&i&&e.Gf(v,5),2&i){let t;e.iGM(t=e.CRH())&&(l.heroSectionContainer=t.first)}},inputs:{heroImage:"heroImage",heroText:"heroText",heroDesc:"heroDesc",heroImageLeft:"heroImageLeft"},decls:15,vars:8,consts:[[1,"container-fluid","px-lg-5","bg-light","vw-100"],[1,"row","mx-auto","mt-5","justify-content-center","hero-section-container","align-items-lg-center"],["heroSectionContainer",""],[1,"col-12","col-xl-6","text-center",3,"ngClass"],["width","600","height","600","priority","true","alt","Hero image",1,"img-fluid","mb-4","hero-section","opacity-0",3,"ngSrc"],[1,"col-12","col-xl-6","text-center","hero-section","opacity-0"],[1,"row"],[1,"col-12"],[1,"display-4","mt-0","mb-1"],[1,"lead","fs-3","text-black-50"],[1,"col-12","my-2","mx-auto","order-lg-first"],["class","btn btn-lg btn-outline-dark border border-dark border-0 rounded-5 nav-icon px-3 mx-4 nav-icon-left",3,"routerLink",4,"ngIf"],["class","btn btn-lg btn-outline-dark border border-dark border-0 rounded-5 nav-icon px-3 mx-4 nav-icon-right",3,"routerLink",4,"ngIf"],[1,"btn","btn-lg","btn-outline-dark","border","border-dark","border-0","rounded-5","nav-icon","px-3","mx-4","nav-icon-left",3,"routerLink"],[1,"fa-solid","fa-caret-left","fa-2xl"],[1,"fa-solid","fa-caret-left","fa-xl"],[1,"btn","btn-lg","btn-outline-dark","border","border-dark","border-0","rounded-5","nav-icon","px-3","mx-4","nav-icon-right",3,"routerLink"],[1,"fa-solid","fa-caret-right","fa-xl"],[1,"fa-solid","fa-caret-right","fa-2xl"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._uU(9),e.qZA(),e.TgZ(10,"p",9),e._uU(11),e.qZA()(),e.TgZ(12,"div",10),e.YNc(13,b,3,1,"a",11),e.YNc(14,x,3,1,"a",12),e.qZA()()()()()),2&i&&(e.xp6(3),e.Q6J("ngClass",e.VKq(6,_,l.heroImageLeft)),e.xp6(1),e.Q6J("ngSrc","assets/"+l.heroImage),e.xp6(5),e.Oqu(l.heroText),e.xp6(2),e.Oqu(l.heroDesc),e.xp6(2),e.Q6J("ngIf",l.sharedService.prevPage),e.xp6(1),e.Q6J("ngIf",l.sharedService.nextPage))},dependencies:[m.mk,m.O5,f.rH,m.Zd],styles:["h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:900;letter-spacing:.1rem}p[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:200}.nav-icon[_ngcontent-%COMP%]{font-size:xx-large;transition:all .2s ease-in-out}.nav-icon-down[_ngcontent-%COMP%]:hover{transform:translateY(10px) scale(1.2)}.nav-icon-left[_ngcontent-%COMP%]:hover{transform:translate(-10px) scale(1.2)}.nav-icon-right[_ngcontent-%COMP%]:hover{transform:translate(10px) scale(1.2)}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-left .7s cubic-bezier(.25,.46,.45,.94)}.slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-right .7s cubic-bezier(.25,.46,.45,.94)}@keyframes _ngcontent-%COMP%_fade-in-from-left{0%{opacity:0;filter:blur(10px);transform:translate(-100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}@keyframes _ngcontent-%COMP%_fade-in-from-right{0%{opacity:0;filter:blur(10px);transform:translate(100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}"]}),a})()},3576:(y,h,c)=>{c.r(h),c.d(h,{SkillsModule:()=>l,SkillsRoutingModule:()=>i});var e=c(4946),u=c(6814),m=c(7708);function f(t,o){if(1&t&&(e.TgZ(0,"div",11)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"div",12),e._UZ(4,"div",13),e.qZA()()),2&t){const n=o.$implicit,r=e.oxw().index;e.xp6(1),e.Tol("fw-light text-secondary mb-2 mt-4 fs-4 card-child"+r),e.xp6(1),e.hij(" ",n.skill," "),e.xp6(1),e.Tol("progress card-child"+r),e.xp6(1),e.Tol("progress-bar bg-secondary card-child"+r),e.Q6J("id",n.id+"."+n.percentage)}}const v=function(t,o){return{"order-lg-last ms-lg-auto":t,"order-lg-first me-lg-auto":o}},b=function(t,o){return{"me-lg-auto":t,"ms-lg-auto":o}};function x(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5),e.NdJ("mouseenter",function(d){e.CHM(n);const p=e.oxw();return e.KtG(p.onHover(d))})("mouseleave",function(d){e.CHM(n);const p=e.oxw();return e.KtG(p.onHover(d))}),e.TgZ(3,"div",6)(4,"div",7)(5,"h3"),e._uU(6),e.qZA()(),e.YNc(7,f,5,8,"div",8),e.qZA()()(),e.TgZ(8,"div",9),e._UZ(9,"img",10),e.qZA()()}if(2&t){const n=o.$implicit,r=o.index;e.xp6(1),e.Q6J("ngClass",e.WLB(8,v,r%2!=0,r%2==0)),e.xp6(1),e.Q6J("id","card"+r),e.xp6(3),e.Tol("card-title display-6 text-black-50 fw-bold card-child"+r),e.xp6(1),e.hij(" ",n.domain," "),e.xp6(1),e.Q6J("ngForOf",n.skills),e.xp6(1),e.Q6J("ngClass",e.WLB(11,b,r%2!=0,r%2==0)),e.xp6(1),e.Q6J("src","assets/skills/"+n.image,e.LSH)}}let _=(()=>{class t{constructor(){this.imgPath="skills_img.png",this.heroText="My Skills & Proficiency",this.heroDesc="in Web Design & Development",this.mouseHovered=!1,this.skillSet=[{domain:"Programming Languages",image:"programming_img.png",skills:[{id:"pb00",skill:"C",percentage:50},{id:"pb01",skill:"C++",percentage:40},{id:"pb02",skill:"Python",percentage:60},{id:"pb03",skill:"JavaScript",percentage:70},{id:"pb04",skill:"TypeScript",percentage:65},{id:"pb05",skill:"Java",percentage:30}]},{domain:"Web Development",image:"web_dev_img.png",skills:[{id:"pb10",skill:"HTML5",percentage:90},{id:"pb11",skill:"CSS3",percentage:80},{id:"pb12",skill:"Angular",percentage:70},{id:"pb13",skill:"Bootstrap",percentage:85},{id:"pb14",skill:"Responsive Web Design",percentage:90},{id:"pb15",skill:"Version Control System",percentage:65},{id:"pb16",skill:"APIs & Integration",percentage:65},{id:"pb17",skill:"Node.js",percentage:40},{id:"pb18",skill:"MongoDB",percentage:35}]},{domain:"Creative Suite",image:"creative_suite_img.png",skills:[{id:"pb20",skill:"Adobe InDesign",percentage:55},{id:"pb21",skill:"Adobe Illustrator",percentage:30},{id:"pb22",skill:"Figma",percentage:45}]},{domain:"Miscellaneous",image:"misc_img.png",skills:[{id:"pb30",skill:"Problem Solving",percentage:80},{id:"pb31",skill:"Troubleshooting",percentage:65},{id:"pb32",skill:"Root Cause Analysis",percentage:90},{id:"pb33",skill:"Communication",percentage:75}]}],this.observer=new IntersectionObserver(n=>{if(n[0].isIntersecting){const r=n[0].target,d=r.id,p=d.charAt(d.length-1);r.querySelectorAll(".card-child"+p).forEach((s,S)=>{if("DIV"===s.tagName&&s.hasAttribute("id")){const I=s.id.split(".")[1];setTimeout(()=>{s.setAttribute("style",`width: ${I}%`)},10*S)}else"P"===s.tagName?s.classList.replace("text-secondary","text-secondary-emphasis"):(s.classList.replace("text-black-50","text-info-emphasis"),s.classList.replace("fw-bold","fw-bolder"))}),this.observer.unobserve(r)}},{threshold:[.5,.8,1]})}ngOnInit(){window.scroll(0,0)}ngAfterViewInit(){document.querySelectorAll(".card").forEach(r=>{this.observer.observe(r)})}onHover(n){this.mouseHovered="mouseenter"===n.type;const r=n.target,d=r.id,p=d.charAt(d.length-1),C=r.querySelectorAll(".card-child"+p);this.mouseHovered?(r.classList.add("card-hovered"),r.classList.replace("shadow-sm","shadow-lg"),C.forEach(s=>{"DIV"===s.tagName&&(s.hasAttribute("id")?s.classList.replace("bg-secondary","bg-dark-teal"):s.classList.add("bg-light-gray"))})):(r.classList.remove("card-hovered"),r.classList.replace("shadow-lg","shadow-sm"),C.forEach(s=>{"DIV"===s.tagName&&(s.hasAttribute("id")?s.classList.replace("bg-dark-teal","bg-secondary"):s.classList.remove("bg-light-gray"))}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-skills"]],decls:3,vars:5,consts:[[3,"heroImage","heroText","heroDesc","heroImageLeft"],[1,"container"],["class","row align-items-center my-5",4,"ngFor","ngForOf"],[1,"row","align-items-center","my-5"],[1,"col-12","col-md-10","col-lg-6","col-xl-6","mx-md-auto","py-lg-4","py-0",3,"ngClass"],[1,"card","shadow-sm",3,"id","mouseenter","mouseleave"],[1,"card-body","p-4"],[1,"card-title","mb-4"],["class","card-text",4,"ngFor","ngForOf"],[1,"d-none","d-md-block","col-md-9","col-lg-6","col-xl-5","order-md-first","mx-md-auto","py-lg-4","pb-4",3,"ngClass"],["alt","",1,"img-fluid",3,"src"],[1,"card-text"],["role","progressbar"],[3,"id"]],template:function(n,r){1&n&&(e._UZ(0,"app-hero",0),e.TgZ(1,"div",1),e.YNc(2,x,10,14,"div",2),e.qZA()),2&n&&(e.Q6J("heroImage",r.imgPath)("heroText",r.heroText)("heroDesc",r.heroDesc)("heroImageLeft",!0),e.xp6(2),e.Q6J("ngForOf",r.skillSet))},dependencies:[u.mk,u.sg,m.x],styles:["h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Geologica,Poppins,sans-serif;transition:all 1s ease}.progress-bar[_ngcontent-%COMP%]{width:0;transition:all 1s ease}.progress[_ngcontent-%COMP%]{height:15px;border-radius:3px;transition:background-color .5s ease-out}.card[_ngcontent-%COMP%]{transition:.5s}.card-hovered[_ngcontent-%COMP%]{transform:translateY(-15px)}"]}),t})();var k=c(6208),a=c(6538);const g=[{path:"",component:_}];let i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(g),a.Bz]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[k.m,i]}),t})()}}]);