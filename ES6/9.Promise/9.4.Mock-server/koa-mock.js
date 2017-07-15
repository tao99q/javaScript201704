var koa = require('koa');
var cors = require('koa-cors');
var bodyParser = require('koa-body-parser');

var app = new koa();

app.use(cors());
app.use(bodyParser());

// 获取所有同学的信息
app.use(function* (next) {
  if ( this.path === '/getStudentList' ) {
    this.body = [
      {name: '小明', studentId: '1001'},
      {name: '小刚', studentId: '1002'},
      {name: '小强', studentId: '1003'},
      {name: '小红', studentId: '1004'}
    ];
  }
  yield next;
});

// 通过同学的ID 获取一个同学的班级信息
app.use(function* (next) {
  if ( this.path === '/getStudentInfo' ) {
    var studentClassData = [
      {studentId: 1001, 'class': '一班'},
      {studentId: 1002, 'class': '二班'},
      {studentId: 1003, 'class': '一班'},
      {studentId: 1004, 'class': '一班'}
    ];

    this.body = studentClassData.find(item => item.studentId == this.request.body.studentId);
  }
  yield next;
});

// 通过班级 获取整个班级的同学
app.use(function* (next) {
  if ( this.path === '/getClassStudents' ) {
    var studentClassData = {
      '一班': ['小明, 小强, 小红'],
      '二班': ['小刚']
    };
    this.body = studentClassData[this.request.body.class];
  }
  yield next;
});

app.listen(3333);
