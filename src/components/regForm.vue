<template>
    <div class="login-form">
        <div class="g-form">
            <!-- <div class="g-form-line" v-for='formLine in formData'> -->
                <div class='g-form-line' v-for='formLine in formData'>
                <span class="g-form-label">{{formLine.label}}</span>
                <div class="g-form-input">
                    <input type="text" v-model='formLine.model' name="" id="">
                </div>
            </div>
            <div class="f-form-line">
                <div class="g-form-btn">
                    <a href="" class="button" @click="onLogin">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            formData:[
                {label:'用户名',model:''},
                {label:'输入密码',model:''},
                {label:'确认密码',model:''}
            ]
        }
    },
    methods:{
        
    }
}
</script>
<style>

</style>


