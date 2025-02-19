/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sideBarBtn = document.querySelector('.sidebar-toggle');
    const bodyTag = document.querySelector('body');
    sideBarBtn.addEventListener('click', () => {
      if (bodyTag.classList.contains('sidebar-open')) {
        bodyTag.classList.remove('sidebar-open');
        bodyTag.classList.remove('sidebar-collapse');
      } else {
        bodyTag.classList.add('sidebar-open');
        bodyTag.classList.add('sidebar-collapse');
      }
      
    })


  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector(".menu-item_login > a").onclick = (e) => {
      e.preventDefault();
      App.getModal("login").open();
    };

    document.querySelector(".menu-item_logout > a").onclick = (e) => {
      e.preventDefault();
      User.logout((err, resp) => {
        if (resp && resp.success) {
          App.setState("init");
        }
      });
    };

    document.querySelector(".menu-item_register > a").onclick = (e) => {
      e.preventDefault();
      App.getModal("register").open();
    };

  }
}
