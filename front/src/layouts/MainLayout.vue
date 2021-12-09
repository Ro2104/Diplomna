<template>
    <div>
        <Header />
        <Nav />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
export default {
    name: 'main-layout',
    components: {
        Header,
        Nav
    },
    
}
</script>