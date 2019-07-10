import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{ 
  var dis = Number(el.getAttribute("dis"));
  el.addEventListener("scroll",()=>{
    var st = el.scrollTop;
  if(st>dis){
    		binding.value.flag=true
    	}
    	else{
    		binding.value.flag=false;
    	}
  })
})
Vue.filter("formatTime",(value)=>{
  var d = new Date(value);
  return d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"
})