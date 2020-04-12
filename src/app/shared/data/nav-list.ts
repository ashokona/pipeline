
const navList: any = [
  {
    displayName: 'Home',
    iconName: 'home',
    route: 'dashboard',
    underDev: false
  },
  {
    displayName: 'Cost',
    iconName: 'attach_money',
    route: 'cost',
    underDev: false,
    children: [
      {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'spends',
        underDev: false
      },
      {
        displayName: 'Unused Resources',
        iconName: 'cloud_off',
        route: 'unusedresources',
        underDev: false
      },
      {
        displayName: 'Smart Schedules',
        iconName: 'power_settings_new',
        route: 'shutdowns',
        underDev: false
      },
      {
        displayName: 'Reserved Instances',
        iconName: 'restore',
        route: 'reservedinstances',
        underDev: false
      },
      // {
      //   displayName: 'Right Size',
      //   iconName: 'aspect_ratio',
      //   route: 'rightsize',
      //   underDev: false
      // },
      // {
      //   displayName: 'Financial Reports',
      //   iconName: 'ballot',
      //   route: 'financialreports',
      //   underDev: false
      // },
      // {
      //   displayName: 'Audit Trail',
      //   iconName: 'view_list',
      //   route: 'audittrail',
      //   underDev: false
      // }
    ]
  },
  {
    displayName: 'Security',
    iconName: 'security',
    route: 'security',
    underDev: false,
    children: [
      {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'risk',
        underDev: false
      },
      {
        displayName: 'Security Reports',
        iconName: 'ballot',
        route: 'SecurityReports',
        underDev: false
      },
      // {
      //   displayName: 'Exclusions',
      //   iconName: 'outlined_flag',
      //   route: 'exclusions',
      //   underDev: false
      // },
      // {
      //   displayName: 'Detailed Reports',
      //   iconName: 'ballot',
      //   route: 'CloudReports',
      //   underDev: false
      // },
      // {
      //   displayName: 'Audit Trail',
      //   iconName: 'view_list',
      //   route: 'audittrail',
      //   underDev: true
      // }
    ]
  },
  {
    displayName: 'Inventory',
    iconName: 'store',
    route: 'inventory',
    underDev: false,
    children: [
      {
        displayName: 'Compute',
        iconName: 'memory',
        route: 'compute',
        underDev: false
      },
      // {
      //   displayName: 'Storage',
      //   iconName: 'save',
      //   route: 'storage',
      //   underDev: false
      // },
      {
        displayName: 'Database',
        iconName: 'settings_applications',
        route: 'database',
        underDev: false
      },
      {
        displayName: 'IAM',
        iconName: 'settings_applications',
        route: 'iam',
        underDev: false
      }
    ]
  },
  {
    displayName: 'Compliance',
    iconName: 'assignment',
    route: 'compliance',
    underDev: false,
    children: [
      {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'Dashboard',
        underDev: false
      },

      // {
      //   displayName: 'Access Review',
      //   iconName: 'thumbs_up_down',
      //   route: 'accessreview',
      //   underDev: true
      // },
      // {
      //   displayName: 'Audit Score',
      //   iconName: 'wb_incandescent',
      //   route: 'auditscore',
      //   underDev: true
      // },
      // {
      //   displayName: 'Audit Trail',
      //   iconName: '',
      //   route: 'audittrail',
      //   underDev: true
      // },
      {
        displayName: 'Backup',
        iconName: 'backup',
        route: 'backup',
        underDev: false
      },
      // {
      //   displayName: 'Encryption',
      //   iconName: 'enhanced_encryption',
      //   route: 'encryption',
      //   underDev: true
      // },
      // {
      //   displayName: 'Reports',
      //   iconName: '',
      //   route: 'reports',
      //   underDev: true
      // },
      // {
      //   displayName: 'Settings',
      //   iconName: '',
      //   route: 'settings',
      //   underDev: true
      // },
      {
        displayName: 'Tags',
        iconName: 'bookmark_border',
        route: 'tags',
        underDev: false
      },
      
    ]
  },

  // {
  //   displayName: 'Provision',
  //   iconName: 'accessibility_new',
  //   route: 'provision',
  //   underDev: false,
  //   children: [
  //     {
  //       displayName: 'Generic',
  //       iconName: 'clear_all',
  //       route: 'generic',
  //       underDev: false
  //     },
  //     {
  //       displayName: 'AWS',
  //       iconName: 'cloud_queue',
  //       route: 'aws',
  //       underDev: false
  //     },
  //     {
  //       displayName: 'Docker',
  //       iconName: 'book',
  //       route: 'docker',
  //       underDev: false
  //     },
  //     {
  //       displayName: 'KUBERNETES',
  //       iconName: 'settings',
  //       route: 'kubernetes',
  //     },
  //     // {
  //     //   displayName: 'Azure',
  //     //   iconName: 'cloud_circle',
  //     //   route: 'azure',
  //     //   underDev: false
  //     // },
  //     {
  //       displayName: 'Provisioned Stacks',
  //       iconName: 'view_headline',
  //       route: 'provisionedstacks',
  //       underDev: false
  //     },
  //     {
  //       displayName: 'Audit Trail',
  //       iconName: '',
  //       route: 'audittrail',
  //       underDev: true
  //     }
  //   ]
  // },
  // {
  //   displayName: 'Settings',
  //   iconName: 'settings',
  //   route: 'settings',
  //   underDev: false,
  //   children: [
  //     {
  //       displayName: 'Cloud Account Configuration',
  //       iconName: 'settings_system_daydream',
  //       route: 'accountconfiguration',
  //       underDev: true
  //     },
  //     {
  //       displayName: 'Access Managemnt',
  //       iconName: 'settings_applications',
  //       route: 'accessmanagment',
  //       underDev: true
  //     }
  //   ]
  // },
  // {
  //   displayName: 'Deatiled Reports',
  //   iconName: 'report',
  //   route: '',
  //   underDev: true
  // },
];

export default navList;
