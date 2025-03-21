<script>
import ElementPlus from 'element-plus';

export default {
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
    <div class="cards">
      <input type="text" v-model="userName" placeholder="Write your name">
      <input type="password" v-model="UserPassword" placeholder="Write your Password">
      <el-button class="sender" @click="sendData()" >Submit</el-button>
      <el-button class="sender" @click="resetData()" >Reset</el-button>

      <el-card class="card">
    <p v-for="o in 10" :key="o" class="text item">{{ user }}</p>
    <div v-for="(el, index) in users " :key="index">
      <p>Тут повторяется то что было введино  
      или не введино/ например ты ввел имя - {{ el.name }}</p>
      <p>
        а если ты тут ты ввел пароль - {{ el.pass }}
      </p>
    </div> 
  </el-card>
    </div>
  </div>



</template>

<style scoped>
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
</style>
