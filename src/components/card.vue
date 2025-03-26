<template>

<div>
      <el-card>
       title: {{ cardTitle }} <br>
       text: {{ cardText  }} <br>
        id: {{ cardId }}
      </el-card>
    </div>
</template>

<script>
export default{
    data(){
        return { 
    cardTitle: `hello`,
      cardText: `i'm text`,
      cardId: `i'm card's id`,
    }
}
}
</script>

<style>
.card{
  background-color: rgb(99, 99, 219);
  /* max-width: 480px; */
}
div{
  /* width: 25vh; */
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
</style>