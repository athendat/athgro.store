"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[890],{8890:(H,g,i)=>{i.r(g),i.d(g,{AuthSignUpModule:()=>$});var p=i(9516),c=i(7423),d=i(7446),u=i(7322),f=i(5245),h=i(7531),Z=i(773),A=i(3214),x=i(7328),_=i(1987),s=i(3075),v=i(5700),e=i(5e3),T=i(8951),y=i(9808),w=i(6307);const b=["signUpNgForm"];function C(t,n){if(1&t&&(e.TgZ(0,"fuse-alert",46),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),e.xp6(1),e.hij(" ",r.alert.message," ")}}function F(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es obligatorio "),e.qZA())}function q(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El correo electr\xf3nico es obligatorio "),e.qZA())}function I(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),e.qZA())}function S(t,n){1&t&&e._UZ(0,"mat-icon",47),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function J(t,n){1&t&&e._UZ(0,"mat-icon",47),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function N(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),e.qZA())}function E(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.signUpForm.get("password").getError("password")," ")}}function Q(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function Y(t,n){1&t&&e._UZ(0,"mat-icon",47),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function k(t,n){1&t&&e._UZ(0,"mat-icon",47),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function M(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),e.qZA())}function j(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function D(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.signUpForm.get("password2").getError("password")," ")}}function L(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),e.qZA())}function B(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Crear cuenta "),e.qZA())}function R(t,n){1&t&&e._UZ(0,"mat-progress-spinner",48),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const z=function(){return["/pages/authentication/sign-in"]},O=[{path:"",component:(()=>{class t{constructor(r,o,m){this._authService=r,this._formBuilder=o,this._router=m,this.alert={type:"success",message:""},this.showAlert=!1,this.signUpFormSubmitted=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({fullname:[null,s.kI.required],email:[null,[s.kI.required,s.kI.email]],password:[null,[s.kI.required,s.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],password2:[null,[s.kI.required,s.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],agreements:[!0,s.kI.requiredTrue]},{validators:this.mustMatch("password","password2")})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const r=this.signUpForm.getRawValue(),o=r.fullname.split(" ",3),m=r.email.split("@",2),l={name:o[0],lastname1:o[1],lastname2:o[2],email:r.email,username:m[0],password:r.password,agreements:r.agreements};this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(l).subscribe(a=>{console.log("Response: ",a),this._router.navigateByUrl("/confirmation-required")},a=>{console.warn("Error: ",a),this.signUpForm.enable(),this.signUpForm.reset(),this.alert={type:"error",message:`Algo sali\xf3 mal, por favor int\xe9ntelo nuevamente. \n\n                        ${a.error.message}\n                        `},this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}mustMatch(r,o){return m=>{const l=m.get(r),a=m.get(o);if(!l||!a||(a.hasError("mustMatch")&&(delete a.errors.mustMatch,a.updateValueAndValidity()),this._isEmptyInputValue(a.value)||l.value===a.value))return null;const U={mustMatch:"Las contrase\xf1a no coinciden"};return a.setErrors(U),U}}_isEmptyInputValue(r){return null==r||0===r.length}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(T.e),e.Y36(s.qu),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(r,o){if(1&r&&e.Gf(b,5),2&r){let m;e.iGM(m=e.CRH())&&(o.signUpNgForm=m.first)}},decls:90,vars:28,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","fullname","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password2","matInput","","type","password",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],["href","https://athendat.site","target","_blank",1,"text-blue-400","hover:underline"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(r,o){if(1&r){const m=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Registro"),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div"),e._uU(9,"Ya tiene un cuenta?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Iniciar Sesi\xf3n "),e.qZA(),e.qZA(),e.YNc(12,C,2,5,"fuse-alert",8),e.TgZ(13,"form",9),e.TgZ(14,"mat-form-field",10),e.TgZ(15,"mat-label"),e._uU(16,"Nombre completo"),e.qZA(),e._UZ(17,"input",11),e.YNc(18,F,2,0,"mat-error",12),e.qZA(),e.TgZ(19,"mat-form-field",10),e.TgZ(20,"mat-label"),e._uU(21,"Correo electr\xf3nico"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,q,2,0,"mat-error",12),e.YNc(24,I,2,0,"mat-error",12),e.qZA(),e.TgZ(25,"mat-form-field",10),e.TgZ(26,"mat-label"),e._uU(27,"Contrase\xf1a"),e.qZA(),e._UZ(28,"input",14,15),e.TgZ(30,"button",16),e.NdJ("click",function(){e.CHM(m);const a=e.MAs(29);return a.type="password"===a.type?"text":"password"}),e.YNc(31,S,1,1,"mat-icon",17),e.YNc(32,J,1,1,"mat-icon",17),e.qZA(),e.YNc(33,N,2,0,"mat-error",12),e.YNc(34,E,2,1,"mat-error",12),e.YNc(35,Q,2,0,"mat-error",12),e.qZA(),e.TgZ(36,"mat-form-field",10),e.TgZ(37,"mat-label"),e._uU(38,"Repita la contrase\xf1a"),e.qZA(),e._UZ(39,"input",18,19),e.TgZ(41,"button",16),e.NdJ("click",function(){e.CHM(m);const a=e.MAs(40);return a.type="password"===a.type?"text":"password"}),e.YNc(42,Y,1,1,"mat-icon",17),e.YNc(43,k,1,1,"mat-icon",17),e.qZA(),e.YNc(44,M,2,0,"mat-error",12),e.YNc(45,j,2,0,"mat-error",12),e.YNc(46,D,2,1,"mat-error",12),e.qZA(),e.TgZ(47,"div",20),e.TgZ(48,"mat-checkbox",21),e.TgZ(49,"span"),e._uU(50,"Estoy de acuerdo con los"),e.qZA(),e.TgZ(51,"a",22),e._uU(52,"T\xe9rminos de Uso "),e.qZA(),e.TgZ(53,"span"),e._uU(54,"y la"),e.qZA(),e.TgZ(55,"a",23),e._uU(56,"Pol\xedtica de Privacidad "),e.qZA(),e.YNc(57,L,2,0,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(58,"button",24),e.NdJ("click",function(){return o.signUp()}),e.YNc(59,B,2,0,"span",12),e.YNc(60,R,1,2,"mat-progress-spinner",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(61,"div",26),e.O4$(),e.TgZ(62,"svg",27),e.TgZ(63,"g",28),e._UZ(64,"circle",29),e._UZ(65,"circle",30),e.qZA(),e.qZA(),e.TgZ(66,"svg",31),e.TgZ(67,"defs"),e.TgZ(68,"pattern",32),e._UZ(69,"rect",33),e.qZA(),e.qZA(),e._UZ(70,"rect",34),e.qZA(),e.kcU(),e.TgZ(71,"div",35),e.TgZ(72,"div",36),e.TgZ(73,"div"),e._uU(74,"Bienvenido a"),e.qZA(),e.TgZ(75,"div"),e._uU(76,"nuestra plataforma"),e.qZA(),e.qZA(),e.TgZ(77,"div",37),e._uU(78," ATHENDAT es una plataforma en l\xednea de aplicaciones empresariales destinada a desarrollar y potenciar al m\xe1ximo los beneficios de los negocios cubanos ofreciendo herramientas modernas, flexibles y robustas que garanticen el cumplimiento normativo de nuestro pa\xeds. "),e.qZA(),e.TgZ(79,"div",38),e.TgZ(80,"div",39),e._UZ(81,"img",40),e._UZ(82,"img",41),e._UZ(83,"img",42),e._UZ(84,"img",43),e.qZA(),e.TgZ(85,"div",44),e._uU(86,"Para m\xe1s detalles consulte nuestra "),e.TgZ(87,"a",45),e._uU(88,"web"),e.qZA(),e._uU(89,"."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const m=e.MAs(29),l=e.MAs(40);e.xp6(10),e.Q6J("routerLink",e.DdM(27,z)),e.xp6(2),e.Q6J("ngIf",o.showAlert),e.xp6(1),e.Q6J("formGroup",o.signUpForm),e.xp6(4),e.Q6J("formControlName","fullname"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("fullname").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===m.type),e.xp6(1),e.Q6J("ngIf","text"===m.type),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password").hasError("password")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password").hasError("required")),e.xp6(4),e.Q6J("formControlName","password2"),e.xp6(3),e.Q6J("ngIf","password"===l.type),e.xp6(1),e.Q6J("ngIf","text"===l.type),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password2").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("password2").hasError("password")),e.xp6(2),e.Q6J("color","primary")("formControlName","agreements"),e.xp6(9),e.Q6J("ngIf",o.acceptAgreements()),e.xp6(1),e.Q6J("color","primary")("disabled",o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",o.signUpForm.disabled)}},directives:[p.yS,y.O5,s._Y,s.JL,s.sg,u.KE,u.hX,h.Nt,s.Fj,s.JJ,s.u,c.lW,u.R9,d.oG,w.W,u.TO,f.Hw,Z.Ou],encapsulation:2,data:{animation:v.L}}),t})()}];let $=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(O),c.ot,d.p9,u.lN,f.Ps,h.c,Z.Cq,A.J,x.fC,_.m]]}),t})()}}]);