<template lang="pug">
  .wrapper.wrapper--admin

    header.header
      .container
        .header__wrapper
          .header__logo
            .header__avatar
              .avatar
                .avatar__block
                  img(src='../images/content/user.jpg' alt="Аватар").avatar__image
            .header__block
              .header__name
                h1.header__name-title Денис Городецкий
              .header__text-box
                .header__typepanel
                  p Панель администрирования
                .header__quit
                  a.header__quit-link Выйти

    .main-menu
      nav.menu
        ul.menu__list
          - var menuList = ['Обо мне', 'Работы', 'Отзывы'];
          - for (var i=0; i<menuList.length; i++)
            li.menu__item
              a(href="#" title=`${menuList[i]}`).menu__link #{menuList[i]}

</template>

<style lang="pcss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/blocks/menu.pcss";
@import "../styles/blocks/tooltip.pcss";
@import "../styles/blocks/modal.pcss";

@import "../styles/admin/**/*.pcss";

</style>