"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[922],{5525:(M,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>w});var u=o(2302),a=o(7423),l=o(6236),d=o(1799),h=o(8929),m=o(7739),g=o(537),x=o(3489);class f{constructor(i,n){this.predicate=i,this.inclusive=n}call(i,n){return n.subscribe(new v(i,this.predicate,this.inclusive))}}class v extends x.L{constructor(i,n,s){super(i),this.predicate=n,this.inclusive=s,this.index=0}_next(i){const n=this.destination;let s;try{s=this.predicate(i,this.index++)}catch(b){return void n.error(b)}this.nextOrComplete(i,s)}nextOrComplete(i,n){const s=this.destination;Boolean(n)?s.next(i):(this.inclusive&&s.next(i),s.complete())}}var A=o(7625),S=o(2994),t=o(5e3),O=o(8951),r=o(9808);function Z(e,i){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,n.countdown,n.countdownMapping)," ")}}function y(e,i){1&e&&(t.ynx(0),t._uU(1," \xa1Est\xe1 siendo redireccionado a la secci\xf3n de productos! "),t.BQk())}const T=function(){return["/sign-in"]},C=[{path:"",component:(()=>{class e{constructor(n,s){this._authService=n,this._router=s,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new h.xQ}ngOnInit(){this._authService.signOut(),(0,m.H)(1e3,1e3).pipe((0,g.x)(()=>{this._router.navigate(["sign-in"])}),function p(e,i=!1){return n=>n.lift(new f(e,i))}(()=>this.countdown>0),(0,A.R)(this._unsubscribeAll),(0,S.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.e),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo-athgro.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"\xa1Ha cerrado sesi\xf3n correctamente!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,Z,3,4,"ng-container",7),t.YNc(9,y,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"span"),t._uU(12,"Ir a"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Iniciar Sesi\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(8),t.Q6J("ngIf",s.countdown>0),t.xp6(1),t.Q6J("ngIf",0===s.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,T)))},directives:[r.O5,u.yS],pipes:[r.Gx],encapsulation:2}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(C),a.ot,l.J,d.m]]}),e})()}}]);