from pathlib import Path
p=Path(__file__).parent
html=(p/'index.template.html').read_text(encoding='utf-8')
for marker,file in [('STYLE','styles.css'),('BANK','questions.js'),('CORE','core.js'),('APP','app.js')]: html=html.replace('/*'+marker+'*/',(p/file).read_text(encoding='utf-8'))
(p/'index.html').write_text(html,encoding='utf-8')
print('Built standalone index.html:',len(html),'characters')
