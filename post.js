//<![CDATA[
var disqus_shortname = "myanime-space";
!function(){var e=document.createElement("script");
e.type="text/javascript",
e.async= true,
e.src='//' + disqus_shortname + '.disqus.com/count.js',
(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
!function(){"use strict";var e=function(){var e=document.getElementById("comments");return e||(e=document.getElementById("disqus-blogger-comment-block")),e},t=e();if(t){var n=document.createElement("div");n.id="disqus_thread",t.innerHTML="",t.appendChild(n),t.style.display="block";var d=document.createElement("script");d.async=!0,d.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.body).appendChild(d)}}();function toggleVisibility(i){visibleDivId=visibleDivId===i?null:i,hideNonVisibleDivs()}function hideNonVisibleDivs(){var i,l,e;for(i=0;i<divs.length;i++)l=divs[i],e=document.getElementById(l),visibleDivId===l?e.style.display="block":e.style.display="none"}var divs=["disqus-box","blogger-box"],visibleDivId=null;$(".commentbtn").click(function (e) {$(this).addClass("btncurrent").siblings().removeClass("btncurrent");});
function turnlight(){
turn = document.getElementById(&quot;btn-turnlight&quot;);
turn.classList.toggle(&quot;active&quot;);
document.getElementById(&quot;turnofflight&quot;).classList.toggle(&quot;active&quot;);}
$(document).ready(function(){
$(&#39;#theaterbtn&#39;).click(function(){
$(&#39;.toogletheater&#39;).toggleClass(&#39;theateractive&#39;);
$(&#39;body iframe&#39;).toggleClass(&#39;theateractive&#39;);});});
$(document).ready(function(){$('a[name="pside"]').before($("#pside").html()),$("#pside").html("")});
$(document).ready(function(){$('a[name="picture"]').before($("#picture").html()),$("#picture").html("")});
$(document).ready(function(){$('a[name="title"]').before($("#title").html()),$("#title").html("")});
//]]>
