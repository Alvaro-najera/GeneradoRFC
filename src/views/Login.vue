<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            if (this.username === 'usuario' && this.password === 'contraseña') {
                alert('Inicio de sesión exitoso');
                // Aquí puedes redirigir al usuario a la página de inicio de sesión
                // Puedes usar this.$router.push('/dashboard') si tienes una ruta configurada
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        }
    }
};
</script>

<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin: 10px 0;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
