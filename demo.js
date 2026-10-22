const stages = {
  moldes: {number:'01', title:'Preparar os moldes.', description:'A Carizé descreve a criação e o escalonamento de moldes como parte do seu processo de produção.', image:'servicos-carize-5.jpg', alt:'Equipamento de traçado sobre uma superfície com desenhos de moldes', caption:'Equipamento de traçado na galeria Carizé.', film:'A preparação de um molde e a explicação de uma escolha feita nessa etapa, num trabalho que possa ser divulgado.'},
  corte: {number:'02', title:'Planificar e cortar.', description:'O website da Carizé apresenta a planificação e o corte automático através do sistema CAD/CAM.', image:'servicos-carize-2.jpg', alt:'Equipamento junto de tecido numa mesa de trabalho', caption:'Equipamento e tecido numa mesa de trabalho, na galeria Carizé.', film:'A preparação do tecido e uma parte do corte, com a equipa a explicar o que é necessário verificar antes de avançar.'},
  costura: {number:'03', title:'Dar forma à peça.', description:'A linha de costura integra máquinas adequadas ao produto, segundo a apresentação da Carizé.', image:'servicos-carize-1.jpg', alt:'Pormenor da agulha e do calcador de uma máquina de costura', caption:'Pormenor de uma máquina de costura publicado pela Carizé.', film:'Uma operação de costura numa peça autorizada, mostrando o gesto de quem trabalha e a função dessa costura.'},
  acabamentos: {number:'04', title:'Trabalhar os acabamentos.', description:'A Carizé descreve diferentes possibilidades de acabamentos, lavagens e tingimentos. A opção adequada depende da peça e deve ser confirmada com a empresa.', image:'servicos-carize-3.jpg', alt:'Peças de vestuário suspensas numa área de produção', caption:'Peças de vestuário na produção. A fotografia não identifica uma operação de acabamento.', film:'Um acabamento escolhido com a equipa e o detalhe que permite perceber a diferença na peça.'}
};
const tabs = [...document.querySelectorAll('[data-stage]')];
function selectStage(button, moveFocus = false) {
  const stage = stages[button.dataset.stage];
  tabs.forEach(tab => {tab.setAttribute('aria-selected',String(tab===button));tab.tabIndex=tab===button?0:-1;});
  document.querySelector('#stage-panel').setAttribute('aria-labelledby',button.id);
  document.querySelector('#stage-count').textContent=`Etapa ${stage.number} / 04`;
  document.querySelector('#stage-title').textContent=stage.title;
  document.querySelector('#stage-description').textContent=stage.description;
  document.querySelector('#stage-film').textContent=stage.film;
  const image=document.querySelector('#stage-image');image.src=`assets/${stage.image}`;image.alt=stage.alt;
  document.querySelector('#stage-caption').textContent=stage.caption;
  if(moveFocus)button.focus();
}
tabs.forEach((button,index)=>{
 button.addEventListener('click',()=>selectStage(button));
 button.addEventListener('keydown',event=>{
  let next;
  if(event.key==='ArrowRight')next=(index+1)%tabs.length;
  if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
  if(event.key==='Home')next=0;
  if(event.key==='End')next=tabs.length-1;
  if(next!==undefined){event.preventDefault();selectStage(tabs[next],true);}
 });
});
document.querySelector('#show-request').addEventListener('click',()=>{
 const garment=document.querySelector('#garment').value,phase=document.querySelector('#project-phase').value;
 const context=phase==='ideia inicial'?'uma ideia inicial':phase==='amostra ou ficha técnica'?'uma amostra ou ficha técnica':phase;
 document.querySelector('#request-text').textContent=`Gostaria de falar sobre a produção de ${garment}. Neste momento, tenho ${context}. Que informação devo reunir para percebermos se o projeto se enquadra no vosso trabalho?`;
 document.querySelector('#request-result').hidden=false;
});
