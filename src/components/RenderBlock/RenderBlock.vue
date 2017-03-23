<!-- <template>
	<div>我是block</div>
</template> -->

<script>
import Vue from 'vue'

export default {
	name: 'block',
	data () {
		return {
		}
	},
	render:function(createElement){
		// var getChildrenTextContent = function (children) {
		//   return children.map(function (node) {
		//     return node.children
		//       ? getChildrenTextContent(node.children)
		//       : node.text
		//   }).join('')
		// }
		// var headingId = getChildrenTextContent(this.$slots.default)
		console.log(this.$slots.default)
		return createElement(
			'h1',{class:'haha'},this.$slots.default
			)
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
