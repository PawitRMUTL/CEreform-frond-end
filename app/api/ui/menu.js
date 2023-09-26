/** @format */

module.exports = [
  {
    key: 'no_child',
    name: 'หน้าหลัก',
    icon: '',
    linkParent: '/',
  },
  {
    key: 'aboutus',
    name: 'ภาควิชา',
    icon: '',
    child: [
      {
        key: 'aboutus_detaill',
        name: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
        title: true,
      },
      {
        key: 'about',
        name: 'เกี่ยวกับภาควิชา',
        link: '/aboutus',
        icon: 'ion-ios-document-outline',
      },
      {
        key: 'calender',
        name: 'ปฏิทินการศึกษา',
        link: '/aboutus/calender-study',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'new',
        name: 'ข่าวสาร',
        link: '/aboutus/allNew',
        icon: 'ion-ios-home-outline',
      },
    ],
  },
  {
    key: 'presonal',
    name: 'งานบริหาร',
    icon: '',
    linkParent: '/personal',
  },
  {
    key: 'course',
    name: 'หลักสูตร',
    icon: '',
    child: [
      {
        key: 'course_page',
        name: 'เกี่ยวกับหลักสูตร',
        title: true,
      },
      {
        key: 'course_page_detail',
        name: 'หลักสูตรที่เปิดสอน',
        link: '/Coures',
        icon: 'ion-ios-warning-outline',
      },
      // {
      //   key: 'course_page_competency',
      //   name: 'จัดสมรรถนะ',
      //   link: '/app/pages/ComingSoon',
      //   icon: 'ion-ios-warning-outline',
      // },
    ],
  },
  {
    key: 'project',
    name: 'ผลงานนักศึกษา',
    icon: '',
    linkParent: '/app/pages/ComingSoon',
  },
  {
    key: 'Cooperative',
    name: 'สหกิจ',
    icon: '',
    child: [
      {
        key: 'Cooperative_page',
        name: 'เกี่ยวกับสหกิจ หรือ สถานประกอบการ',
        title: true,
      },
      {
        key: 'Cooperative_page_feedback',
        name: 'รายงานบัณฑิตสำหรับสถานประกอบการ',
        link: '/Cooperative',
        icon: 'ion-ios-warning-outline',
      },
      {
        key: 'Cooperative_page_system',
        name: 'ระบบสหกิจ',
        link: '/app/pages/ComingSoon',
        icon: 'ion-ios-warning-outline',
      },
    ],
  },
  {
    key: 'contactus',
    name: 'ติดต่อเรา',
    icon: '',
    linkParent: '/Contact-us',
  },
  // {
  //   key: 'pages',
  //   name: 'Pages',
  //   icon: 'ion-ios-paper-outline',
  //   child: [
  //     {
  //       key: 'other_page',
  //       name: 'Welcome Page',
  //       title: true,
  //     },
  //     {
  //       key: 'blank',
  //       name: 'Blank Page',
  //       link: '/app/blankpage',
  //       icon: 'ion-ios-document-outline',
  //     },
  //     {
  //       key: 'main_page',
  //       name: 'Sample Page',
  //       title: true,
  //     },
  //     {
  //       key: 'dashboard',
  //       name: 'Dashboard',
  //       link: '/app/pages/dashboard',
  //       icon: 'ion-ios-home-outline',
  //     },
  //     {
  //       key: 'form',
  //       name: 'Form',
  //       link: '/app/pages/form',
  //       icon: 'ion-ios-list-box-outline',
  //     },
  //     {
  //       key: 'table',
  //       name: 'Table',
  //       link: '/app/pages/table',
  //       icon: 'ion-ios-grid-outline',
  //     },
  //     {
  //       key: 'maintenance',
  //       name: 'Maintenance',
  //       link: '/maintenance',
  //       icon: 'ion-ios-build-outline',
  //     },
  //     {
  //       key: 'coming_soon',
  //       name: 'Coming Soon',
  //       link: '/coming-soon',
  //       icon: 'ion-ios-bonfire-outline',
  //     },
  //   ],
  // },
  // {
  //   key: 'auth',
  //   name: 'Auth Page',
  //   icon: 'ion-ios-contact-outline',
  //   child: [
  //     {
  //       key: 'auth_page',
  //       name: 'User Authentication',
  //       title: true,
  //     },
  //     {
  //       key: 'login',
  //       name: 'Login',
  //       link: '/login',
  //       icon: 'ion-ios-person-outline',
  //     },
  //     {
  //       key: 'register',
  //       name: 'Register',
  //       link: '/register',
  //       icon: 'ion-ios-key-outline',
  //     },
  //     {
  //       key: 'reset',
  //       name: 'Reset Password',
  //       link: '/reset-password',
  //       icon: 'ion-ios-undo-outline',
  //     },
  //   ],
  // },
  // {
  //   key: 'errors',
  //   name: 'Errors',
  //   icon: 'ion-ios-paw-outline',
  //   child: [
  //     {
  //       key: 'errors_page',
  //       name: 'Errors Pages',
  //       title: true,
  //     },
  //     {
  //       key: 'not_found_page',
  //       name: 'Not Found Page',
  //       link: '/app/pages/not-found',
  //       icon: 'ion-ios-warning-outline',
  //     },
  //     {
  //       key: 'error_page',
  //       name: 'Error Page',
  //       link: '/app/pages/error',
  //       icon: 'ion-ios-warning-outline',
  //     },
  //   ],
  // },
  // {
  //   key: 'menu_levels',
  //   name: 'Menu Levels',
  //   multilevel: true,
  //   icon: 'ion-ios-menu-outline',
  //   child: [
  //     {
  //       key: 'level_1',
  //       name: 'Level 1',
  //       link: '/#',
  //     },
  //     {
  //       key: 'level_2',
  //       keyParent: 'menu_levels',
  //       name: 'Level 2',
  //       child: [
  //         {
  //           key: 'sub_menu_1',
  //           name: 'Sub Menu 1',
  //           link: '/#',
  //         },
  //         {
  //           key: 'sub_menu_2',
  //           name: 'Sub Menu 2',
  //           link: '/#',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
