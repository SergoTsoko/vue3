<template>
  <el-card>
    title: {{ title }} <br>
    text: {{ text }} <br>
    id: {{ id }}
  </el-card>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    id: String,
    
  }
}
</script>
  
  <style>
  .card {
    background-color: rgb(99, 99, 219);
  }
  div {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  