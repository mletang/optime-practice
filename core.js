(function(root){
const same=(a,b)=>a.length===b.length&&[...a].sort().every((v,i)=>v===[...b].sort()[i]);
function shuffle(values,rng=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function select(bank,course,count,rng=Math.random){const pool=bank.filter(q=>course==='all'||q.course===course);return shuffle(pool,rng).slice(0,Math.min(count,pool.length))}
function score(questions,answers){return questions.reduce((n,q)=>n+Number(same(answers[q.id]||[],q.correct)),0)}
function remaining(deadline,now=Date.now()){return Math.max(0,Math.ceil((deadline-now)/1000))}
const api={same,shuffle,select,score,remaining};if(typeof module!=='undefined')module.exports=api;else root.QuizCore=api;
})(typeof window!=='undefined'?window:globalThis);
