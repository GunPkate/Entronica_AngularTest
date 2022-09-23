angular 
components แยกส่วนหน้าจอเป็นกล่องๆ มี HTML และ Logic(typescript) ชื่อเดียวกับ html แต่เป็น typescript

app.component.ts => template
@Component({
  selector: 'app-root',

  แยกเป็นcomponent เพื่อ 1. reuse 2. เวลาแก้ปัญหาดูเฉพาะจุดที่เสีย

  ng new {project name}
  yes / css

  ng -server --oepn

    ng generate component login สร้าง login
    app > login(folder)
    app > app.module.ts > import 

    angular style css scss(javascript + css html)
    angular.json เปลี่ยน styles

    angular life cycle => OnInitเริ่มหน้า  OnChange เปลี่ยนค่า component OnDestroy จบการทำงาน

    Data binding oneway / 

    interpolation{{}}

    Property binding 

    two way input + output
    ngModel
    
    //service กรณีที่มีการใช้ api
    ng generate service
    เรียกใช้งานผ่าน constructor
    constructor(private userService: UserService)

    dependency injection กักเก็บ service ไว้เป็น service กลางให้ใช้
    พอเรียกใช้ก้จะสร้าง instance (provide service) 
    angular ver เก่าต้องตั้งค่าใน app.module
    ver ใหม่เก็บใน injectable

    module ตู้เก็บของ  component กล่อง

    !! FormModule => ngModel ต้องย้ายจาก app.module มา verifyModule 
    ! declare
    ! import 
    ! export