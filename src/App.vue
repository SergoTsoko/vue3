<template>
  <div>
    <card v-for="card in cardArray" :key="card.id"
          :title="card.title"
          :text="card.text"
          :id="card.id" />
  </div>
</template>

<script>
import { ref } from "vue";
import card from "./components/card.vue";

export default {
  components: { card },
  setup() {
    const number = ref(0);
    const text = ref("Тут написан очень важный текст");
    const isTextVisible = ref(true);
    const userName = ref("");
    const userPassword = ref("");
    const users = ref([]);


    const cardArray = ref([]);
    for (let i = 1; i <= 10; i++) {
      cardArray.value.push({
        title: `Card ${i}`,
        text: `Text ${i}`,  
        id: `${i}`           
      });
    }

    const addNumber = () => {
      number.value += 1;
    };

    const removeNumber = () => {
      number.value -= 1;
    };

    const toggleText = () => {
      isTextVisible.value = !isTextVisible.value;
    };

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
      number,
      text,
      isTextVisible,
      userName,
      userPassword,
      users,
      addNumber,
      removeNumber,
      toggleText,
      sendData,
      resetData,
      cardArray
    };
  }
};
</script>
