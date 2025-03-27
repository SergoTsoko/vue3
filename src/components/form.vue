<template>
  <div class="cards">
    <input type="text" v-model="userName" placeholder="Write your name">
    <input type="password" v-model="userPassword" placeholder="Write your Password">
    <el-button class="sender" @click="sendData">Submit</el-button>
    <el-button class="sender" @click="resetData">Reset</el-button>

    <el-card class="card">
      <div v-for="(el, index) in users" :key="index">
        <p>Тут повторяется то что было введено или не введено/ например ты ввел имя - {{ el.name }}</p>
        <p>а если ты тут ты ввел пароль - {{ el.pass }}</p>
      </div> 
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const userName = ref("");
    const userPassword = ref("");
    const users = ref([]);

    const sendData = () => {
      users.value.push({
        name: userName.value,
        pass: userPassword.value
      });
    };

    const resetData = () => {
      users.value = [];
    };

    return {
      userName,
      userPassword,
      users,
      sendData,
      resetData
    };
  }
};
</script>

<style>
.sender {
  background-color: rgb(121, 35, 121);
  color: black;
}
.card {
  background-color: rgb(99, 99, 219);
  max-width: 480px;
}
</style>
