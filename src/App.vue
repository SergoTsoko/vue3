<script>
import ElementPlus from 'element-plus';

export default{
  data(){
    return {
      number: 0,
      text: "Тут написан очень важный текст"
    }
  },
  methods: {
    addNumber(){
      this.number += 1
    },
    removeNumber(){
      this.number -= 1
    },
    hideText(){
    this.text = "                               ";
    addEventListener
    },
    showText(){
      this.text = "Тут написан очень важный текст"
    }
  }
  

}

</script>

<template>
<div class="number">
    <!-- <button @click="addNumber">+</button> -->
    <el-button type="primary" @click="addNumber">+</el-button>

    <!-- <button v-on:click="removeNumber">-</button> -->
    <el-button type="primary" @click="removeNumber">-</el-button>
    
  </div>
  <div class="cifra">
    Ваша цифра: <em>{{ number }}</em> 
  </div>

  <div>
    <div class="text1">
     
      
      <!-- <button @click="hideText">скрыть текст</button> -->
      <!-- <button @click="hideText">скрыть текст</button> -->
      <el-button type="primary" @click="hideText">скрыть текст</el-button>
      <el-button type="primary" @click="showText">показать текст</el-button>

      <!-- <button @click="showText">показать текст</button> -->
      
    </div>
    <div class="samtext">

      {{text}}
    </div>
  </div>
</template>

<style scoped>
.number{
  margin-left: 40%;
  padding-top: 50px;

}
.cifra{
  margin-left: 40%;
  
}
.text1{
  margin-left: 40%;
  display: flex;
  flex-flow: column;
  width: fit-content;
}
.samtext{
  justify-content: center;
  display: flex;
}

.el-button+.el-button{
  margin: 5px;
}

</style>
