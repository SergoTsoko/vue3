<template>
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
</template>

<script>
export default{

sendData(){
      this.users.push({
        name: this.userName,
        pass:this.UserPassword,
      })
    },
    resetData(){
      this.users.length = 0; 
    }
}
</script>

<style>
.sender{
  background-color:rgb(121, 35, 121);
  color:black
}
.card{
  background-color: rgb(99, 99, 219);
  max-width: 480px;
}
</style>