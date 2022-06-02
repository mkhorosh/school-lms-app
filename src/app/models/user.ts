import { Base } from './base';
import { Form } from './form';
import { Mark } from './mark';
import { Schedule } from './schedule';


/*
login: string - user's nickname for login
password: string - user's password for auth
name: string - real name of the user
email: string - additional way of communication + way to prove identity
role: string - student/teacher/administration
// pic: string - store pics
form: Form - class user belongs to
isClasspresident: boolean - label to the class president
marks: Mark[] - array of objects w/ info about education performance
schedule: object w/ info about lessons  
*/


export class User extends Base {
  login: string
  password: string
  name: string
  email: string
  role: string
  // pic: string
  form: Form
  isClasspresident: boolean
  marks: Mark[]
  schedule: Schedule
}