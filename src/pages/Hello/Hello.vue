

<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<br/>

		<h2 v-bind:title="title">hover显示标题</h2>



		<br/>
		<br/>
		<br/>
		<br/>



		<h2 v-if="show">显示我</h2>



		<br/>
		<br/>
		<br/>
		<br/>







		<!-- 我是for循环数组 -->
		<ul>
			<li v-for='(todo,index) in todos'>
				{{index}} --- {{todo.text}}
			</li>
		</ul>



		<br/>
		<br/>
		<br/>
		<br/>






		<div v-on:click='clickMe'>
				点击我
		</div>






		<br/>
		<br/>
		<br/>
		<br/>




		<div>{{inputword}}</div>



		<br/>
		<br/>
		<br/>
		<br/>





		<input type="text" v-model='inputword' name="">






		<br/>
		<br/>
		<br/>
		<br/>





	

		<todo-item v-for='todo in todos' v-bind:todo='todo' :key="todo.text" ></todo-item>






		<br/>
		<br/>
		<br/>
		<br/>






		<div v-once>{{ insertMsg }}</div>
		<input type="text" v-model='insertMsg' name="">







		<br/>
		<br/>
		<br/>
		<br/>







		<div v-bind:id="dynamicId">动态id</div>







		<br/>
		<br/>
		<br/>
		<br/>






		
		<div v-bind:disabled="disabled">disabled属性</div>







		<br/>
		<br/>
		<br/>
		<br/>








		<div>{{ dynamicId + 1 }}</div>
		<div>{{ show ? 'YES' : 'NO' }}</div>
		<div>{{ title.split('').reverse().join('') }}</div>
		<div v-bind:id="'list-' + dynamicId">list-id</div>







		<br/>
		<br/>
		<br/>
		<br/>









		<div>{{title || filter}}</div>









		<br/>
		<br/>
		<br/>
		<br/>








		<!-- computed属性 -->
		<div @click='setComputed'>设置computed</div>
		<div @click='changeComputed'>点击改变computed</div>
		<div>{{ helloComputed }}</div>







		<br/>
		<br/>
		<br/>
		<br/>







		<!-- watch属性 -->
		<div @click='changeWatchNum'>修改watch的变量</div>
		<div >{{watchNum}}</div>
		<div >{{result}}</div>








		<br/>
		<br/>
		<br/>
		<br/>









		<div class='item' :class="{'active': isActive}" >我是class</div>











		<br/>
		<br/>
		<br/>
		<br/>










		<div :class='classObj'>我是computedClass</div>












		<br/>
		<br/>
		<br/>
		<br/>












		<div :class='[activeClass,errorClass]'>我是class数组</div>













		<br/>
		<br/>
		<br/>
		<br/>












		<div :style="styleObj">我是styleObj</div>













		<br/>
		<br/>
		<br/>
		<br/>











		<div :style="[baseStyle,overrideStyle]">我是数组style</div>












		<br/>
		<br/>
		<br/>
		<br/>











~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		<div v-if='ifok'>我是ok的字符串模板</div>
		<div v-else>我是err的字符串模板</div>











		<br/>
		<br/>
		<br/>
		<br/>











		<!-- 不会清空input的值 -->
		<template v-if='loginType === "user"'>
			<input type="text" placeholder="输入用户名">
		</template>
		<template v-else>
			<input type="text" placeholder="输入密码">
		</template>
		<div @click="toggleTemplate">点击我</div>













		<br/>
		<br/>
		<br/>
		<br/>













		<!-- 会清空input的值 -->
		<template v-if='loginType === "user"'>
			<input type="text" key='user' placeholder="输入用户名">
		</template>
		<template v-else>
			<input type="text" key='password' placeholder="输入密码">
		</template>
		<div @click="toggleTemplate">点击我</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import './Hello.scss'
import './Hello.css'


Vue.component('todo-item', {
	props:['todo'],
	template: '<div><li>{{todo.text}}</li></div>'
})

export default {
	name: 'hello',
	data () {
		return {
			msg: '这是头',
			insertMsg:'插入不会改变的值',
			title: '这是标题',
			show: true,
			disabled:true,
			dynamicId:'id1',
			todos: [
				{ text: 'Learn JavaScript' },
				{ text: 'Learn Vue' },
				{ text: 'Build something awesome' }
			],
			inputword:'hahaha',
			testComputed:'未改变前的computed',
			watchNum:'我是被watch的变量',
			result:'我是空',
			isActive:true,
			activeClass:'active',
			errorClass:'error',
			styleObj:{
				color:'red',
				fontSize:'13px'
			},
			baseStyle:{
				color:'green'
			},
			overrideStyle:{
				fontSize:'30px'
			},
			ifok:true,
			loginType:'user'
		}
	},
	methods: {
		clickMe: function() {
			this.msg = 'hahahaha'
		},
		changeComputed(){
			this.testComputed = '已改变的computed';

		},
		setComputed(){
			this.helloComputed = '设置的computed'
		},
		changeWatchNum(){
			this.watchNum = 'watch被改变了'
		},
		toggleTemplate(){
			console.log(222)
			this.loginType = 'password'
		}
		
	},
	computed:{
	    helloComputed:{
	    	get:function(){
	    		return this.testComputed+Date.now()
	    	},
	    	set:function(value){
	    		this.testComputed = value
	    	}
	      
	    },
	    classObj(){
	    	return {
	    		active:this.show,
	    		type:false
	    	}
	    }
	},
	watch:{
		watchNum(val){
			console.log(val)
			this.watchNum = val;
			this.result = val;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
