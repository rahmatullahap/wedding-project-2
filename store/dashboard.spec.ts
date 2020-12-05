import { state, mutations } from './dashboard';

describe('Dashboard Store', () => {
  describe('state', () => {
    it('should return default dashboard state', () => {
      this.state = state();
      this.state.title = 'some dashboard title';
      this.state.darkTheme = false;
      this.state.miniMenu = true;
      this.state.breadcrumbs = [];
      this.state = state();
      expect(this.state.title).toBe('Dashboard Fasilitas Kesehatan');
      expect(this.state.darkTheme).toBe(true);
      expect(this.state.miniMenu).toBe(false);
      expect(this.state.breadcrumbs[0]).toMatchObject({
        icon: 'view-dashboard',
        text: '',
        disabled: true,
        to: ''
      });
    });
  });

  describe('mutations', () => {
    beforeEach(() => {
      this.state = state();
    });

    describe('toggleTheme', () => {
      it('should set toggle dark theme', () => {
        this.state.darkTheme = true;
        mutations.toggleTheme(this.state);
        expect(this.state.darkTheme).toBe(false);
        mutations.toggleTheme(this.state);
        expect(this.state.darkTheme).toBe(true);
      });
    });
    describe('toggleMiniMenu', () => {
      it('should set toggle mini menu', () => {
        this.state.miniMenu = true;
        mutations.toggleMiniMenu(this.state);
        expect(this.state.miniMenu).toBe(false);
        mutations.toggleMiniMenu(this.state);
        expect(this.state.miniMenu).toBe(true);
      });
    });
    describe('changeTitle', () => {
      it('should set dashboard`s title', () => {
        this.state.title = 'random title';
        const t1 = 'new title 1';
        const t2 = 'new title 2';
        mutations.changeTitle(this.state, t1);
        expect(this.state.title).toBe(t1);
        mutations.changeTitle(this.state, t2);
        expect(this.state.title).toBe(t2);
      });
    });
    describe('changeBreadcrumbs', () => {
      it('should set dashboard`s breadcrumbs', () => {
        this.state.breadcrumbs = [];
        const b1 = [
          {
            icon: 'icon-1',
            text: 'menu-1',
            disabled: false,
            to: ''
          }
        ];
        const b2 = [
          {
            icon: 'icon-2',
            text: 'menu-2',
            disabled: true,
            to: ''
          },
          {
            icon: 'icon-3',
            text: 'menu-3',
            disabled: false,
            to: '/some-menu'
          }
        ];
        mutations.changeBreadcrumbs(this.state, b1);
        expect(this.state.breadcrumbs[1]).toMatchObject(b1[0]);
        mutations.changeBreadcrumbs(this.state, b2);
        expect(this.state.breadcrumbs[1]).toMatchObject(b2[0]);
        expect(this.state.breadcrumbs[2]).toMatchObject(b2[1]);
      });
    });
  });
});
