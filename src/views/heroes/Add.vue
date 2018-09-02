<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtname" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">添加</button>
        </form>
    </div>
</template>

<script>
// 导入axios文件
// import axios from 'axios'
    export default {
        data() {
            return {
                formData: {
                    name: '',
                    gender: ''
                }
            }
        },
        methods: {
            handleAdd() {
            // 判断用户是否有数据输入
                // 添加数据
                this.$http
                    .post('heroes', this.formData)
                    .then((response) => {
                        if (response.status === 201) {
                            this.$router.push('/heroes')
                        } else {
                            alert('添加失败')
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }

        }

    }
</script>

<style>

</style>
