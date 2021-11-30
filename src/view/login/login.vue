<template>
    <div class="login-container">
        <a-row style="height:100%">
            <a-col :span="17">&nbsp;</a-col>
            <a-col :span="7" class="login-container-right">
                <div calss="login-container-form">
                    <h2 class="login-container-title">欢迎登录</h2>
                    <a-form ref="formRef" :model="Login" :rules="rules">
                        <a-form-item name="name">
                            <a-input v-model:value="Login.name" placeholder="请输入用户名" class="input">
                                <template #prefix>
                                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item name="pwd">
                            <a-input
                                v-model:value="Login.pwd"
                                type="password"
                                placeholder="请输入密码"
                                class="input"
                            >
                                <template #prefix>
                                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            记住用户名:
                            <a-switch
                                v-model:checked="remember"
                                checked-children="是"
                                un-checked-children="否"
                                @change="changeRemeber"
                            />
                        </a-form-item>
                        <a-form-item>
                            <a-button
                                type="primary"
                                style="width: 230px;"
                                :disabled="disabled"
                                :loading="loading"
                                @click="loginUser"
                            >登录</a-button>
                            <a-button type="dashed" style="margin-left: 10px;width:60px">重置</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
 
<script setup >
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ref, watch, reactive, onMounted } from 'vue';
import { login } from '../../apis/login'
import { setStorage, getStorage, setToken } from '../../utils/storage'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const remember = ref(false)
const Login = reactive({
    name: '',
    pwd: ''
})
const disabled = ref(true)
const loading = ref(false)

if (getStorage('userId')) {
    remember.value = true
    Login.name = getStorage("userId")
}

// 表单验证规则
const rules = {
    name: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    pwd: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 6, max: 16, message: '密码需在6-16位之间', trigger: 'blur' }
    ]
};

// 监听输入的登录信息
watch(() => Login, (val) => {
    if (val.name == '' || val.pwd == '') {
        disabled.value = true
    } else {
        if (val.pwd.length >= 6 && val.pwd.length < 17) {
            disabled.value = false
        } else {
            disabled.value = true
        }
    }
}, { deep: true, immediate: true })

// 监听回车事件
onMounted(() => {
    document.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            if (!disabled.value) {
                loginUser()
            }
        }
    })
})

// 登录账号
const loginUser = () => {
    loading.value = true
    var input = {
        UserName: Login.name,
        Password: Login.pwd,
        Type: 1
    }
    login(input)
        .then(res => {
            loading.value = false
            if (!res.Result) {
                message.error(res.Info);
                return
            }
            if (remember.value) {
                setStorage('userId', Login.name)
                setStorage("USER_INFO", res.Data.userinfo)
                setToken(res.Data.AccessToken)
            }
            router.push('/home')
            message.success(res.Info, 3)
        })
        .catch(err => {
            console.log(err);
            loading.value = false
            message.error(err);
        })
}

// 记住密码开关
const changeRemeber = (e) => {
    remember.value = e
}


history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});

</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background: url("../../assets/login_images/login_background.png");
    background-size: cover;
    &-right {
        background: rgba(255, 255, 255, 0.59);
        transition: width 0.5s;
        padding: 15% 5% 0 5%;
    }
    &-form {
        width: calc(100% - 40px);
        height: 380px;
        padding: 4vh;
        margin-top: calc((100vh - 380px) / 2);
        margin-right: 20px;
        margin-left: 20px;
        background: url("../../assets/login_images/login_form.png");
        background-size: 100% 100%;
        border-radius: 10px;
        box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    }
    &-title {
        margin-bottom: 15px;
        color: #fff;
    }
}
.input {
    height: 35px;
    line-height: 35px;
    width: 300px;
    border-radius: 5px;
}
</style>