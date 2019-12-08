<template>
    <div>
        <v-card class="pr-5 pl-5 mx-auto pb-5" max-width="500" outlined>
            <H1 class="title">SE CONNECTER</H1>
            <v-list-item-subtitle>
                Si vous n'avez pas de compte vous pouvez
                <router-link to="/register">créer</router-link>
                un rapiement.
            </v-list-item-subtitle>
            <v-form>
                <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    color="pink"
                />

                <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    color=""
                    type="password"
                />
                <v-btn dark class="mr-4" color="primary" depressed>
                    submit
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script>
export default {};
</script>
