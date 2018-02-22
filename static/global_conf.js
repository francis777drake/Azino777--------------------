const GlobalConfigs = {
  pageTitle: "Azino777 бонус игровые слоты",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://azino3topora.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://azino3topora.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://azino3topora.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://azino3topora.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://azino3topora.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://azino3topora.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "yellow lighten-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



