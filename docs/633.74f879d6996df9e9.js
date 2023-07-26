"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[633],{1633:(p,l,s)=>{s.r(l),s.d(l,{ResumeModule:()=>n,ResumeRoutingModule:()=>c});var e=s(4946),m=s(7708);let u=(()=>{class t{constructor(){this.imgPath="resume_img.png",this.heroText="Here's my R\xe9sum\xe9",this.heroDesc="Curriculum Vitae, as they call it",this.resumeSrc="assets/resume/resume.png",this.resumePdfSrc="assets/resume/resume.pdf",this.observer=new IntersectionObserver(o=>{const r=o[0].target;o[0].isIntersecting?(r.classList.add("shadow-lg"),r.classList.replace("p-4","p-3")):(r.classList.remove("shadow-lg"),r.classList.replace("p-3","p-4"))},{threshold:[.2,.5,.8,1]})}ngOnInit(){window.scroll(0,0)}ngAfterViewInit(){const o=document.querySelector("#resume-preview");o&&this.observer.observe(o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-resume"]],decls:30,vars:6,consts:[[3,"heroImage","heroText","heroDesc","heroImageLeft"],[1,"container","p-3"],[1,"row","justify-content-center"],[1,"col-12"],["id","pdfModal","tabindex","-1",1,"modal","fade"],[1,"modal-dialog","modal-fullscreen"],[1,"modal-content"],[1,"modal-header"],["id","pdfModalLabel",1,"modal-title","fs-5"],["title","close","type","button","data-bs-dismiss","modal",1,"btn"],[1,"fa-solid","fa-circle-xmark","fa-2xl"],[1,"modal-body","text-center"],["src",e.$Z9`assets/resume/resume.pdf`],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","download","resume_Sujit-Aluru",1,"btn","btn-primary","text-light",3,"href"],[1,"fa-solid","fa-circle-down"],["id","resume-preview",1,"container","p-4","border","border-secondary-subtle","mt-3","mb-5"],[1,"row","justify-content-center","align-items-center"],[1,"col-12","position-relative"],["title","pdf preview","type","button","data-bs-toggle","modal","data-bs-target","#pdfModal",1,"btn","btn-outline-light","border","border-secondary-subtle","position-absolute","top-0","start-100","translate-middle"],[1,"display-6"],[1,"fa-solid","fa-file-pdf","text-danger"],["alt","resume",1,"img-fluid",3,"src"]],template:function(o,r){1&o&&(e._UZ(0,"app-hero",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._uU(9,"PREVIEW"),e.qZA(),e.TgZ(10,"a",9),e._UZ(11,"i",10),e.qZA()(),e.TgZ(12,"div",11),e._UZ(13,"embed",12),e.qZA(),e.TgZ(14,"div",13)(15,"a",14),e._uU(16,"Close"),e.qZA(),e.TgZ(17,"a",15),e._uU(18," Download \xa0 "),e._UZ(19,"i",16),e.qZA()()()()(),e.TgZ(20,"div",17)(21,"div",18)(22,"div",19)(23,"button",20)(24,"h6",21),e._UZ(25,"i",22),e.qZA()(),e._UZ(26,"img",23),e.qZA()()(),e.TgZ(27,"div",1)(28,"div",2),e._UZ(29,"div",3),e.qZA()()),2&o&&(e.Q6J("heroImage",r.imgPath)("heroText",r.heroText)("heroDesc",r.heroDesc)("heroImageLeft",!1),e.xp6(17),e.Q6J("href",r.resumePdfSrc,e.LSH),e.xp6(9),e.Q6J("src",r.resumeSrc,e.LSH))},dependencies:[m.x],styles:[".container[_ngcontent-%COMP%]{transition:all 1s ease-out}h1[_ngcontent-%COMP%]{font-family:Geologica,Poppins,sans-serif;font-weight:500;letter-spacing:.4rem}.border[_ngcontent-%COMP%]{border-radius:10px}embed[_ngcontent-%COMP%]{width:100%;height:100vh}a[_ngcontent-%COMP%]{text-decoration:none}h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{vertical-align:bottom}.start-100[_ngcontent-%COMP%]{left:90%!important}.top-0[_ngcontent-%COMP%]{top:5%!important}"]}),t})();var h=s(6208),d=s(6538);const i=[{path:"",component:u}];let c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(i),d.Bz]}),t})(),n=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.m,c]}),t})()},7708:(p,l,s)=>{s.d(l,{x:()=>d});var e=s(4946),m=s(7157),u=s(6814);const h=function(i){return{"order-xl-last":i}};let d=(()=>{class i{constructor(n){this.sharedService=n,this.prevId=0,this.currId=0,this.transitionAnimation="",this.observer=new IntersectionObserver(t=>{const a=t[0].target;if(t[0].isIntersecting){const o=t[0].target.children[0].children[0],r=t[0].target.children[1];o.classList.remove("opacity-0"),o.classList.add(this.transitionAnimation),setTimeout(()=>{r.classList.remove("opacity-0"),r.classList.add(this.transitionAnimation)},200),this.observer.unobserve(a)}},{threshold:[.3,.4,.5,.6]})}ngOnInit(){this.prevId=this.sharedService.pageNavs.map(n=>n.path).indexOf(this.sharedService.previousPath),this.currId=this.sharedService.pageNavs.map(n=>n.path).indexOf(this.sharedService.currPath),this.transitionAnimation=this.currId>=this.prevId?"slide-in-left":"slide-in-right"}ngAfterViewInit(){const n=document.querySelector(".hero-section-container");n&&this.observer.observe(n)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(m.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-hero"]],inputs:{heroImage:"heroImage",heroText:"heroText",heroDesc:"heroDesc",heroImageLeft:"heroImageLeft"},decls:9,vars:6,consts:[[1,"container-fluid","px-5","bg-light","vw-100"],[1,"row","mx-auto","mt-5","justify-content-center","hero-section-container","align-items-lg-baseline"],[1,"col-12","col-xl-6","text-center",3,"ngClass"],["width","600","height","600","alt","Hero image",1,"img-fluid","mb-4","hero-section","opacity-0",3,"src"],[1,"col-12","col-xl-6","text-center","hero-section","opacity-0"],[1,"display-4","mt-0","mb-1"],[1,"lead","fs-3","text-black-50"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h1",5),e._uU(6),e.qZA(),e.TgZ(7,"p",6),e._uU(8),e.qZA()()()()),2&n&&(e.xp6(2),e.Q6J("ngClass",e.VKq(4,h,t.heroImageLeft)),e.xp6(1),e.Q6J("src","assets/"+t.heroImage,e.LSH),e.xp6(3),e.Oqu(t.heroText),e.xp6(2),e.Oqu(t.heroDesc))},dependencies:[u.mk],styles:["h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:900;letter-spacing:.1rem}p[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:200}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-left .7s cubic-bezier(.25,.46,.45,.94)}.slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-right .7s cubic-bezier(.25,.46,.45,.94)}@keyframes _ngcontent-%COMP%_fade-in-from-left{0%{opacity:0;filter:blur(10px);transform:translate(-100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}@keyframes _ngcontent-%COMP%_fade-in-from-right{0%{opacity:0;filter:blur(10px);transform:translate(100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}"]}),i})()}}]);