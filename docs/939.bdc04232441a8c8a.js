"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[939],{3939:(b,d,a)=>{a.r(d),a.d(d,{ResumeModule:()=>c,ResumeRoutingModule:()=>r});var e=a(4946),u=a(8670),l=a(969);const h=["root"],f=["resumePreview"];let g=(()=>{class t{constructor(o){this.sharedService=o,this.imgPath="resume_img.png",this.heroText="Here's my R\xe9sum\xe9",this.heroDesc="Curriculum Vitae, as they call it",this.resumeSrc="assets/resume/resume.png",this.resumePdfSrc="assets/resume/resume.pdf",this.observer=new IntersectionObserver(i=>{const s=i[0].target;i[0].isIntersecting?(s.classList.add("shadow-lg"),s.classList.replace("p-4","p-3")):(s.classList.remove("shadow-lg"),s.classList.replace("p-3","p-4"))},{threshold:[.2,.5,.8,1]})}ngOnInit(){window.scroll(0,0)}ngAfterViewInit(){this.sharedService.scrollIntoView(this.root.nativeElement),this.cardInView.nativeElement&&this.observer.observe(this.cardInView.nativeElement)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-resume"]],viewQuery:function(o,i){if(1&o&&(e.Gf(h,5),e.Gf(f,5)),2&o){let s;e.iGM(s=e.CRH())&&(i.root=s.first),e.iGM(s=e.CRH())&&(i.cardInView=s.first)}},decls:33,vars:6,consts:[[3,"heroImage","heroText","heroDesc","heroImageLeft"],[1,"container","p-3"],[1,"row","justify-content-center"],[1,"col-12"],["id","pdfModal","tabindex","-1",1,"modal","fade"],[1,"modal-dialog","modal-fullscreen"],[1,"modal-content"],[1,"modal-header"],["id","pdfModalLabel",1,"modal-title","fs-5"],["title","close","type","button","data-bs-dismiss","modal",1,"btn"],[1,"fa-solid","fa-circle-xmark","fa-2xl"],[1,"modal-body","text-center"],["src",e.$Z9`assets/resume/resume.pdf`],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","download","resume_Sujit-Aluru",1,"btn","btn-primary","text-light",3,"href"],[1,"fa-solid","fa-circle-down"],[1,"container"],["root",""],["id","resume-preview",1,"container","p-4","border","border-secondary-subtle","mt-3","mb-5"],["resumePreview",""],[1,"row","justify-content-center","align-items-center"],[1,"col-12","position-relative"],["title","pdf preview","type","button","data-bs-toggle","modal","data-bs-target","#pdfModal",1,"btn","btn-outline-light","rounded-1","position-absolute","top-0","start-100","translate-middle"],[1,"display-6"],[1,"fa-solid","fa-file-pdf","text-danger"],["alt","resume",1,"img-fluid",3,"src"]],template:function(o,i){1&o&&(e._UZ(0,"app-hero",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._uU(9,"PREVIEW"),e.qZA(),e.TgZ(10,"a",9),e._UZ(11,"i",10),e.qZA()(),e.TgZ(12,"div",11),e._UZ(13,"embed",12),e.qZA(),e.TgZ(14,"div",13)(15,"a",14),e._uU(16,"Close"),e.qZA(),e.TgZ(17,"a",15),e._uU(18," Download \xa0 "),e._UZ(19,"i",16),e.qZA()()()()(),e.TgZ(20,"div",17,18)(22,"div",19,20)(24,"div",21)(25,"div",22)(26,"button",23)(27,"h6",24),e._UZ(28,"i",25),e.qZA()(),e._UZ(29,"img",26),e.qZA()()()(),e.TgZ(30,"div",1)(31,"div",2),e._UZ(32,"div",3),e.qZA()()),2&o&&(e.Q6J("heroImage",i.imgPath)("heroText",i.heroText)("heroDesc",i.heroDesc)("heroImageLeft",!1),e.xp6(17),e.Q6J("href",i.resumePdfSrc,e.LSH),e.xp6(12),e.Q6J("src",i.resumeSrc,e.LSH))},dependencies:[l.x],styles:[".container[_ngcontent-%COMP%]{transition:all 1s ease-out}h1[_ngcontent-%COMP%]{font-family:Geologica,Poppins,sans-serif;font-weight:500;letter-spacing:.4rem}.border[_ngcontent-%COMP%]{border-radius:10px}embed[_ngcontent-%COMP%]{width:100%;height:100vh}a[_ngcontent-%COMP%]{text-decoration:none}h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{vertical-align:bottom}.start-100[_ngcontent-%COMP%]{left:90%!important}.top-0[_ngcontent-%COMP%]{top:5%!important}"]}),t})();var p=a(6982),m=a(33);const v=[{path:"",component:g}];let r=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(v),m.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.m,r]}),t})()},969:(b,d,a)=>{a.d(d,{x:()=>v});var e=a(4946),u=a(8670),l=a(6814),h=a(33);const f=["heroSectionContainer"];function g(r,c){if(1&r&&(e.TgZ(0,"a",15),e._UZ(1,"i",16)(2,"i",17),e.qZA()),2&r){const t=e.oxw();e.Q6J("routerLink","/"+t.sharedService.prevPage)}}function p(r,c){if(1&r&&(e.TgZ(0,"a",18),e._UZ(1,"i",19)(2,"i",20),e.qZA()),2&r){const t=e.oxw();e.Q6J("routerLink","/"+t.sharedService.nextPage)}}const m=function(r){return{"order-xl-last":r}};let v=(()=>{class r{constructor(t){this.sharedService=t,this.prevId=0,this.currId=0,this.transitionAnimation="",this.observer=new IntersectionObserver(n=>{const o=n[0].target;if(n[0].isIntersecting){const i=n[0].target.children[0].children[0],s=n[0].target.children[1];i.classList.remove("opacity-0"),i.classList.add(this.transitionAnimation),setTimeout(()=>{s.classList.remove("opacity-0"),s.classList.add(this.transitionAnimation)},200),this.observer.unobserve(o)}},{threshold:[.3,.4,.5,.6]})}ngOnInit(){this.prevId=this.sharedService.pageNavs.map(t=>t.path).indexOf(this.sharedService.previousPath),this.currId=this.sharedService.pageNavs.map(t=>t.path).indexOf(this.sharedService.currPath),this.sharedService.nextPage=this.currId<4?this.sharedService.pageNavs[this.currId+1].path:"",this.sharedService.prevPage=this.currId>0?this.sharedService.pageNavs[this.currId-1].path:"",this.transitionAnimation=this.currId>=this.prevId?"slide-in-left":"slide-in-right"}ngAfterViewInit(){this.observer.observe(this.heroSectionContainer.nativeElement)}goDown(){this.sharedService.updateScrollStatus(!0)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.F))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-hero"]],viewQuery:function(t,n){if(1&t&&e.Gf(f,5),2&t){let o;e.iGM(o=e.CRH())&&(n.heroSectionContainer=o.first)}},inputs:{heroImage:"heroImage",heroText:"heroText",heroDesc:"heroDesc",heroImageLeft:"heroImageLeft"},decls:17,vars:8,consts:[[1,"container-fluid","px-lg-5","bg-light","vw-100"],[1,"row","mx-auto","mt-5","justify-content-center","hero-section-container","align-items-lg-center"],["heroSectionContainer",""],[1,"col-12","col-xl-6","text-center",3,"ngClass"],["width","600","height","600","priority","true","alt","Hero image",1,"img-fluid","mb-4","hero-section","opacity-0",3,"ngSrc"],[1,"col-12","col-xl-6","text-center","hero-section","opacity-0"],[1,"row"],[1,"col-12"],[1,"display-4","mt-0","mb-1"],[1,"lead","fs-3","text-black-50"],[1,"btn","d-none","d-lg-inline-block","rounded-5","scroll-down",3,"click"],[1,"fa-solid","fa-arrow-down","fa-2xl","py-4","fs-1"],[1,"col-12","my-2","mx-auto","order-lg-first"],["class","btn btn-lg btn-outline-dark border border-dark border-0 rounded-5 nav-icon px-3 mx-4 nav-icon-left",3,"routerLink",4,"ngIf"],["class","btn btn-lg btn-outline-dark border border-dark border-0 rounded-5 nav-icon px-3 mx-4 nav-icon-right",3,"routerLink",4,"ngIf"],[1,"btn","btn-lg","btn-outline-dark","border","border-dark","border-0","rounded-5","nav-icon","px-3","mx-4","nav-icon-left",3,"routerLink"],[1,"fa-solid","fa-caret-left","fa-2xl"],[1,"fa-solid","fa-caret-left","fa-xl"],[1,"btn","btn-lg","btn-outline-dark","border","border-dark","border-0","rounded-5","nav-icon","px-3","mx-4","nav-icon-right",3,"routerLink"],[1,"fa-solid","fa-caret-right","fa-xl"],[1,"fa-solid","fa-caret-right","fa-2xl"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._uU(9),e.qZA(),e.TgZ(10,"p",9),e._uU(11),e.qZA(),e.TgZ(12,"button",10),e.NdJ("click",function(){return n.goDown()}),e._UZ(13,"i",11),e.qZA()(),e.TgZ(14,"div",12),e.YNc(15,g,3,1,"a",13),e.YNc(16,p,3,1,"a",14),e.qZA()()()()()),2&t&&(e.xp6(3),e.Q6J("ngClass",e.VKq(6,m,n.heroImageLeft)),e.xp6(1),e.Q6J("ngSrc","assets/"+n.heroImage),e.xp6(5),e.Oqu(n.heroText),e.xp6(2),e.Oqu(n.heroDesc),e.xp6(4),e.Q6J("ngIf",n.sharedService.prevPage),e.xp6(1),e.Q6J("ngIf",n.sharedService.nextPage))},dependencies:[l.mk,l.O5,h.rH,l.Zd],styles:["h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:900;letter-spacing:.1rem}p[_ngcontent-%COMP%]{font-family:Geologica,sans-serif;font-weight:200}.scroll-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_goDown 2s ease infinite}.nav-icon[_ngcontent-%COMP%]{font-size:xx-large;transition:all .2s ease-in-out}.nav-icon-down[_ngcontent-%COMP%]:hover{transform:translateY(10px) scale(1.2)}.nav-icon-left[_ngcontent-%COMP%]:hover{transform:translate(-10px) scale(1.2)}.nav-icon-right[_ngcontent-%COMP%]:hover{transform:translate(10px) scale(1.2)}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-left .7s cubic-bezier(.25,.46,.45,.94)}.slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in-from-right .7s cubic-bezier(.25,.46,.45,.94)}@keyframes _ngcontent-%COMP%_fade-in-from-left{0%{opacity:0;filter:blur(10px);transform:translate(-100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}@keyframes _ngcontent-%COMP%_fade-in-from-right{0%{opacity:0;filter:blur(10px);transform:translate(100px)}to{opacity:1;filter:blur(0);transform:translate(0)}}@keyframes _ngcontent-%COMP%_goDown{0%{transform:translateY(0);background:none;color:#212529}50%{transform:translateY(15px);background-color:#212529;color:#fff}to{transform:translateY(0);background:none;color:#212529}}"]}),r})()}}]);