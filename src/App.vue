<script>
import ElementPlus from 'element-plus';

export default {
  data() {
    return {
      number: 0,
      text: "Тут написан очень важный текст",
      isTextVisible: true // добавляем переменную для управления видимостью
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
      this.isTextVisible = !this.isTextVisible; // переключаем состояние
    }
  }
};
</script>

<template>
  <div class="number">
    <el-button type="primary" @click="addNumber">+</el-button>
    <el-button type="primary" @click="removeNumber">-</el-button>
  </div>
  
  <div class="cifra">
    Ваша цифра: <em>{{ number }}</em> 
  </div>

  <div>
    <div class="text1">
      <el-button type="primary" @click="toggleText">
        {{ isTextVisible ? "Скрыть текст" : "Показать текст" }}
      </el-button>
    </div>

    <div class="samtext" v-if="isTextVisible">
      {{ text }}
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
</style>
