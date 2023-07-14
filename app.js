const express = require('express');
const app = express();

const path = require('path');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 根路由
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


const port = 3000; // 可以使用任何您想要的端口号
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

  