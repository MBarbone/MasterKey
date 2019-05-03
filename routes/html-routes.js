const path = require('path');

module.exports = (app) =>{
    // login page selection
    app.get('/', (res,req) =>{
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });

    // building manager login
    app.get('/admin/login', (res,req) =>{
        res.sendfile(path.join(__dirname, '../public/admin-login.html'));
    });

    // tenant login
    app.get('/user/login', (res,req) =>{
        res.sendfile(path.join(__dirname, '../public/user-login.html'));
    });





    
    // paths to be

      // building manager- building selection
      app.get('/admin/buildings', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // building manager- tenants for selected building. need id?
    app.get('/admin/buildings/building-name/tenants', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // building manager- manage requests
    app.get('/admin/buildings/building-name/tenants/maintanence', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // building manager- manage payments
    app.get('/admin/buildings/building-name/tenants/payments', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // tenant home - need id?
    app.get('/user/home', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // tenant pay rent
    app.get('/user/pay', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // tenant maintenance request
    app.get('/user/request', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });

    // tenant profile settings/get docs
    app.get('/user/settings', (res,req) =>{
        res.sendfile(path.join(__dirname, ''));
    });
};