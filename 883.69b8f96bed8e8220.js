"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[883],{2883:(N,m,o)=>{o.r(m),o.d(m,{AuthForgotPasswordModule:()=>J});var g=o(9516),d=o(7423),i=o(7322),c=o(5245),u=o(7531),f=o(773),p=o(3214),h=o(7328),Z=o(1987),n=o(3075),w=o(537),v=o(5700),e=o(5e3),x=o(8951),A=o(9808),y=o(6307);const F=["forgotPasswordNgForm"];function T(t,a){if(1&t&&(e.TgZ(0,"fuse-alert",37),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),e.xp6(1),e.hij(" ",r.alert.message," ")}}function P(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Correo electr\xf3nico obligatorio "),e.qZA())}function b(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),e.qZA())}function U(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1," Recibir enlace para cambiar la contrase\xf1a "),e.qZA())}function C(t,a){1&t&&e._UZ(0,"mat-progress-spinner",38),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const q=function(){return["/sign-in"]},I=[{path:"",component:(()=>{class t{constructor(r,s){this._authService=r,this._formBuilder=s,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[n.kI.required,n.kI.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,w.x)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(r=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},r=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(x.e),e.Y36(n.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-forgot-password"]],viewQuery:function(r,s){if(1&r&&e.Gf(F,5),2&r){let l;e.iGM(l=e.CRH())&&(s.forgotPasswordNgForm=l.first)}},decls:55,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],["href","https://athendat.site","target","_blank",1,"text-blue-400","hover:underline"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Olvid\xf3 su contrase\xf1a?"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Ingrese su correo para cambiar su contrase\xf1a"),e.qZA(),e.YNc(9,T,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9),e.TgZ(12,"mat-form-field",10),e.TgZ(13,"mat-label"),e._uU(14,"Correo electr\xf3nico"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,P,2,0,"mat-error",12),e.YNc(17,b,2,0,"mat-error",12),e.qZA(),e.TgZ(18,"button",13),e.NdJ("click",function(){return s.sendResetLink()}),e.YNc(19,U,2,0,"span",12),e.YNc(20,C,1,2,"mat-progress-spinner",14),e.qZA(),e.TgZ(21,"div",15),e.TgZ(22,"span"),e._uU(23,"Regresar a "),e.qZA(),e.TgZ(24,"a",16),e._uU(25,"Iniciar Sesi\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",17),e.O4$(),e.TgZ(27,"svg",18),e.TgZ(28,"g",19),e._UZ(29,"circle",20),e._UZ(30,"circle",21),e.qZA(),e.qZA(),e.TgZ(31,"svg",22),e.TgZ(32,"defs"),e.TgZ(33,"pattern",23),e._UZ(34,"rect",24),e.qZA(),e.qZA(),e._UZ(35,"rect",25),e.qZA(),e.kcU(),e.TgZ(36,"div",26),e.TgZ(37,"div",27),e.TgZ(38,"div"),e._uU(39,"Bienvenido a"),e.qZA(),e.TgZ(40,"div"),e._uU(41,"nuestra plataforma"),e.qZA(),e.qZA(),e.TgZ(42,"div",28),e._uU(43," ATHENDAT es una plataforma en l\xednea de aplicaciones empresariales destinada a desarrollar y potenciar al m\xe1ximo los beneficios de los negocios cubanos ofreciendo herramientas modernas, flexibles y robustas que garanticen el cumplimiento normativo de nuestro pa\xeds. "),e.qZA(),e.TgZ(44,"div",29),e.TgZ(45,"div",30),e._UZ(46,"img",31),e._UZ(47,"img",32),e._UZ(48,"img",33),e._UZ(49,"img",34),e.qZA(),e.TgZ(50,"div",35),e._uU(51,"Para m\xe1s detalles consulte nuestra "),e.TgZ(52,"a",36),e._uU(53,"web"),e.qZA(),e._uU(54,"."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(9),e.Q6J("ngIf",s.showAlert),e.xp6(1),e.Q6J("formGroup",s.forgotPasswordForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",s.forgotPasswordForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",s.forgotPasswordForm.get("email").hasError("email")),e.xp6(1),e.Q6J("color","primary")("disabled",s.forgotPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",!s.forgotPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",s.forgotPasswordForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(10,q)))},directives:[A.O5,n._Y,n.JL,n.sg,i.KE,i.hX,u.Nt,n.Fj,n.JJ,n.u,d.lW,g.yS,y.W,i.TO,f.Ou],encapsulation:2,data:{animation:v.L}}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(I),d.ot,i.lN,c.Ps,u.c,f.Cq,p.J,h.fC,Z.m]]}),t})()}}]);