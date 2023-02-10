var LinkeaseNavigation;!function(){"use strict";var A={d:function(n,t){for(var i in t)A.o(t,i)&&!A.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},o:function(A,n){return Object.prototype.hasOwnProperty.call(A,n)}},n={};!function(){A.d(n,{default:function(){return i}});var t=function(){function A(A){var n,t,i=this;this.menus=[],this.createNavigation=function(){var A=i.menus;A&&0!=A.length&&window&&(document.body?i.createNavigationContainler(A):window.addEventListener("load",(function(n){i.createNavigationContainler(A)})))},A&&A.menus&&A.menus.length>0&&(n=this.menus).push.apply(n,A.menus);var a=this.getWindowLinkeaseNavigationMenus();a&&(t=this.menus).push.apply(t,a),this.createNavigation()}return A.getWehctaQrcode=function(){return"https://assets.koolcenter.com/linkease/linkease_wechat_qrcode.png"},A.getQqQrcode=function(){return"https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png"},A.prototype.onHanldeCopy=function(A){var n=this,t=A.getAttribute("value");navigator.clipboard.writeText("".concat(t)).then((function(){A.parentNode.parentElement.appendChild(n.createNavigatioToast("复制成功"))})).catch((function(t){A.parentNode.parentElement.appendChild(n.createNavigatioToast("".concat(t)))}))},A.prototype.allButtonOnClick=function(){var A=this;this.node.querySelectorAll("ul.navigation-item .navigation-item_dialog-email button.copy").forEach((function(n){var t=n;t.onclick=function(){A.onHanldeCopy(t)}}))},A.prototype.createNavigatioToast=function(A){if(A){var n=document.createElement("div");return n.className="navigation-item_dialog-msg",n.innerText=A,setTimeout((function(){n.remove()}),2e3),n}},A.prototype.createNavigationMenu=function(A){return'\n            <ul class="navigation-item">\n               '.concat(function(){var n=A.icon||"";switch(A.icon){case"qq":n="data:image/png;base64,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";break;case"email":n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlNNANS3q88ESDkxJwnkXZtDLSEbGPLLvdrDdfz3POl5b6eIZ6DfONvqAAABgUlEQVRIx6XW2XaDIBAG4ImURTRV45qtTdO8/zOWQ0AydWPa/3jhwud2YAB2k4hDqQoJIAtVHsT0+m+SVQpQVJWtkiyFmaTZIhEaFqLFPKklLEbWc0TDavSEiBQ2kgpMxAU2cxGIpBCR9JVoiIoOpIbI1J4IGUukcERDdPSTZPbgs03W82abZYb4v9U8ttK5vwb+IY/N5M/HGFLZvWMsqQxRNKJ2IIBGDDgQiQElkRigwObebBIONgoKsNmz5LwKrsM72BQgPWGsX0bNwJgjBgTCuv40D1rGRgKIGJRP0ZkzhohEhA1Jg8EpHxgiMny+Bdx02b55AVdzgj/R+PkqkM4Am/56tu2b3J3gXSAKSk86PGD6Hh22nSel7zB3B7jd5tJ++w4jwObDAQT5uIVhacBOjYTHjGRlh5gn+NXwLbgn1TiQj7g1fjNcL3y52LfJVr5cuQhF6fa2mpsVkNFL318KLL2M0ycL+pREn/jo0yt5EqcvFegLEvKy59+LK/oS7gfvfEqLzqMg9AAAAABJRU5ErkJggg==";break;case"wechat":case"wx":case"weixin":n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAk1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9+NLwPAAAAMHRSTlNNAMkHSTkxK/tUi6JPQyUhGxjXxMDuxqeYkH11bWlkXFj267m1sfDehHhgPOXQnfLWus9NAAACHElEQVRIx6WW15aCMBBAZxORakEQUIrYy65u/v/rNjiBYAjL8XhfwGMuk5lU+OpA56YxGQGMJoY5p93/VYXODHjBmNF/FToGDWPaq1BzBFpGJtUrPgp6ydcpU/iXaVcZwwBjVfmGQb6losQYjANqHvbFPQT7eLXR5SMVH2rSaMsEi1XX8WuF1tUtAtbmvO7UmgrFBOR6Yq9YD9UxUamDOBbrsNeEgaZaKRoKbqdqXKH4vlkyHZaaD+XKDF8PTM+P96rMuGJgsSzWg1Jr4wuoEqQbRu0ZzPFlx3rJoQ0XcFAy1k+QrNa2VEzAVFZikhzP2OpwksqOEBIljWTABCpcbAng3THj22+jnEjFvkCDCzj0R1ZRjYHDmFXVNWyULXkS4txGoVEcAEj4s+TPu6qQI7zgYj0LyKtJENo8WMOSCFJoxxEtrJ34cCXK9AUuCiL9G+vnXCuBh+kb8OTcr8RFTML8wp0Si2yi8ug1TimsiQt2RMgNh3KOSvnbpywOlz2JHJdH8XDCUECSHmNJGnCJ0nryg7fQGtZdKskzFbnEwNUaC2lEm3qJUUDSAQODAG1tF2XX2IVEEtnAGctNCZeM1R71bWzbsVRCsSnJrc8jzCK5dwks0aXHs+vXI6mInZAUcuvDMLlzFavoljrrrISaTXbN+S87yzCIso0P4SuHxTDT94+k9w++z4/X4UP886vC8IXk7WvPx5er969wf8AcgyqjLRO/AAAAAElFTkSuQmCC"}return'\n                 <div class="navigation-item_icon">\n                    <img lazyload="auto" src="'.concat(n,'">\n                </div>\n            ')}(),'\n                <div class="navigation-item_dialog">\n                    <div class="navigation-item_dialog-content">\n                        ').concat('<div class="navigation-item_dialog-title">'.concat(A.title,"</div>"),"\n                        ").concat(A.qrcode?'\n                <div class="navigation-item_dialog-qrcode">\n                    <img lazyload="auto" src="'.concat(A.qrcode,'" alt="">\n                </div>\n            '):"","\n                        ").concat(A.email?'\n                <div class="navigation-item_dialog-email">\n                    <a href="mailto:'.concat(A.email,'" target="_blank">').concat(A.email,'</a>\n                   <button class="copy" value="').concat(A.email,'">\n                    <img lazyload="auto" src="').concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAAAnUlEQVQoFWNgQABxIPMLEP8ngD8A5VMZgQQycAZyuJEFsLA9gGLRLECCH4hVoApApoEwOngFFHgMFQTpyQQRl4BYDiqIi/oHlNAC4pswBSCNIE3eQHwcJoiFfgEUkwViFI0gdZ+B+D2IgQOAAgwFMKHwSOCMasQeWB+Bwh9B8QgCJkDMDmZhJ5ADcS9QiTRIGYhBKGGDEoAkSDEMAADqwyVFULQPngAAAABJRU5ErkJggg==",'">\n                   </button>\n                </div>\n            '):"","\n                        ").concat(A.text?'\n                <div class="navigation-item_dialog-text">\n                    '.concat(A.text,"\n                    </div>\n                "):"",'\n                    </div>\n                    <div class="navigation-item_dialog-transparent"></div>\n                </div>\n            </ul>\n        ')},A.prototype.createNavigationMenus=function(A){var n=this;return A.map((function(A){return n.createNavigationMenu(A)})).join("")},A.prototype.createNavigationContainler=function(A){this.node=document.createElement("div"),this.node.className="navigation-container",this.node.setAttribute("data-v-04bd1545",""),this.node.innerHTML=this.createNavigationMenus(this.menus),document.body.appendChild(this.node),this.allButtonOnClick()},A.prototype.setMenus=function(A){this.menus=A,this.node.innerHTML=this.createNavigationMenus(this.menus),this.allButtonOnClick()},A.prototype.getWindowLinkeaseNavigationMenus=function(){return window.getWindowLinkeaseNavigationMenus?window.getWindowLinkeaseNavigationMenus():[]},A}();window.NewLinkeaseNavigation=function(A){return new t(A)};var i=t}(),LinkeaseNavigation=n.default}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxTQUFBakIsR0FDakIsT0FBTyxFQUFLUSxxQkFBcUJSLEVBQ3JDLElBQ1lrQixLQUFLLEdBQ3JCLEVBQ0EsWUFBQTdDLDJCQUFBLFNBQTJCTixHQUN2QlMsS0FBS3FCLEtBQU8xQixTQUFTZ0MsY0FBYyxPQUNuQzNCLEtBQUtxQixLQUFLTyxVQUFZLHVCQUN0QjVCLEtBQUtxQixLQUFLc0IsYUFBYSxrQkFBbUIsSUFDMUMzQyxLQUFLcUIsS0FBS3VCLFVBQVk1QyxLQUFLd0Msc0JBQXNCeEMsS0FBS1QsT0FDdERJLFNBQVNDLEtBQUtvQixZQUFZaEIsS0FBS3FCLE1BQy9CckIsS0FBS29CLGtCQUNULEVBaUJBLFlBQUF5QixTQUFBLFNBQVN0RCxHQUNMUyxLQUFLVCxNQUFRQSxFQUNiUyxLQUFLcUIsS0FBS3VCLFVBQVk1QyxLQUFLd0Msc0JBQXNCeEMsS0FBS1QsT0FDdERTLEtBQUtvQixrQkFDVCxFQUNBLFlBQUFqQixpQ0FBQSxXQUNJLE9BQUlULE9BQU9TLGlDQUNBVCxPQUFPUyxtQ0FFWCxFQUNYLEVBYUosRUF4S0EsR0F5S0FULE9BQU9vRCxzQkFBd0IsU0FBQzVELEdBQzVCLE9BQU8sSUFBSTZELEVBQW1CN0QsRUFDbEMsRUFDQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTGlua2Vhc2VOYXZpZ2F0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpbmtlYXNlTmF2aWdhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGlua2Vhc2VOYXZpZ2F0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTGlua2Vhc2VOYXZpZ2F0aW9uLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9MaW5rZWFzZU5hdmlnYXRpb24vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsImV4cG9ydCBjb25zdCBJY29uUVE6IHN0cmluZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUNXQ0FZQUFBQThBWEhpQUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBbHFBREFBUUFBQUFCQUFBQWxnQUFBQUFYUzBnZ0FBQVFCMGxFUVZSNEFlMmQrNjhkVlJYSGU2RVZXbHJBUWdGNTJQYVdZb1ZHYkV1dEdvaXQrRWlVeEVSL1ZHUENQMkNpUDVnWUUwT01KaG9nUG43emtmajRRVTNVMy94RnhJcEVTUzNRYUtnMmJla0RTd3FVOHV3TEtLM2Z6K21lazNQbXpweVpPZk5hYSs2czVIdm5uSG5zdmRiYTM3UDMybXYyekoxWk1JL2wvUG56Rjh2OHk0U2xBVXUwWFRnQk9yVGc3QVNjMHJFVEFTZG5abWJlMXVkNUtUUHp4V3FSQ05KY0pWd2hSRVJhWExQOXAxVitSTFJYOWZtNHlBYjVPaStkSlphSWRLbGFEeUpkSFFDeExBakVlakVBb3AyeG9GVFZPblNLV0NJVHZkR053alVDdlpJSG9VZDdRVGdpa3RHcmRVTGNFeXYwVEpBSkxIUGVLcTlML3lQQWUwL21rbGdpRXdIMmRRSmtXaUYwVVk3SktFajJuRWgyMXB1QnJvZ2xRaTJTZzFjSnM4STdoUGtnYjhySUE4SWhFZXd0THdhN0lKWUlCWWtnMDJxQjNtbytDcjNXUWVHQUNBYlpUSXRwWW9YNGFZMDh1RklnNTlUTGdnWGt4ZzRMVDF1T3cwd1NTNFNDUkJCcXJYQ1IwTXRjRDV6VHJuMENCRE9YaURWSExKR0tWTUY2Z1l4NEw5a2VPS2xUbmhLNVNGbVlFVFBFRXFISWd0OG12TXVNZDN3cGNsVHE3aGJCeVBhM0xxMFRTNFJDQjRhOVc0UStqaXBIQ1liRXZRTEQ0L2x5UlpXN3VsVmlpVlRjZHRrb2NPdWxsK284Y0Z4RlBTbHl0WGE3cURWaWhWaHFneHd3WC9KUjFkRW1YMG1rSkhhMUZYczFUcXd3OUsyVDBUZm44MDkvVmtrUDdOZjFlNW9lR2hzbGxraEZnTTdRdDd5a3MvckxpM25nSlozTzBOaFlZTjhZc1VTcUsyWGNGcUVmK29xUm9xcXpHUnAzaUZ5dlZGWGdwSElhSVpaSXhZM2l6VUkvNjV2VUd2VWZZOWE0VStUaUJuZXRVanV4UktvYlpBRkJldTExMWVxcDdoUk9Hb0tnL3RrNlRhcTFzVVdxMVZLZUxIb3Y5anhBdHA2YjJyVkliY1FTcVpqNWNhK3ZGN3NlMkNkeTdhbER2VnFJMVpPcWpxYXFyY3hheUZYNXlvRXcvUFU5VlcwOHFMemd0YUhOS2kyNFVtSkpRUUwxUHFhcXRJa2FLV3g5YUx2S0txdU1XRktNbEFLenYxNThlbUJEYU1OS3RLK0VXRktJNUNkNXFscGl0a29zN1F2SjhnQnR0em0wWmRhNW1jZExFMHVLY0p1R2pIcWYvTXgwdC9rVGFNTXRvVTFMS1Z1S1dGSUFsblB2cjc5TlU2b1pURjFNVzI0TWJUdTFZcVdJcFZySlZmVTNsS2QydjlrTGFWUGFkbXFabWxoaU5HdlQrNlV2VTd2ZS9JVTNoemFlU3RHcGlLVUtMMVZ0L1F4d0twZTd1b2laSW0xZFdBb1RTeFVSVjIwUytyaXFzTHZkWFVBYmJ3cHRYa2o1YVo0cVhxTWF1aHBYNGNoYmhWVUJOMm5MVzJ0NEJSSkFlQTBSNEMweHp3aUhoVVBDYnNITkkvRFNOYS9RMXJRNUsxRnpDNzFQYmhGelNTMXNFN3FVV2xna2UrNFNQaWd3dkY4aVRDTnY2S0pkd21QQ280SzdGM2xJNXpSaEhkZDIzYkRPdlFLMUtMSHVVQVZkZWU2UG51alR3ajBDNzlXcVVsNVdZWDhNT0ZsbHdTMldkVlRFZWp4di9ibUpwZDZLV1NDSjBDN0kzVExpWHFIdTkybTlwanArSm13WHVpQXNiYzcxeEhVdVlvbFVESDBmRWJ3Lzl2NU8yZkJWNFgxQ2svSXZWWGEvOEdxVGxkWlFGNzN2SXlJWFErTkV5VHNySkYvbG5WU3pzdUVCb1dsUzBRQzNDdzhLcS9uaVdPREFtano2WnhKTHZSVjVETytKMFBmTGh1OEt2T2kyTFZtaGlyOG5yRzlMZ1lycVpmMVdabTRyazFoU0JvYm1PYThpdlNzdjVqMHE4ZXZDdExPOUtoVkNoMjhJbmhkQ3dvWE1YbXNpWWNSTThqb3JCYTl5dlJUL3BwRDVDMnZRUVBKaDl3blhObGhuMVZXdEROeElMWGNpc1hUVnJFRGc3bEZJL241TldHcFFlWFJDdDJrUzFCYk1nUk53STFWU2lTVkdramowSEd6ZWExeC80dFl2cGJhTS9RT3JBMGNTTlUwbGxzNWVKWGo5UlRGOGYwcXdMdmRJUVlacmp3STNWcVVwbmtnc01aR0xadE11Y3JELzg5SXgwVFpqdWpPa29LdFhtUTFjbWFOL212TjVPYi9YMVFzTU1kejM4eUozU2xHdklRY2NnU3R6SkkxWU44NDUwOCtPTC9wUmRhRHBqUDU2MDNuVXhZbGNtVU1zZFcxTXpVbm1lWlJicFRRckZMd0pOL2ZmNjAzcG9PK0t3Smt4OWVjUVMwY1RHVGgybGQwdm43V3JXcVptbjhrOHcrNEpjempUSldLUjFlYldqVmZaS01WSjhYaVV5Y1JTbDhhNnBMcVhrdFRsT0JyRzY0UURueENDZVAxaExBdmN3WTZCeEh1c09jeUxUblN3N2NKYU1VK3oyVGdseHJnVEp4YUwrVHdLZG16MnFIaE01dy9vTzdORWp6TEduU0d4UW1SdjhiNWFIaWN6Ry9RNmhJL2FSeWppZFhhNGRIUjJPQ1NXRFBMODN5RjRISzByUXF6b1ZZWWNHaVZXbTR2Z3lqcnkzV1VMTUhUOVRZWjBLYXJLa0VOZElSWXZmT3VLakFYQnpvd2FKNWJHUmhhZkFZL0NEWFBQaStiaVB1Znh1dEVmZlB5NDVlOUxBcGVHQmd6SFJzdGFwK2hHUTNoZGpKaGtFajhVejg5dURyZ1UvVEo0STU5WDhUeDBwUG5jczAzTWJJYzlsdWRIdTdvVVgwVkU4MHlzUWNvcTZyRzg1cTlvaUxIRVhOUXl6cmZESU5paEhSZUlwV0NMK0lTWGZYZ1ZyemR1Si9uYjh6M1B4WENLSHN2ek1FamplRzZFTkhKNXQra3lpT1Y1R0tSaHV0aGplYmRwYVUrc3RENmozZjNlZTZ3QnNid21ScU9tOTk0SWtSMmpXKzgyTGFISElpSG5XYndQRzBtKzkwNnNoVjBnbHZjWU1ZbFkzcGNBdVNmV3JGckZjekl4aVZUc0krbUxiVjdGUGJFKzRkWHpPZlQyYkp0clloR0hiTTNSUUY1UHdUYXZzWlpyWXQwbHgzdWYwVTRpUGJaaG8wZHhUYXhQZXZSNFFaMjkyamdnVmtGYlRaek9VdVIxSmpTcFZ3bHNkTG5zbW5URDJYcDlVMHZwbmdQYm9nNzVlTkVMREp4LzFpT3hTT2h1TmVDOHBsVFlwb3E4SmJGZEV1dERjdlRsVGJXcWdYcXcxZHNUMGk2SjVYRm9LTXRQYnphN0l4WUw5ZHY0enhKbGlWSDIrdHRWd1BLeWhUUjR2VHRpYlpWemlBdm5tMkF6c1pZWGNVZXNqM3J4YkExNnVpUFdxUnFjVUVlUnN5clU4K1BuWlgxQ1Bnc2ZlSkJUZExFblBHZ3FIZTkwb21lZGFucnh3UWxQeFBwd25TM21wR3d2UGhnUWkzOXVhRjFXU1VHdi84R2hTdC9pQTN4aFhVNWVGUDViNW1uam1ucjVwVGJoUnV1K09BMm5HQW9SNjNIV3BndHE5bi9sQWV1K0dIQXBJcGJsNFpEMTMydDZTZzA5Z0M4c3I0a2ZJOVlyUTdYdGZlQVYxZEVQd0o1MnpXdUVMeXovOTQzQlAxU1BHdXg0OC83SlhhTmxKK1kyb3VJVExiOFBmc0NsQWJFVWJKRWt0Wm9vblE4TCtvcnl6dXFibFU4RkxvME5NUzhXdGE2QjgzbGhTUmZmZjFYV2RhUWRMTDdNWmNpaGFDakUwT0hPc2xaWGVQMHRLbXVtd3ZLNlVoUSt3VGZXWk1paFVXSlpqTE5tTXp6M2NzWnh6NGV6Yk12eVRSdTJEemswSkpiR3hqUFN4Rm8raXk0L1RmYm93RU5wQnp1dy8wK3lZZThFTzZ5RkNDY0Nod1lxRDRrVkRIaGhnaUZ0SEVwejNsdFM1a2ZDYTIwbzFWQ2RUTnQvS0dCcmtrejYwU1dkWC9lK01lN0VpWFdrN3RvTGxzK0swU1Q1dFhiK1Q3Q21iNUt1MCs3RHRtZUUzNlFVa09hYmxOTnIzejNXRm1QRVVsZkdyK1QxMmxYSVg4SFNoRlAvbzMxL0NQc1BKaHp2eXE1RHdaRGZhOHV3SDVjazM4VFBhZXI3NjRFN3cvckdpQlgyampGdmVHWTdIeTZOVlVzTStLQndMdXdud0xXa2IxQ3I5T2F3U29qdWhtRHJBMEk4L28zN3BuU2xKUXFZMHdiV2lUWDZNTzE1R2Y1OVlXd3MxL2ZIU3pqRTZxVlB4QlI3WHQ5L0lPQ0RTRVo5RSsxcmE1dE5yQkRaSDJ0THcxaTlvOEg1TDNYc243SGpmUDFid2o3dnV4NUpNR0NIOXYxcVpEOWhpd1U1TmpvYmpCUks2ckU0Tm9lQjBRVU5iL2VGK2doZ2lUV1NaTDkyZ3E0SUtZYTAyUEYzT3ZiYllPaWtWRVNUdmtqa1NtSldXeStBWHlqTjdoYmFmajhULzZ6b0NpRXBlTlh1b1d6VnA2OE12L24rY0wvVXorcUZ1VmRJREhhMFpWUGZWUDBQcThlYU15d245bGpoeEFNdEswMzFPQzZMVkp6SDBFSEE2MTNvcWJKSWhZMy9GZG9tRlhvY1NDSVZCeEtKeFFISklXRU9FemxnVUFocWYyRlFyNklxL2J6b0JTMmVEemNPcGRXZlNpd3hrWXh2MmxpZlZsNmIrNWtkL3JWTkJVclcvUmRkdjZ0a0dVMWVmakJ3SkxIT1ZHS0ZzeGtPMzA2ODB1Yk9IMHV0NHpaVm02alZpenI2azRsbjJEb0lKeWFHU2hPSkpVWVNuSG1LWFVnaWZrZEFieS95aGhUOXRtRDV1WU80THc4SGJzVDNENzlQSkZZNDYybHR6dzJ2c1ArQkZFVThtV2hWYTJKRGtyNzQySXZBaFV4OU00a2xacDVSUVZFK3lZdnhqMHBSVmdaWS9rRXduRUNxdnd1ZVpGL2d4RVNkTTRrVnJvYWhucnBxMUg1WStDa2ZqQXJ4NEhhanVxV3BCUWN5ZXlzdW5ra3JJYjVmU2ROcnRHOUxmTC9CNy94WTdoUkk4UEtTdG9zRmkwS1A5Vy9oSWVFZmd1WGVWZW9OWklkNnEvaTkydWpZMkRZM3NiaEs1THBERzdMaEZtV1JsUHFZOERtQkg0RW5lVTdLc2hUb3p3TDVJWXR5VktRaXBaTkxpaEpyc1VyZEpsanJCZWladml5c0VEekw4MUtldUd1M01TUG9YYmVMV0xuZjhaRTN4aHJZR1FyZWE4em96ZExuUHNFN3FYRHJ0Y0szaEUxOE1TUjdpNUFLdlFzUkt4aEs4R1lwQ2ZrRjZXT3RCdzJ1bW1yREFnQnNzaUswZGE2QWZWVGh3c1FTYzhtOVBDbFlTVUltTHRzWU5kTGhaeXMyMGNaUGhqWXY1TVpDTWRab3lZWm1pZGh3cThCU2t1c0Zoc1RMQlo0VVp2a3VQUUE5V2dSK0dNekFpQnNpNEVBeTRCRjQzY0RKQUxMNUxEaGttUXB5cGNCU0hzcVBzRVNmTHhrQnk0MmkrdGp5QTBiUHFENjJCT25rQ0ttSFJYdmMxbmxXWURVSDYvclJzMjNKUFF1TUt6bzFzU2hJNUtJeGI0NFgybi92aEFmMnE2ZGllYzVVVW5nb2pOWENyK3VsMkw3K3EzOFAwS2EwN2RSU2lsZ0c0NjJwSGRGZk9QVEExSEhWc0FSOUtFVXNDaEs1eUczc0VJZ2Jldkh0QWRxUXVDcDN2aXJOM05MRW9tQXBRbUM3VTdBUWNLSlNMOFU5UU52dERHMVovT3JZRlpVUWl6S2wwREZ0UEsyQWpMbGkzbi9kRmRxd0VrZFVSaXkwa1dKTWw1K3FSTE8ra0NZOThGUm91OHJxckpSWWFDVUZEMnJqYmYxV1pRNTFXQkRycTJpelNxVlVIbXVTSnNweHJkUHh0WlBPNlkrMTdnRklWU3F0a0daQmJjU2lRcEZydFRicjB5cnY5N2ZxQVlhL3ludXF5S0phaVVVbEl0Y04ybXdRYXErTCtucko5QUN6UHdKMTR1SGFwSkhHRnJtNGY3ZFo0TDVaTCsxNWdEd1ZLUVZtOExWS0k4VENBcEdMbTdkYkJHN1E5dEs4Qjhpb2sveU1icWJYcWtGanhNSUtrV3V4Tmh1RjVYenZwVEVQY08rUDVTK2xNK3A1Tlc2VVdDZ2xjbEVuTThaK1ZRUU9xVi8ycTRvOUloV3hWV1BTT0xFaXkwUXdIbmdncU8rSHhzZ3AxVzRaK2dqU2N6MVZVMjNWTGMvVVJDNFc0ckcrdXg4YXEyMVpocjRuUktvejFSYWJ2N1RXZXF4SXhUQTBydEgzVzRSKzFoZzVacm90czc2OXd0Tk5EMzF4ZFZzblZxU1FDRVpnZjV0ZzlibkZTRldyVzE3RXRsdUVhaXhBbitRSU04U0tsQXl4RjluNnk2SjkvWGFpQjFnelR4YTlsVmdxVFROenhFSlJrWXNoa1ZranFQeEd1Y3JzZ3ZCQUNETSsxcWFiVzJScGtsaFJxNHRnQlBmRVh5dUZQdjY2NEJoSWRGZ2dqbW90T0wrZ1N2cGYwOFNLMUJiQlNFbk1DcXVGaGRIK2ViYmxjVEZ1R3ZOQ1dWSUpwc1VGc1NJUGltQ0w5SG1WQU1ubVMvNExFaDBRRG9sUWIybnJRbHdSSy9Lb0NFYXZkWjF3bzhBTjdpNEtONHFQQ00rSlVQUldyc1Fsc1VZOUhPSXdDQWFXalI1eitKbi92QWFaamxpT24vTDQxVDJ4Um8wVXlYajBIWUp4dTJqcDZESERuM21FbjFRQlpPSlIrMDVJcDRnMTJpS2hKN3RLKzY0TzRQMEtGb1QzUXZDZUJuRGNlOCtVNXRET0VpdHVzSWdHc1NBYTY4Skl2dEtqa2UydlU4aUMweU9SeEdRZEZFU0NXSjJYZVVPc3BKWVUyY2lOUlNTRGFKQ1BpVUVhZEdqd2xoaUM2U1JBR29nMElKTklaQzV4S2QwYWtmOERzc2tqWUpFSmxmWUFBQUFBU1VWT1JLNUNZSUk9XCJcbmV4cG9ydCBjb25zdCBJY29uV2VjaGF0OiBzdHJpbmcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFrMUJNVkVYLy8vOEFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOStOTHdQQUFBQU1IUlNUbE5OQU1rSFNUa3hLL3RVaTZKUFF5VWhHeGpYeE1EdXhxZVlrSDExYldsa1hGajI2N20xc2ZEZWhIaGdQT1hRbmZMV3VzOU5BQUFDSEVsRVFWUkl4NldXMTVhQ01CQkFaeE9SYWtFUVVJcll5NjV1L3Yvck5qaUJZQWpMOFhoZndHTXVrNWxVK09wQTU2WXhHUUdNSm9ZNXA5My9WWVhPREhqQm1ORi9GVG9HRFdQYXExQnpCRnBHSnRVclBncDZ5ZGNwVS9pWGFWY1p3d0JqVmZtR1FiNmxvc1FZakFOcUh2YkZQUVQ3ZUxYUjVTTVZIMnJTYU1zRWkxWFg4V3VGMXRVdEF0Ym12TzdVbWdyRkJPUjZZcTlZRDlVeFVhbURPQmJyc05lRWdhWmFLUm9LYnFkcVhLSDR2bGt5SFphYUQrWEtERjhQVE0rUDk2ck11R0pnc1N6V2cxSnI0d3VvRXFRYlJ1MFp6UEZseDNySm9RMFhjRkF5MWsrUXJOYTJWRXpBVkZaaWtoelAyT3B3a3NxT0VCSWxqV1RBQkNwY2JBbmczVEhqMjIram5FakZ2a0NEQ3pqMFIxWlJqWUhEbUZYVk5XeVVMWGtTNHR4R29WRWNBRWo0cytUUHU2cVFJN3pnWWowTHlLdEpFTm84V01PU0NGSm94eEV0ckozNGNDWEs5QVV1Q2lMOUcrdm5YQ3VCaCtrYjhPVGNyOFJGVE1MOHdwMFNpMnlpOHVnMVRpbXNpUXQyUk1nTmgzS09Tdm5icHl3T2x6MkpISmRIOFhEQ1VFQ1NIbU5KR25DSjBucnlnN2ZRR3RaZEtza3pGYm5Fd05VYUMybEVtM3FKVVVEU0FRT0RBRzF0RjJYWDJJVkVFdG5BR2N0TkNaZU0xUjcxYld6YnNWUkNzU25KcmM4anpDSzVkd2tzMGFYSHMrdlhJNm1JblpBVWN1dkRNTGx6RmF2b2xqcnJySVNhVFhiTitTODd5ekNJc28wUDRTdUh4VERUOTQrazl3Kyt6NC9YNFVQODg2dkM4SVhrN1d2UHg1ZXI5Njl3ZjhBY2d5cWpMUk8vQUFBQUFFbEZUa1N1UW1DQ1wiXG5leHBvcnQgY29uc3QgSWNvbkVtYWlsOiBzdHJpbmcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFiMUJNVkVYLy8vOEFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vK2hCSzkzQUFBQUpIUlNUbE5OQU5TM3E4OEVTRGt4Sndua1hadERMU0ViR1BMTHZkckRkZnozUE9sNWI2ZUlaNkRmT052cUFBQUJnVWxFUVZSSXg2WFcyWGFESUJBRzRJbVVSVFJWNDVxdFRkTzgvek9XUTBBeWRXUGEvM2pod3VkMllBQjJrNGhEcVFvSklBdFZIc1QwK20rU1ZRcFFWSld0a2l5Rm1hVFpJaEVhRnFMRlBLa2xMRWJXYzBURGF2U0VpQlEya2dwTXhBVTJjeEdJcEJDUjlKVm9pSW9PcEliSTFKNElHVXVrY0VSRGRQU1RaUGJnczAzVzgyYWJaWWI0djlVOHR0SzV2d2IrSVkvTjVNL0hHRkxadldNc3FReFJOS0oySUlCR0REZ1FpUUVsa1JpZ3dPYmViQklPTmdvS3NObXo1THdLcnNNNzJCUWdQV0dzWDBiTndKZ2pCZ1RDdXY0MEQxckdSZ0tJR0pSUDBaa3pob2hFaEExSmc4RXBIeGdpTW55K0JkeDAyYjU1QVZkemdqL1IrUGtxa000QW0vNTZ0dTJiM0ozZ1hTQUtTazg2UEdENkhoMjJuU2VsN3pCM0I3amQ1dEorK3c0andPYkRBUVQ1dUlWaGFjQk9qWVRIakdSbGg1Z24rTlh3TGJnbjFUaVFqN2cxZmpOY0wzeTUyTGZKVnI1Y3VRaEY2ZmEybXBzVmtORkwzMThLTEwyTTB5Y0wrcFJFbi9qbzB5dDVFcWN2RmVnTEV2S3k1OStMSy9vUzdnZnZmRXFMenFNZzlBQUFBQUJKUlU1RXJrSmdnZz09XCJcbmV4cG9ydCBjb25zdCBJY29uQ29weTogc3RyaW5nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU9DQVlBQUFBZlNDM1JBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFEcUFEQUFRQUFBQUJBQUFBRGdBQUFBQzk4RG42QUFBQW5VbEVRVlFvRldOZ1FBQnhJUE1MRVA4bmdEOEE1Vk1aZ1FReWNBWnl1SkVGc0xBOWdHTFJMRUNDSDRoVm9BcEFwb0V3T25nRkZIZ01GUVRweVFRUmw0QllEaXFJaS9vSGxOQUM0cHN3QlNDTklFM2VRSHdjSm9pRmZnRVVrd1ZpRkkwZ2RaK0IrRDJJZ1FPQUFnd0ZNS0h3U09DTWFzUWVXQitCd2g5QjhRZ0NKa0RNRG1aaEo1QURjUzlRaVRSSUdZaEJLR0dERW9Ba1NERU1BQURxd3lWRlVMUVBuZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXG4iLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIlxuaW1wb3J0IHsgSWNvblFRLCBJY29uQ29weSwgSWNvbkVtYWlsLCBJY29uV2VjaGF0IH0gZnJvbSBcIi4vYXNzZXRzXCJcbmNsYXNzIExpbmtlYXNlTmF2aWdhdGlvbiBpbXBsZW1lbnRzIExpbmtlYXNlTmF2aWdhdGlvbk5hbWVzcGFjZS5MaW5rZWFzZU5hdmlnYXRpb25DbGFzcyB7XG4gICAgbWVudXM6IExpbmtlYXNlTmF2aWdhdGlvbk5hbWVzcGFjZS5NZW51VHlwZVtdID0gW11cbiAgICBub2RlOiBIVE1MRGl2RWxlbWVudFxuICAgIHN0YXRpYyBnZXRXZWhjdGFRcmNvZGUoKSB7XG4gICAgICAgIHJldHVybiBcImh0dHBzOi8vYXNzZXRzLmtvb2xjZW50ZXIuY29tL2xpbmtlYXNlL2xpbmtlYXNlX3dlY2hhdF9xcmNvZGUucG5nXCJcbiAgICB9XG4gICAgc3RhdGljIGdldFFxUXJjb2RlKCkge1xuICAgICAgICByZXR1cm4gXCJodHRwczovL2Fzc2V0cy5rb29sY2VudGVyLmNvbS9saW5rZWFzZS9saW5rZWFzZV9xcV9xcmNvZGUucG5nXCJcbiAgICB9XG4gICAgb25IYW5sZGVDb3B5KGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHYgPSBlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke3Z9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBlLnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hdmlnYXRpb1RvYXN0KFwi5aSN5Yi25oiQ5YqfXCIpKVxuXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZS5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYXZpZ2F0aW9Ub2FzdChgJHtlcnJvcn1gKSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWxsQnV0dG9uT25DbGljaygpIHtcbiAgICAgICAgY29uc3QgYnRucyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwidWwubmF2aWdhdGlvbi1pdGVtIC5uYXZpZ2F0aW9uLWl0ZW1fZGlhbG9nLWVtYWlsIGJ1dHRvbi5jb3B5XCIpXG4gICAgICAgIGJ0bnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBpdGVtIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICBlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhhbmxkZUNvcHkoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3JlYXRlTmF2aWdhdGlvVG9hc3QodmFsdWU/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IFwibmF2aWdhdGlvbi1pdGVtX2RpYWxvZy1tc2dcIlxuICAgICAgICBlbC5pbm5lclRleHQgPSB2YWx1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsLnJlbW92ZSgpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgICBjcmVhdGVOYXZpZ2F0aW9uTWVudShtZW51OiBMaW5rZWFzZU5hdmlnYXRpb25OYW1lc3BhY2UuTWVudVR5cGUpIHtcbiAgICAgICAgY29uc3QgZ2V0RGlhbG9nUXJvY2RlSFRNTCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChtZW51LnFyY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbV9kaWFsb2ctcXJjb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbGF6eWxvYWQ9XCJhdXRvXCIgc3JjPVwiJHttZW51LnFyY29kZX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXREaWFsb2dFbWFpbEhUTUwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVudS5lbWFpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbV9kaWFsb2ctZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke21lbnUuZW1haWx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHttZW51LmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29weVwiIHZhbHVlPVwiJHttZW51LmVtYWlsfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGxhenlsb2FkPVwiYXV0b1wiIHNyYz1cIiR7SWNvbkNvcHl9XCI+XG4gICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0RGlhbG9nVGV4dEhUTUwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVudS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1pdGVtX2RpYWxvZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWVudS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0SWNvbkhUTUwgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IG1lbnUuaWNvbiB8fCBcIlwiXG4gICAgICAgICAgICBzd2l0Y2ggKG1lbnUuaWNvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgICAgICAgICAgICBpY29uID0gSWNvblFRXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XG4gICAgICAgICAgICAgICAgICAgIGljb24gPSBJY29uRW1haWxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwid2VjaGF0XCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInd4XCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIndlaXhpblwiOlxuICAgICAgICAgICAgICAgICAgICBpY29uID0gSWNvbldlY2hhdFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbV9pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbGF6eWxvYWQ9XCJhdXRvXCIgc3JjPVwiJHtpY29ufVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldFRpdGxlSFRNTCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbV9kaWFsb2ctdGl0bGVcIj4ke21lbnUudGl0bGV9PC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpZ2F0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICR7Z2V0SWNvbkhUTUwoKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1pdGVtX2RpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1pdGVtX2RpYWxvZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2dldFRpdGxlSFRNTCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtnZXREaWFsb2dRcm9jZGVIVE1MKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAke2dldERpYWxvZ0VtYWlsSFRNTCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtnZXREaWFsb2dUZXh0SFRNTCgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbV9kaWFsb2ctdHJhbnNwYXJlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIGBcbiAgICB9XG4gICAgY3JlYXRlTmF2aWdhdGlvbk1lbnVzKG1lbnVzOiBMaW5rZWFzZU5hdmlnYXRpb25OYW1lc3BhY2UuTWVudVR5cGVbXSkge1xuICAgICAgICBsZXQgaHRtbCA9IG1lbnVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5hdmlnYXRpb25NZW51KGl0ZW0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBodG1sLmpvaW4oXCJcIilcbiAgICB9XG4gICAgY3JlYXRlTmF2aWdhdGlvbkNvbnRhaW5sZXIobWVudXM6IExpbmtlYXNlTmF2aWdhdGlvbk5hbWVzcGFjZS5NZW51VHlwZVtdKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IFwibmF2aWdhdGlvbi1jb250YWluZXJcIlxuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12LTA0YmQxNTQ1XCIsIFwiXCIpXG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSB0aGlzLmNyZWF0ZU5hdmlnYXRpb25NZW51cyh0aGlzLm1lbnVzKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSlcbiAgICAgICAgdGhpcy5hbGxCdXR0b25PbkNsaWNrKClcbiAgICB9XG4gICAgY3JlYXRlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVzXG4gICAgICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uQ29udGFpbmxlcihtZW51cylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uQ29udGFpbmxlcihtZW51cylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TWVudXMobWVudXM6IExpbmtlYXNlTmF2aWdhdGlvbk5hbWVzcGFjZS5NZW51VHlwZVtdKSB7XG4gICAgICAgIHRoaXMubWVudXMgPSBtZW51c1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uTWVudXModGhpcy5tZW51cylcbiAgICAgICAgdGhpcy5hbGxCdXR0b25PbkNsaWNrKClcbiAgICB9XG4gICAgZ2V0V2luZG93TGlua2Vhc2VOYXZpZ2F0aW9uTWVudXMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0V2luZG93TGlua2Vhc2VOYXZpZ2F0aW9uTWVudXMpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0V2luZG93TGlua2Vhc2VOYXZpZ2F0aW9uTWVudXMoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihvYmo6IExpbmtlYXNlTmF2aWdhdGlvblByb3BzKSB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubWVudXMgJiYgb2JqLm1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVzLnB1c2goLi4ub2JqLm1lbnVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRXaW5kb3dMaW5rZWFzZU5hdmlnYXRpb25NZW51cygpXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51cy5wdXNoKC4uLnZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG4gICAgfVxufVxud2luZG93Lk5ld0xpbmtlYXNlTmF2aWdhdGlvbiA9IChvYmo6IExpbmtlYXNlTmF2aWdhdGlvblByb3BzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBMaW5rZWFzZU5hdmlnYXRpb24ob2JqKVxufVxuZXhwb3J0IGRlZmF1bHQgTGlua2Vhc2VOYXZpZ2F0aW9uIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibWVudXMiLCJjcmVhdGVOYXZpZ2F0aW9uIiwibGVuZ3RoIiwid2luZG93IiwiZG9jdW1lbnQiLCJib2R5IiwiY3JlYXRlTmF2aWdhdGlvbkNvbnRhaW5sZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0aGlzIiwicHVzaCIsInZhbHVlIiwiZ2V0V2luZG93TGlua2Vhc2VOYXZpZ2F0aW9uTWVudXMiLCJnZXRXZWhjdGFRcmNvZGUiLCJnZXRRcVFyY29kZSIsIm9uSGFubGRlQ29weSIsImUiLCJ2IiwiZ2V0QXR0cmlidXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInBhcmVudE5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVOYXZpZ2F0aW9Ub2FzdCIsImNhdGNoIiwiZXJyb3IiLCJhbGxCdXR0b25PbkNsaWNrIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsIm9uY2xpY2siLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY3JlYXRlTmF2aWdhdGlvbk1lbnUiLCJtZW51IiwiaWNvbiIsImdldEljb25IVE1MIiwidGl0bGUiLCJxcmNvZGUiLCJlbWFpbCIsInRleHQiLCJjcmVhdGVOYXZpZ2F0aW9uTWVudXMiLCJtYXAiLCJqb2luIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2V0TWVudXMiLCJOZXdMaW5rZWFzZU5hdmlnYXRpb24iLCJMaW5rZWFzZU5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9