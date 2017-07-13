var app ={};

app.database = {
    url:'localhost',
    port:'27001',
    databaseName:'test',
    getUrl: function () {
        return 'mongodb://'+app.database.url+':'+app.database.port+'/'+app.database.databaseName;
    }
};


module.exports = app;