//<![CDATA[
var post_numb=9999;var posts_upto=true;function post_infoanime(e){for(var l=0;l<post_numb;l++){var d,f=e.feed.entry[l],p=f.title.$t;if(l==e.feed.entry.length){break}for(var h=0;h<f.link.length;h++){if("replies"==f.link[h].rel&&"text/html"==f.link[h].type){var b=f.link[h].title,c=f.link[h].href}if("alternate"==f.link[h].rel){d=f.link[h].href;break}}var o=f.published.$t,m=o.substring(0,4),k=o.substring(5,7),g=o.substring(8,10),i=new Array;i[1]="January",i[2]="February",i[3]="March",i[4]="April",i[5]="May",i[6]="June",i[7]="July",i[8]="August",i[9]="September",i[10]="October",i[11]="November",i[12]="December",document.write('<li class="last-post-item">'),document.write('<span class="t1"><a href="'+d+'" target ="_top">'+p+"</a></span>"),1==posts_upto&&document.write('<span class="t2">'+i[parseInt(k,10)]+" "+g+", "+m+"</span>");var n="",a=0;document.write("<span class='t3'><a href='"+d+"'>Watch</a></span></li>")}};
//]]>