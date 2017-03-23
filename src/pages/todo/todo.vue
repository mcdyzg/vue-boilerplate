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
	 		my-like='HAHAHA'
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


















	<br />
	<br />
	<br />
	<br />












	<todo-item>
		<div>我是分发的slot内容	</div>
	 	<div>我是要分发的内容2</div>		
	</todo-item>











	<br />
	<br />
	<br />
	<br />
















	<todo-item>
		<div slot='header'>
			<div>我是头部</div>	
			<div>我是头部2</div>
		</div>
	 	<div slot='footer'>
	 		<div>我是尾部</div>
	 		<div>我是尾部2</div>
	 	</div>	
	 	<slot >
	 		<div>我是未分发的</div>
	 		<div>我是未分发的</div>
	 	</slot>		
	</todo-item>
















	<br />
	<br />
	<br />
	<br />














	<todo-item>
		
		<template scope='props'>
			<div>我是父元素的文字</div>
			<div>哈哈{{props.value}}</div>
		</template>
	</todo-item>




















	<br />
	<br />
	<br />
	<br />
















	<!-- 作用域槽相当于将template里的内容放到子组件的slot占位符里，只不过有时候父组件的template里需要子组件的变量，同时需要父组件的变量，这个时候需要通过scope属性将子组件的值传到父组件上。 -->
	<todo-item>
		<template slot='header' scope='props'>
			<li>{{inputValue}}{{props.text}}</li>
		</template>
	</todo-item>


















	<br />
	<br />
	<br />
	<br />















	<!-- 我是使用component组件渲染的子组件 -->
	<keep-alive>
		<compoennt :is='currentView'></compoennt>
	</keep-alive>
	
	<div @click='currentView = (currentView === "MyHeader" ? "todoItem":"MyHeader")'>点击我切换组件</div>


















	<br />
	<br />
	<br />
	<br />











	<!-- 用字符串模板的时候可以用驼峰是写法 -->
	`<todoItem>哈哈哈哈哈</todoItem>`
	<todo-item
		@event-a='clickMe'
		>
		我是测试传递方法的
	</todo-item>






















	<br />
	<br />
	<br />
	<br />



















	<Block></Block>





















	<br />
	<br />
	<br />
	<br />














	<!-- this.$nextTick()方法接收一个函数作为参数，$nextTick的意义是在render完之后才会执行，相当于调用了componentDidUpdate方法。 -->
	<div>{{toUpdate}}</div>
	<div @click="updateQueue">点我更新异步队列 </div>



















	<br />
	<br />
	<br />
	<br />















	<div @click="show = !show">切换</div>
	<transition name='slide-fade'>
		<p v-if="show">hello</p>
	</transition>





















	<br />
	<br />
	<br />
	<br />



















	<RenderBlock>我是slot内容
		<Block></Block>
	</RenderBlock>

























	<br />
	<br />
	<br />
	<br />




















	<input v-focus name="">
</div>
	
</template>

<script>
// console.log(this)
// bus.$on('id-selected', function (id) {
//   	console.log(id)
// })
import Vue from 'vue'
import todoItem from '@/components/todoItem'
import MyHeader from '@/components/Header/Header.vue'
import Block from '@/components/Block/Block.vue'
import RenderBlock from '@/components/RenderBlock/RenderBlock.vue'
var a = 1;

// Vue.directive('focus', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })

export default {
	name:'todo',
	components:{
		todoItem,
		MyHeader,
		Block,
		RenderBlock
	},
	// 自定义指令
	directives: {
	  	focus: {
	    	inserted: function (el) {
		    	// 聚焦元素
		    	el.className = 'haha'
		    	el.focus()
		  	}
	  	}
	},
	data(){
		return {
			todoItem:`sss${a}`,
			todos:['第一','第二','第三'],
			checkedNames:['Jack'],
			selected:'',
			selectedArr:'',
			inputValue:'haha',
			inputValue2:'hehe',
			toggle:'123',
			selected2:'hahaha',
			inputValue3:'input3',
			inputValue4:'input4',
			currentView:'todoItem',   //这里也可以直接不加引号，相当于把todoItem组件赋给了这个变量
			toUpdate:'我是等待被更新的变量',
			show:true,
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
		},
		updateQueue(){
			this.toUpdate = '我已经被更新了'
			console.log(this.$el.textContent)
			this.$nextTick(()=>{
				console.log(this.$el.textContent)
			})
		}
	}
}
</script>
<style lang='sass' scoped>
div{
	color:#fff;
	div{
		color:red;
	}
}
input[type='checkbox']{
	-webkit-appearance: checkbox;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
