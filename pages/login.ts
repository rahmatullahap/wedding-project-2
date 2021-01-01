import { Component, Vue } from 'vue-property-decorator';

/**
 * Login page
 */
@Component
export default class LoginPage extends Vue {
  email = '';
  password = '';
  login() {
    window.location.replace('/admin');
  }
}
