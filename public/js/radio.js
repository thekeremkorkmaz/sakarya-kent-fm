var cstrFreePlayerUid = 587459;
var cstrFreePlayerTheme = 'color';
var cstrFreePlayerColor = '000000';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//corscdn.caster.fm/freeplayer/FreePlanPlayerEmbed.js';
document.head.appendChild(script);

var link1 = document.createElement('a');
link1.id = 'cstrFreePlayerBL1';
link1.href = '//www.caster.fm/';
link1.textContent = 'Free Shoutcast Hosting';
document.body.appendChild(link1);

var link2 = document.createElement('a');
link2.id = 'cstrFreePlayerBL2';
link2.href = '//www.caster.fm/';
link2.textContent = 'Radio Stream Hosting';
document.body.appendChild(link2);

var div = document.createElement('div');
div.id = 'cstrFreePlayerDiv';
document.body.appendChild(div);
