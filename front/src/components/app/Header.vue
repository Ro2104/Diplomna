<template>
    <header class="header">
        <div class="container">
            <div class="header__box">
                <div class="header__item">
                    <router-link to="/"><img src="../../assets/images/logo.png" class="header__item--logo"></router-link>
                </div>
                <div class="header__item">
                    <h3 class="header__item--user">Ростислав</h3>
                    <h3 class="header__item--logout" @click="LogOut" >Выйти</h3>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        LogOut() {
            this.$router.push('/signin')
        }
    },
}
</script>

<style lang="scss" scoped>
    .header__box {
        display: flex;
        justify-content: space-between;
    }
    .header__item--logo {
        height: 56px;
    }
    .header__item--user {
        font-size: 16px;
        font-weight: 400;
        text-align: right;
        color: #f4f1e1;
        padding-top: 5px;
    }
    .header__item--logout {
        font-size: 16px;
        font-weight: 400;
        text-align: right;
        color: #f4f1e1;
        padding-top: 5px;
        cursor: pointer;
    }
    .header {
        background: #ffa726 ;
    }
</style>
