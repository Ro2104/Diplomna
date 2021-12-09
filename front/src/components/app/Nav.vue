<template>
    <nav class="nav">
        <div class="container">
            <ul class="nav__list">
                <router-link class="nav__item"
                    v-for="link in links"
                    :key="link.url"
                    tag="li"
                    active-class="active"
                    :to="link.url"
                    :exact="link.exact"
                >
                
                    <a class="nav__link">{{link.title}}</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        links: [
            {title: 'Склады', url: '/', exact: true},
            {title: 'Создать склад', url: '/createwarehouse'},
            {title: 'Заказы', url: '/myorder'},
            {title: 'Мой аккаунт', url: '/myaccount'},
            {title: 'Заработок', url: '/profit'},
            {title: 'Все пользователи', url: '/allusers'},
        ]
    }),
}
</script>

<style lang="scss" scoped>
    .nav {
        background: #03a9f4;
        overflow: hidden;
    }
    .nav__list {
        list-style: none;
        display: flex;
        justify-content: center;
    }
    .nav__item {
        padding: 10px 0px;
    }
    .nav__link {
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        color: #f4f1e1;
        padding: 10px 15px;
        &:hover {
            background: rgba(0,0,0, 0.5);
        }
    }
    .active {
        background: rgba(0,0,0, 0.5);
    }
</style>