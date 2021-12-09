<template>
    <div>
        <CreateProduct />
        <ProductTable />
    </div>
</template>

<script>
import CreateProduct from '../components/CreateProduct'
import ProductTable from '../components/ProductTable'
export default {
    name: 'Town',
    components: {
        CreateProduct,
        ProductTable,
    },
}
</script>