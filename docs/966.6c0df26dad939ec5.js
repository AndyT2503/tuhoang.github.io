"use strict";(self.webpackChunknew_portfolio=self.webpackChunknew_portfolio||[]).push([[966],{6966:(m,i,o)=>{o.r(i),o.d(i,{BlogDetailComponent:()=>u});var l=o(6895),t=o(4650),d=o(826),r=o(1943),g=o(3427),c=o(3216);let u=(()=>{class n{constructor(){this.activatedRoute=(0,t.f3M)(d.gz),this.seoService=(0,t.f3M)(c.v2),this.dataService=(0,t.f3M)(c.Do),this.document=(0,t.f3M)(l.K0),this.appConfig=(0,g.t)(),this.slug=this.activatedRoute.snapshot.params.slug}ngOnInit(){this.scrollToTop()}onMarkdownReady(){this.setTitleAndMetaData()}setTitleAndMetaData(){const e=this.document.querySelector("h1")?.textContent;e?this.dataService.getBlogData().subscribe(a=>{const s=a.find(h=>h.slug===this.slug)?.description||"This is something I know about Angular";this.seoService.setTitle(`Tu Hoang - ${e}`),this.seoService.setMetaTags([{name:"title",content:`Tu Hoang - ${e}`},{name:"description",content:s},{property:"og:title",content:`Tu Hoang - ${e}`},{property:"og:type",content:"website"},{property:"og:url",content:`${this.appConfig.appDomain}/blog/${this.slug}`},{property:"og:description",content:s}])}):this.seoService.setTitle("Tu Hoang")}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog-detail"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"content"],[3,"src","ready"]],template:function(e,a){1&e&&(t.TgZ(0,"article",0)(1,"markdown",1),t.NdJ("ready",function(){return a.onMarkdownReady()}),t.qZA()()),2&e&&(t.xp6(1),t.MGl("src","content/article/",a.slug,".md"))},dependencies:[l.ez,r.JP,r.lF],styles:[".content[_ngcontent-%COMP%]{padding-top:116px}@media (min-width: 1080px){.content[_ngcontent-%COMP%]{padding-left:180px;padding-right:180px}}"],changeDetection:0}),n})()}}]);