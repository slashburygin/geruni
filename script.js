const parts = [
  {value:'54', unit:'м', title:'Главное сферическое зеркало', text:'Выложено из 3 600 алюминиевых щитов, отлитых вручную и отполированных с точностью до 70 микрон. Огромная чаша собирает радиосигналы далёкого космоса.'},
  {value:'3', unit:'опоры', title:'Подвесной комплекс', text:'Вторичное зеркало удерживается над чашей тремя бетонными башнями. Подвесной комплекс компенсирует сферическую аберрацию главного зеркала и направляет собранный сигнал.'},
  {value:'2,6', unit:'м', title:'Оптический телескоп', text:'Расположен в центре конструкции и работает синхронно с радиозеркалом. Два инструмента позволяют исследовать небо в оптическом и радиодиапазонах.'},
  {value:'60', unit:'м', title:'Бетонные башни-опоры', text:'Три 60-метровые башни поддерживают подвесной комплекс над сферическим зеркалом. Их силуэты — узнаваемая часть архитектуры телескопа.'}
];
document.querySelectorAll('[data-part]').forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.part), part = parts[index];
  document.getElementById('part-stat').replaceChildren(document.createTextNode(part.value), Object.assign(document.createElement('span'), {textContent:part.unit}));
  document.getElementById('part-title').textContent = part.title;
  document.getElementById('part-description').textContent = part.text;
  document.querySelectorAll('[data-part]').forEach(item => {const active = Number(item.dataset.part) === index; item.setAttribute('aria-pressed', String(active));item.classList.toggle('active', active);});
}));
const timeline = document.querySelector('.timeline');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function moveTimeline(direction) {timeline.scrollBy({left: direction * timeline.querySelector('article').getBoundingClientRect().width, behavior:reducedMotion.matches?'instant':'smooth'});}
previous.addEventListener('click', () => moveTimeline(-1));
next.addEventListener('click', () => moveTimeline(1));
function updateControls(){previous.disabled = timeline.scrollLeft <= 2;next.disabled = timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth - 2;}
timeline.addEventListener('scroll', updateControls, {passive:true});
window.addEventListener('resize', updateControls);
timeline.addEventListener('keydown', event => {if(event.target!==timeline)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveTimeline(event.key==='ArrowRight'?1:-1);}});
timeline.addEventListener('wheel', event => {
  if(event.ctrlKey || Math.abs(event.deltaX)>Math.abs(event.deltaY)) return;
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? timeline.clientWidth : 1);
  const canMove = delta > 0 ? timeline.scrollLeft < timeline.scrollWidth-timeline.clientWidth-2 : timeline.scrollLeft>2;
  if(canMove){event.preventDefault();timeline.scrollLeft += delta;}
},{passive:false});
updateControls();
document.getElementById('year').textContent = new Date().getFullYear();
