"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[576],{7708:(C,m,a)=>{a.d(m,{x:()=>k});var e=a(4946),h=a(7157),b=a(6814);const _=function(c){return{"order-xl-last":c}};let k=(()=>{class c{constructor(r){this.sharedService=r,this.prevId=0,this.currId=0,this.transitionAnimation="",this.observer=new IntersectionObserver(l=>{const f=l[0].target;if(l[0].isIntersecting){const v=l[0].target.children[0].children[0],p=l[0].target.children[1];v.classList.remove("opacity-0"),v.classList.add(this.transitionAnimation),setTimeout(()=>{p.classList.remove("opacity-0"),p.classList.add(this.transitionAnimation)},200),this.observer.unobserve(f)}},{threshold:[.3,.4,.5,.6]})}ngOnInit(){this.prevId=this.sharedService.pageNavs.map(r=>r.path).indexOf(this.sharedService.previousPath),this.currId=this.sharedService.pageNavs.map(r=>r.path).indexOf(this.sharedService.currPath),this.transitionAnimation=this.currId>=this.prevId?"slide-in-left":"slide-in-right"}ngAfterViewInit(){const r=document.querySelector(".hero-section-container");r&&this.observer.observe(r)}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(h.F))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-hero"]],inputs:{heroImage:"heroImage",heroText:"heroText",heroDesc:"heroDesc",heroImageLeft:"heroImageLeft"},decls:9,vars:6,consts:[[1,"container-fluid","px-5","bg-light","vw-100"],[1,"row","mx-auto","mt-5","justify-content-center","hero-section-container","align-items-lg-baseline"],[1,"col-12","col-xl-6","text-center",3,"ngClass"],["width","600","height","600","alt","Hero image",1,"img-fluid","mb-4","hero-section","opacity-0",3,"src"],[1,"col-12","col-xl-6","text-center","hero-section","opacity-0"],[1,"display-4","mt-0","mb-1"],[1,"lead","fs-3","text-black-50"]],template:function(r,l){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h1",5),e._uU(6),e.qZA(),e.TgZ(7,"p",6),e._uU(8),e.qZA()()()()),2&r&&(e.xp6(2),e.Q6J("ngClass",e.VKq(4,_,l.heroImageLeft)),e.xp6(1),e.Q6J("src","assets/"+l.heroImage,e.LSH),e.xp6(3),e.Oqu(l.heroText),e.xp6(2),e.Oqu(l.heroDesc))},dependencies:[b.mk],styles:["h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:900;letter-spacing:.1rem}p[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:200}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-left .7s cubic-bezier(.25,.46,.45,.94)}.slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-right .7s cubic-bezier(.25,.46,.45,.94)}@keyframes _ngcontent-%COMP%_fade-in-from-left{0%{opacity:0;filter:blur(10px);transform:translate(-100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}@keyframes _ngcontent-%COMP%_fade-in-from-right{0%{opacity:0;filter:blur(10px);transform:translate(100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}"]}),c})()},3576:(C,m,a)=>{a.r(m),a.d(m,{SkillsModule:()=>y,SkillsRoutingModule:()=>p});var e=a(4946),h=a(6814),b=a(7708);function _(s,n){if(1&s&&(e.TgZ(0,"div",11)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"div",12),e._UZ(4,"div",13),e.qZA()()),2&s){const i=n.$implicit,t=e.oxw().index;e.xp6(1),e.Tol("fw-light text-secondary mb-2 mt-4 fs-4 card-child"+t),e.xp6(1),e.hij(" ",i.skill," "),e.xp6(1),e.Tol("progress card-child"+t),e.xp6(1),e.Tol("progress-bar bg-secondary card-child"+t),e.Q6J("id",i.id+"."+i.percentage)}}const k=function(s,n){return{"order-lg-last ms-lg-auto":s,"order-lg-first me-lg-auto":n}},c=function(s,n){return{"me-lg-auto":s,"ms-lg-auto":n}};function u(s,n){if(1&s){const i=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5),e.NdJ("mouseenter",function(d){e.CHM(i);const g=e.oxw();return e.KtG(g.onHover(d))})("mouseleave",function(d){e.CHM(i);const g=e.oxw();return e.KtG(g.onHover(d))}),e.TgZ(3,"div",6)(4,"div",7)(5,"h3"),e._uU(6),e.qZA()(),e.YNc(7,_,5,8,"div",8),e.qZA()()(),e.TgZ(8,"div",9),e._UZ(9,"img",10),e.qZA()()}if(2&s){const i=n.$implicit,t=n.index;e.xp6(1),e.Q6J("ngClass",e.WLB(8,k,t%2!=0,t%2==0)),e.xp6(1),e.Q6J("id","card"+t),e.xp6(3),e.Tol("card-title display-6 text-black-50 fw-bold card-child"+t),e.xp6(1),e.hij(" ",i.domain," "),e.xp6(1),e.Q6J("ngForOf",i.skills),e.xp6(1),e.Q6J("ngClass",e.WLB(11,c,t%2!=0,t%2==0)),e.xp6(1),e.Q6J("src","assets/skills/"+i.image,e.LSH)}}let r=(()=>{class s{constructor(){this.imgPath="skills_img.png",this.heroText="My Skills & Proficiency",this.heroDesc="in Web Design & Development",this.mouseHovered=!1,this.skillSet=[{domain:"Programming Languages",image:"programming_img.png",skills:[{id:"pb00",skill:"C",percentage:50},{id:"pb01",skill:"C++",percentage:40},{id:"pb02",skill:"Python",percentage:60},{id:"pb03",skill:"JavaScript",percentage:70},{id:"pb04",skill:"TypeScript",percentage:65},{id:"pb05",skill:"Java",percentage:30}]},{domain:"Web Development",image:"web_dev_img.png",skills:[{id:"pb10",skill:"HTML5",percentage:90},{id:"pb11",skill:"CSS3",percentage:80},{id:"pb12",skill:"Angular",percentage:70},{id:"pb13",skill:"Bootstrap",percentage:85},{id:"pb14",skill:"Responsive Web Design",percentage:90},{id:"pb15",skill:"Version Control System (GIT)",percentage:65},{id:"pb16",skill:"APIs & Integration",percentage:65},{id:"pb17",skill:"Node.js",percentage:40},{id:"pb18",skill:"MongoDB",percentage:35}]},{domain:"Creative Suite",image:"creative_suite_img.png",skills:[{id:"pb20",skill:"Adobe InDesign",percentage:55},{id:"pb21",skill:"Adobe Illustrator",percentage:30},{id:"pb22",skill:"Figma",percentage:45}]},{domain:"Miscellaneous",image:"misc_img.png",skills:[{id:"pb30",skill:"Problem Solving",percentage:80},{id:"pb31",skill:"Troubleshooting",percentage:65},{id:"pb32",skill:"Root Cause Analysis",percentage:90},{id:"pb33",skill:"Communication",percentage:75}]}],this.observer=new IntersectionObserver(i=>{if(i[0].isIntersecting){const t=i[0].target,d=t.id,g=d.charAt(d.length-1);t.querySelectorAll(".card-child"+g).forEach((o,I)=>{if("DIV"===o.tagName&&o.hasAttribute("id")){const S=o.id.split(".")[1];setTimeout(()=>{o.setAttribute("style",`width: ${S}%`)},10*I)}else"P"===o.tagName?o.classList.replace("text-secondary","text-secondary-emphasis"):(o.classList.replace("text-black-50","text-info-emphasis"),o.classList.replace("fw-bold","fw-bolder"))}),this.observer.unobserve(t)}},{threshold:[.5,.8,1]})}ngOnInit(){window.scroll(0,0)}ngAfterViewInit(){document.querySelectorAll(".card").forEach(t=>{this.observer.observe(t)})}onHover(i){this.mouseHovered="mouseenter"===i.type;const t=i.target,d=t.id,g=d.charAt(d.length-1),x=t.querySelectorAll(".card-child"+g);this.mouseHovered?(t.classList.add("card-hovered"),t.classList.replace("shadow-sm","shadow-lg"),x.forEach(o=>{"DIV"===o.tagName&&(o.hasAttribute("id")?o.classList.replace("bg-secondary","bg-dark-teal"):o.classList.add("bg-light-gray"))})):(t.classList.remove("card-hovered"),t.classList.replace("shadow-lg","shadow-sm"),x.forEach(o=>{"DIV"===o.tagName&&(o.hasAttribute("id")?o.classList.replace("bg-dark-teal","bg-secondary"):o.classList.remove("bg-light-gray"))}))}}return s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-skills"]],decls:3,vars:5,consts:[[3,"heroImage","heroText","heroDesc","heroImageLeft"],[1,"container"],["class","row align-items-center my-5",4,"ngFor","ngForOf"],[1,"row","align-items-center","my-5"],[1,"col-12","col-md-10","col-lg-6","col-xl-6","mx-md-auto","py-lg-4","py-0",3,"ngClass"],[1,"card","shadow-sm",3,"id","mouseenter","mouseleave"],[1,"card-body","p-4"],[1,"card-title","mb-4"],["class","card-text",4,"ngFor","ngForOf"],[1,"d-none","d-md-block","col-md-9","col-lg-6","col-xl-5","order-md-first","mx-md-auto","py-lg-4","pb-4",3,"ngClass"],["alt","",1,"img-fluid",3,"src"],[1,"card-text"],["role","progressbar"],[3,"id"]],template:function(i,t){1&i&&(e._UZ(0,"app-hero",0),e.TgZ(1,"div",1),e.YNc(2,u,10,14,"div",2),e.qZA()),2&i&&(e.Q6J("heroImage",t.imgPath)("heroText",t.heroText)("heroDesc",t.heroDesc)("heroImageLeft",!0),e.xp6(2),e.Q6J("ngForOf",t.skillSet))},dependencies:[h.mk,h.sg,b.x],styles:["h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Geologica,Poppins,sans-serif;transition:all 1s ease}.progress-bar[_ngcontent-%COMP%]{width:0;transition:all 1s ease}.progress[_ngcontent-%COMP%]{height:15px;border-radius:3px;transition:background-color .5s ease-out}.card[_ngcontent-%COMP%]{transition:.5s}.card-hovered[_ngcontent-%COMP%]{transform:translateY(-15px)}"]}),s})();var l=a(6208),f=a(6538);const v=[{path:"",component:r}];let p=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[f.Bz.forChild(v),f.Bz]}),s})(),y=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[l.m,p]}),s})()}}]);