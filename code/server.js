// 第一步引入express
const { request, response, json } = require('express');
const express=require('express');

// 2.创建应用对象
const app=express();

// 3创建路由规则
// request对请求报文的封装
// response对相应报文的封装
app.get('/server',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置相应体
    response.send('HELLO AJAX -2');

});

// 这里原本的post被改成了all
app.all('/json-server',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 允许设置自定义，响应头
    response.setHeader('Access-Control-Allow-Headers','*');

    const data={
        name:'atguigu'
    };
    // 将对象转换为字符串
    let str=JSON.stringify(data);
    // 设置相应体
    response.send(str);
});

// 正对ie缓存
app.get('/ie',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置相应体
    response.send('HELLO IE-6');

});

// 延时响应
app.all('/delay',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
        // 允许设置自定义，响应头
    response.setHeader('Access-Control-Allow-Headers','*');

    setTimeout(()=>{
        // 设置相应体
        response.send('延时响应');
    },1000);
});

// J-query服务
app.all('/jquery-server',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
        // 设置相应体
    const data={
        name:'atguigu'
    };
    let str=JSON.stringify(data);
    response.send(str);
});

// axios服务
app.all('/axios-server',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
        // 设置相应体
    const data={
        name:'atguigu'
    };
    let str=JSON.stringify(data);
    response.send(str);
});


// fetch 服务
app.all('/fetch-server',(request,response)=>{

    // response.send('HELLO EXPRESS');
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
        // 设置相应体
    const data={
        name:'atguigu'
    };
    let str=JSON.stringify(data);
    response.send(str);
});


// jsonp 服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp")');
    // response.send("hello jsonp");
    const data={
        name:'尚硅谷atguigu'
    };
    let str=JSON.stringify(data);
    // 返回数据,这里不能返回普通的str，因为这里是script所以这里用函数的调用
    response.end(`handle(${str})`);

});

// 用户名检测是否存在
app.all('/check-name',(request,response)=>{
    // response.send('console.log("hello jsonp")');
    // response.send("hello jsonp");
    const data={
        exist:1,
        msg:'用户名已经存在'
    };
    let str=JSON.stringify(data);
    // 返回数据,这里不能返回普通的str，因为这里是script，所以这里用函数的调用
    response.end(`handle(${str})`);
});

// jquery 实现jsonp
app.all('/jquery-jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp")');
    // response.send("hello jsonp");
    const data={
        name:'shanguigu',
        city:['北京','上海','深圳']
    };
    let str=JSON.stringify(data);
    let cb=request.query.callback;
    // 返回数据,这里不能返回普通的str，因为这里是script，所以这里用函数的调用
    response.end(`${cb}(${str})`);
});

// cors
app.all('/cors-server',(request,response)=>{
    // 设置一个响应头，跨域服务，*用于通配所有网页
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Method','*');

    // 也可以单独设置一个端口
    // response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
    response.send('Hello cors');
});

// 4.监听端口
app.listen(8000,()=>{
    console.log("服务器已经启动，8000 端口监听中...");
})