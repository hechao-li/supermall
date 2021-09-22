<template id="news">
    <div>
        <ul>
           <li v-for='(item,index) in newlist' @click='checklist(index)'>{{item}}</li>
        </ul>
        <h2>这里是生活快乐星球哈</h2>
    </div>
</template>

<script>
export default {
    name:"news",
    component:{},
    data(){
        return {
            // newlist:['新闻1','新闻2','新闻3','新闻4','新闻5','新闻6']
          newlist:['开心点1','开心点2','开心点3','开心点4','开心点5','开心点6']
        }
    },
    methods:{
        checklist(index){
            console.log(this.newlist[index])
            return this.$emit('newscheck',this.newlist)
        }
    }
}

</script>

<style scoped>
ul li {
    cursor: pointer;
}
</style>
