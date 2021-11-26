<template>
    <div>
        <p>
            <strong>old verison:</strong>You opened card by id {{$route.params.id}}
        </p>
        <p>
            <strong>simple verison:</strong>You opened card by id {{ id }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'CardPage',
    props: ['id']
}
</script>
<style scoped>
    
</style>