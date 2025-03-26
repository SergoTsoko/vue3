

<template>
  <!-- <div class="number">
    <el-button type="primary" @click="addNumber">+</el-button>
    <el-button type="primary" @click="removeNumber">-</el-button>
  </div> -->
  
  <!-- <div class="cifra">
    Ваша цифра: <em>{{ number }}</em> 
  </div> -->

  <div>
    <!-- <div class="text1">
      <el-button type="primary" @click="toggleText">
        {{ isTextVisible ? "Скрыть текст" : "Показать текст" }}
      </el-button>
    </div>

    <div class="samtext" v-if="isTextVisible">
      {{ text }}
    </div> -->
    
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    
  </div>



</template>

<script>
import ElementPlus from 'element-plus';
import form from './components/form.vue'
import card from  './components/card.vue'
export default {
  components: { card },
  data() {
    return {
      number: 0,
      text: "Тут написан очень важный текст",
      isTextVisible: true, 
      userName: "",
      UserPassword:"",
      users: [],
     
   };
  },
  methods: {
    addNumber() {
      this.number += 1;
    },
    removeNumber() {
      this.number -= 1;
    },
    toggleText() {
      this.isTextVisible = !this.isTextVisible; 
},
    sendData(){
      this.users.push({
        name: this.userName,
        pass:this.UserPassword,
      })
    },
    resetData(){
      this.users.length = 0; 
    }
  },
};
</script>


<style >
.number {
  margin-left: 40%;
  padding-top: 50px;
}
.cifra {
  margin-left: 40%;
}
.text1 {
  margin-left: 40%;
  display: flex;
  flex-flow: column;
  width: fit-content;
}
.samtext {
  justify-content: center;
  display: flex;
}
.el-button + .el-button {
  margin: 5px;
}
.sender{
  background-color:rgb(121, 35, 121);
  color:black
}
.card{
  background-color: rgb(99, 99, 219);
  max-width: 480px;
}
div{
  width: 25vh;
  box-sizing: border-box;
}
</style>
