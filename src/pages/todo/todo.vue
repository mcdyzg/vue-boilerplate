<template>
<div>
	<input 
		v-model='todoItem'
		@keyup.enter='addTodo'
		placeholder="添加todo" 
	  />
	 <ul>
	 	<li 
	 		is='todoItem'
	 		v-for='(todo,index) in todos'
	 		:text='todo'
	 		:index='index'
	 		@remove='removeItem(index)'
	 	>
	 			
	 	</li>
	 </ul>










	<br />
	<br />
	<br />
	<br />








	 <div @click.self='clickMe'>
	 	点击我
	 	<div>我是子元素</div>
	 </div>









	<br />
	<br />
	<br />
	<br />









	<div @click.once='clickMe'>
		我只能被点击一次
	</div>










	<br />
	<br />
	<br />
	<br />











	<div @click.meta='clickMe'>
		我是组合点击的
	</div>











	<br />
	<br />
	<br />
	<br />
	









	<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
	<label for="jack">Jack</label>
	<input type="checkbox" id="john" value="John" v-model="checkedNames">
	<label for="john">John</label>
	<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
	<label for="mike">Mike</label>
	<br>
	<span>Checked names: {{ checkedNames }}</span>















	<br />
	<br />
	<br />
	<br />














	<select v-model="selected">
		<option>A</option>
		<option>B</option>
		<option>C</option>
	</select>
	<span>{{selected}}</span>















	<br />
	<br />
	<br />
	<br />















	<select v-model="selectedArr">
		<option v-for='todo in todos' :value='todo.substr(1,2)'>
			{{todo}}
		</option>
	</select>
	<span>{{selectedArr}}</span>
















	<br />
	<br />
	<br />
	<br />















	<input type="radio" v-model='inputValue' value="bbb">
	<span>{{inputValue}}</span>
	<input type="radio" v-model='inputValue' :value="inputValue2">
	<span>{{inputValue2}}</span>














	<br />
	<br />
	<br />
	<br />













	<!-- toggle默认为123，当复选框选中时，toggle的值为a,没选中时，toggle的值为b -->
	<input 
		type="checkbox" 
		v-model='toggle'
		:true-value='inputValue'
		:false-value='inputValue2'
		>
	{{toggle}}















	<br />
	<br />
	<br />
	<br />














	<select
		v-model='selected2'
		>
		<option :value='{number:"123"}'>111</option>		
	</select>
	{{selected2}}















	<br />
	<br />
	<br />
	<br />












	<!-- 判断是input事件还是onchange事件，如果加了lazy，就变成了标准的onChange事件，只有在input获取或者失去焦点时才会改变值 -->
	<input
		v-model.lazy='inputValue3' 
		type="text" >
	{{inputValue3}}














	<br />
	<br />
	<br />
	<br />















	<input
		v-model.number='inputValue4' 
		type='number'
		>
	{{inputValue4}}






</div>
	
</template>

<script>
import todoItem from '@/components/todoItem'

export default {
	name:'todo',
	components:{
		todoItem
	},
	data(){
		return {
			todoItem:'',
			todos:['第一','第二','第三'],
			checkedNames:['Jack'],
			selected:'',
			selectedArr:'',
			inputValue:'haha',
			inputValue2:'hehe',
			toggle:'123',
			selected2:'hahaha',
			inputValue3:'input3',
			inputValue4:'input4'
		}
	},
	methods:{
		addTodo(){
			console.log(event)
			// 外部组件调用子组件的方法
			todoItem.methods.haha();
			this.todos.push(this.todoItem);
			this.todoItem = '';
		},
		removeItem(index){
			console.log(event)
			this.todos.splice(index,1)
		},
		clickMe(){
			alert('点击了我')	
		}
	}
}
</script>
<style scoped>
input[type='checkbox']{
	-webkit-appearance: checkbox;
}
</style>
