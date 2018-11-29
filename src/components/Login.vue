<template>
    <v-card class="elevation-3 login-card">
        <v-card-text>
            <form @submit="login" class="auth">
                <v-text-field class="small-text" outline id="email" name="email" label="email" v-model="email" prepend-inner-icon="mail_outline" type="email"></v-text-field>
                <v-text-field class="small-text" outline id="password" name="password" label="password" v-model="password" prepend-inner-icon="lock_outline" type="password"></v-text-field>
            </form>
        </v-card-text>
        <v-card-actions>
            <v-btn class="elevation-8 yellow-button" type="submit" block>Login</v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn class="elevation-8 yellow-button" @click="logout" block>Logout</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import * as OktaAuth from '@okta/okta-auth-js'
import { OktaConfig, OktaAuthClass, OktaCredentials } from '../okta-auth.types'

@Component
export default class Login extends Vue {
    authClient: any;
    email: string;
    password: any;

    constructor () {
      super();
    }

    created () {
      let config: OktaConfig = {
        url: process.env.VUE_APP_OKTA_ISSUER.split('/oauth2')[0],
        clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
        redirectUri: process.env.VUE_APP_OKTA_REDIRECT_URI,
        issuer: process.env.VUE_APP_OKTA_ISSUER
      }

      this.authClient = new OktaAuth<OktaAuthClass>(config);
    }

    login (e) {
      let credentials: OktaCredentials = {
        username: this.email,
        password: this.password
      };
      e.preventDefault(e);
      return this.authClient.signIn(credentials).then(res => {
        if (res.status === 'SUCCESS') {
          this.$auth.loginRedirect('/', {
            sessionToken: res.sessionToken
          })
        }
      })
    }

    logout () {
      this.$auth.logout()
    }

    @Watch('activeUser') onActiveUserChanged (value: object, oldVal: object) {
      console.log(value);
      if (value && value.access) {
        console.log(value.access)
      }
    }
}
</script>
