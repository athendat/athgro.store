"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[522],{5522:(rt,_,n)=>{n.r(_),n.d(_,{ProductsModule:()=>it});var a=n(2302),k=n(1330),J=n(6879),h=n(8929),u=n(7625),t=n(5e3),A=n(5245),T=n(2764),s=n(9808),y=n(7423);const p=function(o){return["/pages/products",o]};function Q(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",78),t.TgZ(2,"div",79),t._UZ(3,"img",80),t.TgZ(4,"div",81),t._uU(5),t.ALo(6,"percent"),t.qZA(),t.qZA(),t.TgZ(7,"div",82),t.TgZ(8,"div",83),t.TgZ(9,"a",84),t._uU(10),t.qZA(),t.TgZ(11,"div",20),t._UZ(12,"bar-rating",21),t.qZA(),t.TgZ(13,"div",25),t.TgZ(14,"div",26),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"div",27),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",85),t.TgZ(21,"button",86),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addProductToCart(l)}),t._uU(22," Agregar a la jaba "),t.qZA(),t.TgZ(23,"button",87),t._UZ(24,"mat-icon",66),t.qZA(),t.TgZ(25,"button",65),t._UZ(26,"mat-icon",66),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=r.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(25,p,e._id)),t.xp6(1),t.Q6J("src",e.imageUrl,t.LSH)("alt",e.name),t.xp6(2),t.hij(" ",t.lcZ(6,17,e.price/e.oldPrice-1)," "),t.xp6(4),t.Q6J("routerLink",t.VKq(27,p,e._id)),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Q6J("rate",5)("max",5)("theme","stars")("readOnly",!1),t.xp6(3),t.AsE(" ",t.xi3(16,19,e.oldPrice,"$ "),"/",e.unit,""),t.xp6(3),t.AsE(" ",t.xi3(19,22,e.price,"$ "),"/",e.unit,""),t.xp6(5),t.Q6J("routerLink",t.VKq(29,p,e._id)),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:eye"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:heart")}}function I(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",88),t.TgZ(2,"div",89),t._UZ(3,"img",90),t.qZA(),t.TgZ(4,"span",91),t._uU(5),t.qZA(),t.TgZ(6,"span",92),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.qZA(),t.BQk()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",e.id),t.xp6(2),t.Q6J("src",e.imageUrl,t.LSH)("alt",e.name),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.AsE("",t.xi3(8,6,e.price,"$ "),"/",e.unit,"")}}let L=(()=>{class o{constructor(e,i){this._activatedRoute=e,this._changeDetectorRef=i,this.products=[],this.productSelected=null,this._unsubscribeAll=new h.xQ}ngOnInit(){this.products=[{id:1,name:"Col",price:35.21,unit:"lb",imageUrl:"assets/images/products/products-1.png"},{id:2,name:"Pl\xe1tano",price:15.5,unit:"lb",imageUrl:"assets/images/products/products-2.png"},{id:3,name:"Zanahoria",price:12.32,unit:"lb",imageUrl:"assets/images/products/products-3.png"},{id:4,name:"Queso",price:45.89,unit:"lb",imageUrl:"assets/images/products/products-4.png"},{id:5,name:"Manzana",price:23.7,unit:"lb",imageUrl:"assets/images/products/products-5.png"}],this._activatedRoute.params.pipe((0,u.R)(this._unsubscribeAll)).subscribe(({productId:e})=>{this.productSelected=this.products.find(i=>i.id===+e),this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.gz),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ath-product-details"]],decls:137,vars:55,consts:[[1,"flex-col","hidden","w-full","md:block"],[1,"flex-col","items-center","justify-center","hidden","w-full","py-12","bg-gray-100","bg-center","bg-cover","md:block","min-h-64",2,"background-image","url('assets/images/banners/page-banner-1.jpg')"],[1,"px-5","text-5xl","font-black","text-center","text-gray-900","bg-white","rounded","bg-opacity-60"],[1,"flex-col","hidden","w-full","px-5","bg-white","md:block","md:px-22"],[1,"flex","flex-row","w-full","py-5"],["routerLink","/home",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/products",1,"ml-1","whitespace-nowrap","text-primary-500"],[1,"ml-1","text-gray-900"],[1,"w-30","h-0.5","bg-gray-100"],[1,"flex","w-1/3","h-0.5","bg-primary-500"],[1,"flex-col","flex-wrap","hidden","w-full","gap-8","bg-white","md:block","md:flex-row","px-22","pb-30"],[1,"grid","grid-cols-2","gap-5","bg-white","p-22"],[1,"relative"],[1,"absolute","top-5","right-5","flex","items-center","justify-center","w-10","h-10","p-2","text-white","rounded-full","bg-primary-600"],[1,"rounded-2xl",3,"src","alt"],[1,"flex","flex-col","gap-y-5"],[1,"font-black","text-5xl","tracking-wide"],[1,"font-light","-mt-3","text-xl","tracking-wide"],[1,"-my-5"],[3,"rate","max","theme","readOnly"],[1,"flex","flex-col","gap-y-2"],[1,"font-light","text-xl","tracking-wide"],[1,"text-lg","font-light","text-primary-900"],[1,"flex","flex-row","gap-x-3"],[1,"text-xl","font-medium","text-gray-300","line-through","oldstyle-nums"],[1,"text-xl","font-medium","text-primary-600","oldstyle-nums"],[1,"flex","flex-row","gap-x-5","items-center"],[1,"rounded-full","p-3","border","border-primary-500","flex","flex-row","gap-x-1","items-center"],[1,"p-1","hover:bg-primary-50","rounded-full","flex","items-center","justify-center"],[1,"icon-size-7","text-primary-500","cursor-pointer",3,"svgIcon"],[1,"font-bold","text-2xl","text-primary-900","px-5"],[1,"rounded-full","text-lg","p-4","bg-primary-500","text-white","cursor-pointer","items-center","hover:bg-primary-400"],[1,"flex","flex-col","flex-wrap","w-full","gap-8","bg-white","md:flex-row","px-22","pb-30"],[1,"flex","flex-col"],[1,"text-4xl","font-bold","text-gray-900"],[1,"w-50","h-0.5","bg-gray-100"],[1,"grid","w-full","grid-cols-1","md:grid-cols-2","gap-y-8"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","w-full","bg-white","md:hidden"],[1,"relative","flex","items-center","justify-center"],[1,"absolute","flex","items-center","justify-center","w-10","h-10","p-2","text-white","rounded-full","top-5","right-5","bg-primary-600"],[1,"w-60","h-60",3,"src","alt"],[1,"grid","grid-cols-1","gap-5","p-5","md:grid-cols-2","md:px-22"],[1,"flex","flex-row","items-center","justify-between","md:hidden"],["routerLink","/pages/products",1,"text-primary-500","icon-size-5",3,"svgIcon"],[1,"text-2xl","font-semibold","tracking-wide","text-center"],[1,"text-primary-500","icon-size-7",3,"svgIcon"],[1,"flex","flex-row","items-center","gap-x-2"],[1,"text-lg","font-semibold","tracking-wide","text-red-400","line-through"],[1,"text-lg","font-semibold","tracking-wide"],[1,"flex","flex-row","items-center","p-3","gap-x-1"],[1,"flex","items-center","justify-center","rounded-full","bg-primary-500","hover:bg-primary-400"],[1,"text-white","cursor-pointer","icon-size-5",3,"svgIcon"],[1,"px-2","text-xl","font-semibold","text-primary-900"],[1,"flex","flex-col","md:hidden","gap-y-2"],[1,"text-xl","font-semibold","tracking-wide"],[1,"flex","flex-row","gap-5","overflow-x-scroll","md:flex-col","scroll-pl-6","snap-x"],[1,"flex-col","hidden","md:flex","gap-y-5"],[1,"text-5xl","font-black","tracking-wide"],[1,"-mt-3","text-xl","font-light","tracking-wide"],[1,"flex","flex-row","items-center","-mt-3","gap-x-5"],[1,"flex","flex-row","gap-x-1"],[1,"text-yellow-300","icon-size-7",3,"svgIcon"],["mat-icon-button",""],[1,"icon-size-7","text-primary-500",3,"svgIcon"],[1,"text-xl","font-light","tracking-wide"],[1,"flex","flex-row","items-center","gap-x-5"],[1,"text-4xl","font-black","tracking-wide","text-red-400","line-through"],[1,"text-4xl","font-black","tracking-wide"],[1,"flex","flex-row","items-center","p-3","border","rounded-full","border-primary-500","gap-x-1"],[1,"flex","items-center","justify-center","p-1","rounded-full","hover:bg-primary-50"],[1,"cursor-pointer","icon-size-7","text-primary-500",3,"svgIcon"],[1,"px-5","text-2xl","font-bold","text-primary-900"],[1,"items-center","p-4","text-lg","text-white","rounded-full","cursor-pointer","bg-primary-500","hover:bg-primary-400"],[1,"sticky","justify-center","w-full","px-5","mt-5","mb-2","bottom-5"],[1,"p-4","text-lg","text-center","text-white","rounded-full","cursor-pointer","bg-primary-500","hover:bg-primary-400","shadow-md","z-99"],[1,"flex","flex-row","gap-y-2"],[1,"flex","justify-end","h-64","p-5","relative","rounded-2xl","cursor-pointer","w-80","group-hover:shadow-md","bg-primary-50",3,"routerLink"],[1,"",3,"src","alt"],[1,"absolute","top-3","right-3","flex","items-center","text-sm","justify-center","w-10","h-10","p-2","text-white","rounded-full","bg-primary-600"],[1,"flex","flex-col","justify-between","ml-5"],[1,"flex","flex-col","mt-2","gap-y-2"],[1,"text-3xl","font-medium","text-primary-800","cursor-pointer",3,"routerLink"],[1,"flex","flex-row","items-end"],["mat-flat-button","",1,"mr-3","font-semibold","text-white","bg-primary-500","w-50",3,"click"],["mat-icon-button","",3,"routerLink"],[1,"flex","flex-col","justify-center","group",3,"routerLink"],[1,"mb-3","bg-cover","w-22","h-22","rounded-2xl","group-hover:shadow-md"],[1,"w-22","h-22",3,"src","alt"],[1,"text-lg","font-bold","tracking-wide","text-center"],[1,"text-lg","font-semibold","tracking-wide","text-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div"),t.TgZ(7,"a",5),t._uU(8,"Inicio"),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"a",8),t._uU(12,"Productos"),t.qZA(),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"mat-icon",7),t.TgZ(15,"a",9),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t._UZ(18,"div",11),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"div",13),t.TgZ(21,"div",14),t.TgZ(22,"div",15),t._uU(23,"-5% "),t.qZA(),t._UZ(24,"img",16),t.qZA(),t.TgZ(25,"div",17),t.TgZ(26,"div",18),t._uU(27),t.qZA(),t.TgZ(28,"div",19),t._uU(29,"Categor\xeda"),t.qZA(),t.TgZ(30,"div",20),t._UZ(31,"bar-rating",21),t.qZA(),t.TgZ(32,"div",22),t.TgZ(33,"div",23),t._uU(34,"Descripci\xf3n"),t.qZA(),t.TgZ(35,"div",24),t._uU(36,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis veniam dolores aut optio nisi harum dicta? Expedita tempore, magnam rem laboriosam nihil dolore magni qui eveniet maiores, repellendus molestias!"),t.qZA(),t.qZA(),t.TgZ(37,"div",25),t.TgZ(38,"div",26),t._uU(39),t.ALo(40,"currency"),t.qZA(),t.TgZ(41,"div",27),t._uU(42),t.ALo(43,"currency"),t.qZA(),t.qZA(),t.TgZ(44,"div",28),t.TgZ(45,"div",29),t.TgZ(46,"div",30),t._UZ(47,"mat-icon",31),t.qZA(),t.TgZ(48,"span",32),t._uU(49,"0"),t.qZA(),t.TgZ(50,"div",30),t._UZ(51,"mat-icon",31),t.qZA(),t.qZA(),t.TgZ(52,"div",33),t._uU(53," Agregar a la jaba "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"div",34),t.TgZ(55,"div",35),t.TgZ(56,"div",36),t._uU(57,"Productos m\xe1s vendidos"),t.qZA(),t.TgZ(58,"div",37),t._UZ(59,"div",11),t.qZA(),t.qZA(),t.TgZ(60,"div",38),t.YNc(61,Q,27,31,"ng-container",39),t.ALo(62,"slice"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div",40),t.TgZ(64,"div",41),t.TgZ(65,"div",42),t._uU(66,"-5% "),t.qZA(),t._UZ(67,"img",43),t.qZA(),t.TgZ(68,"div",44),t.TgZ(69,"div",45),t._UZ(70,"mat-icon",46),t.TgZ(71,"div",47),t._uU(72),t.qZA(),t._UZ(73,"mat-icon",48),t.qZA(),t.TgZ(74,"div",45),t.TgZ(75,"div",49),t.TgZ(76,"div",50),t._uU(77),t.ALo(78,"currency"),t.qZA(),t.TgZ(79,"div",51),t._uU(80),t.ALo(81,"currency"),t.qZA(),t.qZA(),t.TgZ(82,"div",52),t.TgZ(83,"div",53),t._UZ(84,"mat-icon",54),t.qZA(),t.TgZ(85,"span",55),t._uU(86,"0"),t.qZA(),t.TgZ(87,"div",53),t._UZ(88,"mat-icon",54),t.qZA(),t.qZA(),t.qZA(),t.TgZ(89,"div",56),t.TgZ(90,"div",57),t._uU(91,"Descripci\xf3n"),t.qZA(),t.TgZ(92,"div",24),t._uU(93,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis veniam dolores aut optio nisi harum dicta? Expedita tempore, magnam rem laboriosam nihil dolore magni qui eveniet maiores, repellendus molestias!"),t.qZA(),t.qZA(),t.TgZ(94,"div",56),t.TgZ(95,"div",57),t._uU(96,"Productos relacionados"),t.qZA(),t.TgZ(97,"div",58),t.YNc(98,I,9,9,"ng-container",39),t.qZA(),t.qZA(),t.qZA(),t.TgZ(99,"div",59),t.TgZ(100,"div",60),t._uU(101,"Nombre del producto"),t.qZA(),t.TgZ(102,"div",61),t._uU(103,"Categor\xeda"),t.qZA(),t.TgZ(104,"div",62),t.TgZ(105,"div",63),t._UZ(106,"mat-icon",64),t._UZ(107,"mat-icon",64),t._UZ(108,"mat-icon",64),t._UZ(109,"mat-icon",64),t._UZ(110,"mat-icon",64),t._UZ(111,"mat-icon",64),t.qZA(),t.TgZ(112,"button",65),t._UZ(113,"mat-icon",66),t.qZA(),t.qZA(),t.TgZ(114,"div",22),t.TgZ(115,"div",67),t._uU(116,"Descripcion"),t.qZA(),t.TgZ(117,"div",24),t._uU(118,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis veniam dolores aut optio nisi harum dicta? Expedita tempore, magnam rem laboriosam nihil dolore magni qui eveniet maiores, repellendus molestias!"),t.qZA(),t.qZA(),t.TgZ(119,"div",68),t.TgZ(120,"div",69),t._uU(121,"$35.41 lb"),t.qZA(),t.TgZ(122,"div",70),t._uU(123,"$23.54 lb"),t.qZA(),t.qZA(),t.TgZ(124,"div",68),t.TgZ(125,"div",71),t.TgZ(126,"div",72),t._UZ(127,"mat-icon",73),t.qZA(),t.TgZ(128,"span",74),t._uU(129,"0"),t.qZA(),t.TgZ(130,"div",72),t._UZ(131,"mat-icon",73),t.qZA(),t.qZA(),t.TgZ(132,"div",75),t._uU(133," Agregar a la jaba "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(134,"div",76),t.TgZ(135,"div",77),t._uU(136," Agregar a la jaba "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(i.productSelected.name),t.xp6(7),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(2),t.Oqu(i.productSelected.name),t.xp6(8),t.Q6J("src",i.productSelected.imageUrl,t.LSH)("alt",i.productSelected.name),t.xp6(3),t.Oqu(i.productSelected.name),t.xp6(4),t.Q6J("rate",5)("max",5)("theme","stars")("readOnly",!1),t.xp6(8),t.AsE(" ",t.xi3(40,39,i.productSelected.oldPrice,"$ "),"/",i.productSelected.unit,""),t.xp6(3),t.AsE(" ",t.xi3(43,42,i.productSelected.price,"$ "),"/",i.productSelected.unit,""),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:minus-sm"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(10),t.Q6J("ngForOf",t.Dn7(62,45,i.products,0,4)),t.xp6(6),t.Q6J("src",i.productSelected.imageUrl,t.LSH)("alt",i.productSelected.name),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:arrow-left"),t.xp6(2),t.Oqu(i.productSelected.name),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:heart"),t.xp6(4),t.AsE("",t.xi3(78,49,i.productSelected.oldPrice,"$ "),"/",i.productSelected.unit,""),t.xp6(3),t.AsE("",t.xi3(81,52,i.productSelected.price,"$ "),"/",i.productSelected.unit,""),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:minus-sm"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(10),t.Q6J("ngForOf",i.products),t.xp6(8),t.Q6J("svgIcon","heroicons_solid:star"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:star"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:star"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:star"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:star"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:star"),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:heart"),t.xp6(14),t.Q6J("svgIcon","heroicons_solid:minus-sm"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:plus"))},directives:[a.yS,A.Hw,T.OJ,s.sg,a.rH,y.lW],pipes:[s.H9,s.OU,s.Zx],encapsulation:2}),o})();var b=n(4787),m=n(1086),x=n(6727);const q=o=>o.products,P=((0,x.P1)(q,o=>o.product),(0,x.P1)(q,o=>o.products));var j=n(5060),$=n(5750),O=n(9122),S=n(9072),Z=n(7322),E=n(7531),w=n(9814),U=n(3075);function N(o,r){if(1&o&&t._UZ(0,"img",80),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.imagesUrl[0],t.LSH)("alt",e.name)}}const g=function(o){return[o]};function F(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",67),t.TgZ(2,"div",68),t.YNc(3,N,1,2,"img",69),t.TgZ(4,"div",70),t._uU(5),t.ALo(6,"percent"),t.qZA(),t.qZA(),t.TgZ(7,"div",71),t.TgZ(8,"div",72),t.TgZ(9,"div",73),t._UZ(10,"bar-rating",74),t.qZA(),t.TgZ(11,"div",75),t._uU(12),t.qZA(),t.TgZ(13,"div",76),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.qZA(),t.TgZ(16,"div",77),t.TgZ(17,"button",78),t._UZ(18,"mat-icon",44),t.qZA(),t.TgZ(19,"button",79),t._UZ(20,"mat-icon",44),t.qZA(),t.TgZ(21,"button",43),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addProductToCart(l)}),t._UZ(22,"mat-icon",44),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=r.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(20,g,e._id)),t.xp6(1),t.Q6J("ngIf",e.imagesUrl.length>0),t.xp6(2),t.hij(" ",t.lcZ(6,15,e.price/e.oldPrice-1)," "),t.xp6(5),t.Q6J("rate",5)("max",5)("theme","stars")("readOnly",!1),t.xp6(1),t.Q6J("routerLink",t.VKq(22,g,e._id)),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.AsE(" ",t.xi3(15,17,e.price,"$ "),"/",e.unit,""),t.xp6(3),t.Q6J("routerLink",t.VKq(24,g,e._id)),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:eye"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:heart"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus")}}function D(o,r){1&o&&(t.TgZ(0,"div",81),t._UZ(1,"img",82),t.TgZ(2,"h3",83),t.TgZ(3,"strong"),t._uU(4,"No existen productos para la categor\xeda seleccionada"),t.qZA(),t.qZA(),t.TgZ(5,"h4",84),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.hij("",t.lcZ(7,1,"Consulte otra categor\xeda"),"."))}function M(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-radio-button",86),t.NdJ("click",function(){const c=t.CHM(e),l=c.$implicit,d=c.index;return t.oxw(2).byCategory(l._id,d)}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit;t.Q6J("value",r.index),t.xp6(1),t.hij(" ",e.name," ")}}function Y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-radio-group",85),t.NdJ("ngModelChange",function(c){return t.CHM(e),t.oxw().selectedCategoryIndex=c}),t.TgZ(1,"mat-radio-button",86),t.NdJ("click",function(){return t.CHM(e),t.oxw().byCategory("all",-1)}),t._uU(2," Todos "),t.qZA(),t.YNc(3,M,2,2,"mat-radio-button",87),t.qZA()}if(2&o){const e=r.ngIf,i=t.oxw();t.Q6J("ngModel",i.selectedCategoryIndex)("color","primary")("value","just-good"),t.xp6(1),t.Q6J("value",-1),t.xp6(2),t.Q6J("ngForOf",e)}}function H(o,r){if(1&o&&t._UZ(0,"img",80),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.imagesUrl[0],t.LSH)("alt",e.name)}}const f=function(o){return["/pages/products",o]};function z(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",88),t.TgZ(2,"div",89),t.YNc(3,H,1,2,"img",69),t.TgZ(4,"div",70),t._uU(5),t.ALo(6,"percent"),t.qZA(),t.qZA(),t.TgZ(7,"div",90),t.TgZ(8,"div",91),t.TgZ(9,"a",92),t._uU(10),t.qZA(),t.TgZ(11,"div",73),t._UZ(12,"bar-rating",74),t.qZA(),t.TgZ(13,"div",93),t.TgZ(14,"div",94),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"div",95),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",96),t.TgZ(21,"button",97),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addProductToCart(l)}),t._uU(22," Agregar a la jaba "),t.qZA(),t.TgZ(23,"button",78),t._UZ(24,"mat-icon",44),t.qZA(),t.TgZ(25,"button",79),t._UZ(26,"mat-icon",44),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=r.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(24,f,e._id)),t.xp6(1),t.Q6J("ngIf",e.imagesUrl.length>0),t.xp6(2),t.hij(" ",t.lcZ(6,16,e.price/e.oldPrice-1)," "),t.xp6(4),t.Q6J("routerLink",t.VKq(26,f,e._id)),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Q6J("rate",5)("max",5)("theme","stars")("readOnly",!1),t.xp6(3),t.AsE(" ",t.xi3(16,18,e.oldPrice,"$ "),"/",e.unit,""),t.xp6(3),t.AsE(" ",t.xi3(19,21,e.price,"$ "),"/",e.unit,""),t.xp6(5),t.Q6J("routerLink",t.VKq(28,f,e._id)),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:eye"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:heart")}}function B(o,r){1&o&&(t.ynx(0),t.TgZ(1,"button",79),t.TgZ(2,"span",98),t._UZ(3,"mat-icon",44),t.qZA(),t.qZA(),t.BQk()),2&o&&(t.xp6(3),t.Q6J("svgIcon","heroicons_outline:login"))}function K(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",99),t._uU(2),t.ALo(3,"async"),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,1,e.user$).name)}}const C=function(o){return{"bg-primary-500 z-99 text-white":o}};function V(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",103),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).byCategory("all",-1)}),t._uU(1,"Todo"),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("ngClass",t.VKq(1,C,-1===e.selectedCategoryIndex))}}const R=function(o){return{"text-white":o}};function X(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",104),t.NdJ("click",function(){const c=t.CHM(e),l=c.$implicit,d=c.index;return t.oxw(2).byCategory(l._id,d)}),t._UZ(1,"mat-icon",105),t.TgZ(2,"div",106),t._uU(3),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit,i=r.index,c=t.oxw(2);t.Q6J("ngClass",t.VKq(4,C,c.selectedCategoryIndex===i)),t.xp6(1),t.Q6J("ngClass",t.VKq(6,R,c.selectedCategoryIndex===i))("svgIcon","iconsmind:"+e.icon),t.xp6(2),t.Oqu(e.name)}}function W(o,r){if(1&o&&(t.TgZ(0,"div",100),t.YNc(1,V,2,3,"div",101),t.YNc(2,X,4,8,"div",102),t.qZA()),2&o){const e=r.ngIf;t.xp6(1),t.Q6J("ngIf",e),t.xp6(1),t.Q6J("ngForOf",e)}}function G(o,r){if(1&o&&t._UZ(0,"img",114),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.imagesUrl[0],t.LSH)("alt",e.name)}}function tt(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",107),t.TgZ(2,"div",108),t.YNc(3,G,1,2,"img",109),t.qZA(),t.TgZ(4,"span",110),t._uU(5),t.qZA(),t.TgZ(6,"div",111),t.TgZ(7,"span",112),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"div",113),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addProductToCart(l)}),t._UZ(11,"mat-icon",64),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=r.$implicit;t.xp6(2),t.Q6J("routerLink",e.id),t.xp6(1),t.Q6J("ngIf",e.imagesUrl.length>0),t.xp6(1),t.Q6J("routerLink",t.VKq(10,g,e._id)),t.xp6(1),t.Oqu(e.name),t.xp6(3),t.AsE("",t.xi3(9,7,e.price,"$ "),"/",e.unit,""),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:plus")}}function et(o,r){1&o&&(t.TgZ(0,"div",115),t._UZ(1,"img",82),t.TgZ(2,"h3",83),t.TgZ(3,"strong"),t._uU(4,"No existen productos para la categor\xeda seleccionada"),t.qZA(),t.qZA(),t.TgZ(5,"h4",84),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.hij("",t.lcZ(7,1,"Consulte otra categor\xeda"),"."))}const ot=[{path:"",component:(()=>{class o{constructor(e,i,c,l,d,v){this._basketService=e,this._changeDetectorRef=i,this._navigationService=c,this._fuseNavigationService=l,this._productsService=d,this.store=v,this.sort=null,this.user$=(0,m.of)(null),this.products=[],this.products$=(0,m.of)([]),this.isLogged$=(0,m.of)(!1),this.rate=0,this.categories$=null,this.selectedCategoryIndex=-1,this._unsubscribeAll=new h.xQ}ngOnInit(){this.categories$=this._productsService.categories$,this.isLogged$=this.store.select(b.dD),this.products$=this.store.select(P),this.user$=this.store.select(b.dy),this._navigationService.navigation$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.navigation=e})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}addProductToCart(e){this._basketService.addProductToBasket(e)}addToCompare(e){this._productsService.addToCompare(e)}toggleNavigation(e){const i=this._fuseNavigationService.getComponent(e);i&&i.toggle()}byCategory(e,i){this.selectedCategoryIndex=i,this._productsService.getProductByCategory(e).pipe((0,u.R)(this._unsubscribeAll)).subscribe(c=>{this.products=c})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(j.v),t.Y36(t.sBO),t.Y36($.f),t.Y36(O.Jf),t.Y36(S.s),t.Y36(x.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ath-products"]],decls:121,vars:44,consts:[[1,"flex-col","hidden","md:block"],[1,"flex","flex-col","items-center","justify-center","w-full","py-12","bg-gray-100","bg-bottom","bg-cover","min-h-64",2,"background-image","url('assets/images/banners/products-bg.jpg')"],[1,"px-5","text-5xl","font-black","text-gray-900","bg-white","rounded","bg-opacity-60"],[1,"flex","flex-col","w-full","bg-white","px-22"],[1,"flex","flex-row","w-full","py-5"],["routerLink","/home",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-gray-900"],[1,"w-30","h-0.5","bg-gray-100"],[1,"flex","w-1/3","h-0.5","bg-primary-500"],[1,"flex","flex-col","w-full","gap-8","px-22","bg-white","md:flex-row"],[1,"flex","flex-col","w-4/5","gap-4"],[1,"flex","flex-col","flex-wrap","justify-start","sm:flex-row","space-y-6"],[4,"ngFor","ngForOf"],["class","col-span-3 flex flex-col empty-cart-cls text-center mt-10 ",4,"ngIf"],[1,"flex","flex-col","w-1/5","gap-4"],[1,"flex","flex-col","gap-1","mb-10"],[1,"mb-5","text-3xl","font-semibold","text-center","text-gray-900"],[1,"border-0","fuse-mat-rounded","fuse-mat-dense","fuse-mat-no-subscript"],["type","text","matInput","",3,"placeholder"],["mat-icon-button","","matSuffix","",1,""],[1,"icon-size-5","text-primary-500",3,"svgIcon"],[1,"flex","flex-col","mb-10"],["class","flex flex-col",3,"ngModel","color","value","ngModelChange",4,"ngIf"],[1,"flex","flex-row","gap-2"],[1,"fuse-mat-dense"],["type","text","matInput","",3,"value","min","placeholder"],[1,"flex","flex-col","w-full","gap-8","bg-white","px-22","py-15"],[1,"flex","flex-col"],[1,"text-4xl","font-bold","text-gray-900"],[1,"w-50","h-0.5","bg-gray-100"],[1,"flex","flex-col","w-full","gap-8","bg-white","md:flex-row","pb-15"],[1,"flex","flex-col","justify-end","w-2/3","p-10","bg-gray-100","bg-bottom","rounded-3xl","gap-y-5",2,"background-image","url('assets/images/banners/page-banner-1.jpg')"],[1,"text-3xl","font-bold","text-white"],[1,"text-lg","font-medium","text-white"],["mat-flat-button","",1,"font-semibold","text-white","bg-primary-500","w-50"],[1,"flex","flex-col","justify-end","w-1/3","p-10","bg-gray-100","rounded-3xl","gap-y-5"],[1,"text-3xl","font-bold"],[1,"flex","flex-col","flex-wrap","w-full","gap-8","bg-white","md:flex-row","px-22","pb-30"],[1,"grid","w-full","grid-cols-1","md:grid-cols-2","gap-y-8"],[1,"flex","flex-col","items-center","w-full","px-5","pt-5","pb-5","bg-white","gap-y-3","md:hidden"],[1,"flex","flex-row","items-center","justify-between","w-full","mb-2"],["mat-icon-button","",3,"click"],[1,"icon-size-7","text-primary-500",3,"svgIcon"],["src","assets/images/logo/logo-athgro.svg","alt","Athgro logo",1,"w-10"],[4,"ngIf"],[1,"flex","flex-col","items-start","w-full","gap-y-1"],[1,"text-xl","font-semibold","tracking-wide"],[1,"flex","flex-row","items-center","justify-center","w-full","p-10","cursor-pointer","gap-y-5","group","mobile-products-slide"],[1,"flex","flex-col","items-center","justify-center","w-1/2"],[1,"mb-3","text-2xl","font-semibold","text-center"],[1,"px-5","py-3","text-lg","font-semibold","border-2","border-gray-900","rounded-2xl","group-hover:bg-primary-300"],[1,"flex","items-center","justify-center","ml-6","bg-cover","rounded-2xl","group-hover:shadow-md"],["src","assets/images/products/products-mix.png","alt",""],[1,"flex","flex-row","items-center","justify-center","py-2","gap-x-2"],[1,"w-2","h-2","rounded-full","bg-primary-100"],[1,"w-2","h-2","rounded-full","bg-primary-500"],["style","scrollbar-width: thin;","class","flex flex-row w-full gap-5 pb-2.5 pl-2 overflow-x-scroll md:flex-col",4,"ngIf"],[1,"grid","grid-cols-2","gap-5","mt-3"],["class","col-span-3 flex flex-col empty-cart-cls text-center ",4,"ngIf"],[1,"sticky","justify-center","w-full","px-5","mt-5","bottom-5"],[1,"flex","flex-row","items-center","justify-around","p-4","rounded-full","shadow-md","bg-primary-500","z-99"],["routerLink","/products",1,"cursor-pointer"],[1,"text-white","icon-size-7",3,"svgIcon"],["routerLink","/private/checkout",1,"cursor-pointer"],["routerLink","/contact",1,"cursor-pointer"],[1,"flex","flex-col","justify-end","space-y-2","mr-6"],[1,"flex","justify-end","cursor-pointer","h-64","p-5","relative","rounded-2xl","w-72","group-hover:shadow-md","bg-primary-50",3,"routerLink"],["class","",3,"src","alt",4,"ngIf"],[1,"absolute","top-3","right-3","flex","items-center","text-sm","justify-center","w-10","h-10","p-2","text-white","rounded-full","bg-primary-600"],[1,"flex","flex-row"],[1,"flex","flex-col","w-4/5","mt-2","space-y-2"],[1,"-my-5"],[3,"rate","max","theme","readOnly"],[1,"text-3xl","font-medium","text-primary-900","cursor-pointer",3,"routerLink"],[1,"text-3xl","font-medium","text-primary-900","oldstyle-nums"],[1,"flex","flex-col","items-end","w-1/5"],["mat-icon-button","",3,"routerLink"],["mat-icon-button",""],[1,"",3,"src","alt"],[1,"col-span-3","flex","flex-col","empty-cart-cls","text-center","mt-10"],["src","assets/images/backet-01.png",1,"img-fluid","mb-4",2,"width","50%","align-self","center"],[1,"mb-5",2,"width","50%","align-self","center"],[2,"width","50%","align-self","center"],[1,"flex","flex-col",3,"ngModel","color","value","ngModelChange"],[1,"mb-2",3,"value","click"],["class","mb-2",3,"value","click",4,"ngFor","ngForOf"],[1,"flex","flex-row","gap-y-2"],[1,"flex","justify-end","h-64","p-5","relative","rounded-2xl","cursor-pointer","w-80","group-hover:shadow-md","bg-primary-50",3,"routerLink"],[1,"flex","flex-col","justify-between","ml-5"],[1,"flex","flex-col","mt-2","gap-y-2"],[1,"text-3xl","font-medium","text-primary-800","cursor-pointer",3,"routerLink"],[1,"flex","flex-row","gap-x-3"],[1,"text-xl","font-medium","text-gray-300","line-through","oldstyle-nums"],[1,"text-xl","font-medium","text-primary-600","oldstyle-nums"],[1,"flex","flex-row","items-end"],["mat-flat-button","",1,"mr-3","font-semibold","text-white","bg-primary-500","w-50",3,"click"],[1,"relative","w-10"],[1,"text-lg","font-light","text-primary-900"],[1,"flex","flex-row","w-full","gap-5","pb-2.5","pl-2","overflow-x-scroll","md:flex-col",2,"scrollbar-width","thin"],["class","px-3 py-1 text-lg font-light pl-3 shadow-sm bg-pink-200 cursor-pointer rounded-xl ",3,"ngClass","click",4,"ngIf"],["class","flex flex-row items-center justify-center pl-3 shadow-sm bg-pink-200 cursor-pointer rounded-xl",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"px-3","py-1","text-lg","font-light","pl-3","shadow-sm","bg-pink-200","cursor-pointer","rounded-xl",3,"ngClass","click"],[1,"flex","flex-row","items-center","justify-center","pl-3","shadow-sm","bg-pink-200","cursor-pointer","rounded-xl",3,"ngClass","click"],[3,"ngClass","svgIcon"],[1,"px-3","py-1","text-lg","font-light"],[1,"flex","flex-col","justify-center","pt-3","shadow-md","group","rounded-xl"],[1,"mx-3","mb-3","bg-cover","w-30","h-30","rounded-2xl","group-hover:shadow-md",3,"routerLink"],["class","w-30 h-30",3,"src","alt",4,"ngIf"],[1,"text-lg","font-bold","tracking-wide","text-center",3,"routerLink"],[1,"flex","flex-row","items-center","justify-between","mt-2"],[1,"ml-3","font-semibold","tracking-wide","text-center","text-md"],[1,"px-3","py-1","rounded-tl-xl","rounded-br-xl","bg-primary-500","cursor-pointer",3,"click"],[1,"w-30","h-30",3,"src","alt"],[1,"col-span-3","flex","flex-col","empty-cart-cls","text-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Disfrute con nuestros producto "),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div"),t.TgZ(7,"a",5),t._uU(8,"Inicio"),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"a",8),t._uU(12,"Productos"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",9),t._UZ(14,"div",10),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"div",13),t.YNc(18,F,23,26,"ng-container",14),t.ALo(19,"async"),t.ynx(20),t.YNc(21,D,8,3,"div",15),t.ALo(22,"async"),t.BQk(),t.qZA(),t.qZA(),t.TgZ(23,"div",16),t.TgZ(24,"div",17),t.TgZ(25,"div",18),t._uU(26,"Buscar productos"),t.qZA(),t.TgZ(27,"mat-form-field",19),t._UZ(28,"input",20),t.TgZ(29,"button",21),t._UZ(30,"mat-icon",22),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",23),t.TgZ(32,"div",18),t._uU(33,"Categor\xedas"),t.qZA(),t.YNc(34,Y,4,5,"mat-radio-group",24),t.ALo(35,"async"),t.qZA(),t.TgZ(36,"div",23),t.TgZ(37,"div",18),t._uU(38,"Filtrar precios"),t.qZA(),t.TgZ(39,"div",25),t.TgZ(40,"mat-form-field",26),t.TgZ(41,"mat-label"),t._uU(42,"M\xedn"),t.qZA(),t._UZ(43,"input",27),t.qZA(),t.TgZ(44,"mat-form-field",26),t.TgZ(45,"mat-label"),t._uU(46,"M\xe1x"),t.qZA(),t._UZ(47,"input",27),t.qZA(),t.qZA(),t.qZA(),t._UZ(48,"div",23),t.qZA(),t.qZA(),t.TgZ(49,"div",28),t.TgZ(50,"div",29),t.TgZ(51,"div",30),t._uU(52,"Para usted"),t.qZA(),t.TgZ(53,"div",31),t._UZ(54,"div",10),t.qZA(),t.qZA(),t.TgZ(55,"div",32),t.TgZ(56,"div",33),t.TgZ(57,"div",34),t._uU(58,"Lorem ipsum dolor sit amet."),t.qZA(),t.TgZ(59,"div",35),t._uU(60,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis veniam dolores aut optio nisi harum dicta? Expedita tempore, magnam rem laboriosam nihil dolore magni qui eveniet maiores, repellendus molestias!"),t.qZA(),t.TgZ(61,"button",36),t._uU(62,"Lorem ipsum"),t.qZA(),t.qZA(),t.TgZ(63,"div",37),t.TgZ(64,"div",38),t._uU(65,"Lorem ipsum dolor sit amet."),t.qZA(),t.TgZ(66,"button",36),t._uU(67,"Lorem ipsum"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"div",39),t.TgZ(69,"div",29),t.TgZ(70,"div",30),t._uU(71,"Productos m\xe1s vendidos"),t.qZA(),t.TgZ(72,"div",31),t._UZ(73,"div",10),t.qZA(),t.qZA(),t.TgZ(74,"div",40),t.YNc(75,z,27,30,"ng-container",14),t.ALo(76,"slice"),t.ALo(77,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(78,"div",41),t.TgZ(79,"div",42),t.ynx(80),t.TgZ(81,"button",43),t.NdJ("click",function(){return i.toggleNavigation("mainNavigation")}),t._UZ(82,"mat-icon",44),t.qZA(),t.BQk(),t.TgZ(83,"div"),t._UZ(84,"img",45),t.qZA(),t.YNc(85,B,4,1,"ng-container",46),t.ALo(86,"async"),t.qZA(),t.TgZ(87,"div",47),t.TgZ(88,"div",48),t._uU(89,"Bienvenido a Athgro!"),t.qZA(),t.YNc(90,K,4,3,"ng-container",46),t.ALo(91,"async"),t.qZA(),t.TgZ(92,"div"),t.TgZ(93,"div",49),t.TgZ(94,"div",50),t.TgZ(95,"div",51),t._uU(96,"Oferta especial!"),t.qZA(),t.TgZ(97,"div",52),t._uU(98," Mostrar"),t.qZA(),t.qZA(),t.TgZ(99,"div",53),t._UZ(100,"img",54),t.qZA(),t.qZA(),t.TgZ(101,"div",55),t._UZ(102,"div",56),t._UZ(103,"div",57),t._UZ(104,"div",56),t.qZA(),t.qZA(),t.YNc(105,W,3,2,"div",58),t.ALo(106,"async"),t.TgZ(107,"div",59),t.YNc(108,tt,12,12,"ng-container",14),t.ALo(109,"async"),t.ynx(110),t.YNc(111,et,8,3,"div",60),t.ALo(112,"async"),t.BQk(),t.qZA(),t.TgZ(113,"div",61),t.TgZ(114,"div",62),t.TgZ(115,"div",63),t._UZ(116,"mat-icon",64),t.qZA(),t.TgZ(117,"div",65),t._UZ(118,"mat-icon",64),t.qZA(),t.TgZ(119,"div",66),t._UZ(120,"mat-icon",64),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(8),t.Q6J("ngForOf",t.lcZ(19,22,i.products$)),t.xp6(3),t.Q6J("ngIf",0===t.lcZ(22,24,i.products$).length),t.xp6(7),t.Q6J("placeholder","Buscar..."),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(4),t.Q6J("ngIf",t.lcZ(35,26,i.categories$)),t.xp6(9),t.Q6J("value",0)("min",0)("placeholder","M\xedn"),t.xp6(4),t.Q6J("value",0)("min",0)("placeholder","M\xe1x"),t.xp6(28),t.Q6J("ngForOf",t.Dn7(76,28,t.lcZ(77,32,i.products$),0,4)),t.xp6(7),t.Q6J("svgIcon","heroicons_outline:menu-alt-1"),t.xp6(3),t.Q6J("ngIf",!1===t.lcZ(86,34,i.isLogged$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(91,36,i.isLogged$)),t.xp6(15),t.Q6J("ngIf",t.lcZ(106,38,i.categories$)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(109,40,i.products$)),t.xp6(3),t.Q6J("ngIf",0===t.lcZ(112,42,i.products$).length),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:cube"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:cash"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:mail"))},directives:[a.yS,A.Hw,s.sg,s.O5,Z.KE,E.Nt,y.lW,Z.R9,Z.hX,a.rH,T.OJ,w.VQ,U.JJ,U.On,w.U0,s.mk],pipes:[s.Ov,s.OU,s.Zx,s.H9,s.gd],encapsulation:2}),o})()},{path:":productId",component:L}];let it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(ot),k.m,J.z]]}),o})()}}]);