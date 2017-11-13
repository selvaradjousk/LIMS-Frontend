export let routes = [
    { route: 'itemtypes', name: 'itemtypes-settings', moduleId: './general/itemtypes',
      nav: false, title: 'Item types', layoutView: './table.html' },
    { route: 'measures', name: 'measures-settings', moduleId: './general/measures',
      nav: false, title: 'Measures', layoutView: './table.html' },
    { route: 'locations', name: 'locations-settings', moduleId: './general/locations',
      nav: false, title: 'Locations', layoutView: './table.html' },
    { route: 'organisms', name: 'organisms-settings', moduleId: './general/organisms',
      nav: false, title: 'Organisms', layoutView: './table.html' },
    { route: 'status', name: 'status-settings', moduleId: './general/status',
      nav: false, title: 'Product statuses', layoutView: './table.html' },
    { route: 'projectstatuses', name: 'project-status-settings',
      moduleId: './general/projectstatuses',
      nav: false, title: 'Project statuses', layoutView: './table.html' },
];
