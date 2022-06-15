import { Base } from './base';
import { Form } from './form';
import { Mark } from './mark';
import { StudentSchedule, TeacherSchedule } from './schedule';
import { Subject } from './subject';



/*
User
login: string - user's nickname for login
password: string - user's password for auth
name: string - real name of the user
email: string - additional way of communication + way to prove identity
role: string - student/teacher/administration
// pic: string - store pics

Student
form: Form - class user belongs to
isClasspresident: boolean - label to the class president
marks: Mark[] - array of objects w/ info about education performance
schedule: object w/ info about lessons  

Teacher
forms: Form[] - all classes teach teaches
isHomeroomTeacher: [boolean, Form] - yes/no, if yes which grade
subjects: Subject[] - which subjects teaches
marks: [Form, Mark][] - all marks
schedule: object w/ info about lessons and forms
*/


export class User extends Base {
  login: string
  password: string
  name: string
  email: string
  role: string
  // pic: string
}

export class Student extends User {
  form: Form
  isClasspresident: boolean
  marks: Mark[]
  schedule: StudentSchedule
}

export class Teacher extends User {
  forms: Form[]
  isHomeroomTeacher: [boolean, Form]
  subjects: Subject[]
  marks: [Form, Mark][]
  schedule: TeacherSchedule
}