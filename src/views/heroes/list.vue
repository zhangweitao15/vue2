<template>
     <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
        <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                <!-- <a href="#" @click.prevent="loadEdit(item.id)">edit</a> -->
                <router-link  :to="'/heroes/edit/' + item.id">edit</router-link>
                &nbsp;&nbsp;
                <a href="javascript:;')" @click.prevent="loadDel(item.id)">delete</a>
                </td>
            </tr>
            </tbody>
        </table>
        </div> 
        </div>   
</template>

 <script>
 // 导入 axios
//  import axios from 'axios';
    export default {
        data: function () {
            return {
                list: []
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.$http
                    .get('heroes')
                    .then((response) => {
                        if ( response.status === 200 ) {
                            this.list = response.data
                        }
                    })
                    .catch((err) => {
                    console.log(err);
                })
            },
            loadDel(id) {
                this.$http
                    .delete(`heroes/${id}`)
                    .then((response) => {
                        if( !confirm('确认删除么？') ) {
                            return;
                        }
                        alert('删除成功')
                        this.loadData()
                    })
                    .catch((err) => {
                        alert('删除失败');
                        console.log(err);
                    })
            },
            loadEdit() {
                
            }
        }
    }
 </script>

 <style>
 
 </style>
 
