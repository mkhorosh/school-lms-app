# Content
1. [User](#user)  
2. [Subjects](#subjects)  
3. [Form](#form)  
4. [Mark](#mark)  
5. [Assignment](#assignment)  
6. [Schedule](#schedule)  
7. [Notification](#notification)  
8. [News](#news)  
9. [Comment](#comment)  

# User 
### **imported to**  
*Subject(User, Teacher)  
Form(Teacher, Student)  
Assignment(Teacher, Student)  
Notification  
News  
Comment*  
  
### **User**
- login: string - user's nickname for login  
- password: string - user's password for auth  
- name: string - real name of the user  
- email: string - additional way of communication + way to prove identity  
- role: string - student/teacher/administration  
- // pic: string - store pics  

### **Student**
- form: Form - class user belongs to  
- isClasspresident: boolean - label to the class president  
- marks: Mark[] - array of objects w/ info about education performance  
- schedule: object w/ info about lessons  

### **Teacher**
- forms: Form[] - all classes teach teaches  
- isHomeroomTeacher: [boolean, Form] - yes/no, if yes which grade  
- subjects: Subject[] - which subjects teaches  
- marks: [Form, Mark][] - all marks  
- schedule: object w/ info about lessons and forms  
 

# Subjects
### **imported to**  
*User  
Mark  
Assignment  
Shedule*  
  
- title: string - name of subject  
- teacher: User - object w/ data on user  
- form: Form[] - classes that study this subject  
- assignment: [Form, Assignment][] - array of classes and their assignments  
- room: number - numer of the specified room for subject(teacher's room)  
- marks: [Form, Student][] - marks for all forms  
 

# Form
### **imported to**  
*User  
Subject  
Assignment  
Schedule  
News*  
  
- label: string - title (1a)  
- pupils: Student[] - list of the students  
- subjects: Subject[] - subjects for one form
- homeTeacher: Teacher - homeroom teacher  
- schedule: StudentSchedule - timetable for this class  
- classpresident: StudentSchedule - student in charge  
- room: number - homeroom  
 

# Mark
### **imported to**  
*User*  
  
- subject: Subject - subject  
- mark: number[] - date of assessment, mark itself, homework / test / class work items for each student 
- attendance: [number, Student, string][] - attendance date, student, action (present / absent / sick / reasonable absence)
 

# Assignment
### **imported to**  
*Subject*  
  
- form: Form - which grade assignment for
- subject: Subject - name of the subject  
- creationDate: number - date when task is given  
- text: string - text of the assignment  
- isDone: boolean - yes or no  
- isMarked: boolean - was mark announced  
- dueDate: number - date to be done  
- teacher: Teacher - teacher to assess  
- mark: [Form, Student, number][] - final mark for pupils of given grade  
 

# Schedule
### **imported to** 
*User(StudentSchedule, TeacherSchedule)  
Form(StudentSchedule)*  

### **Shedule**
- durance: number - durance for this timetable in WEEKS  
- startDate: number - start date for this specific schedule (MONDAY)  

### **Student Schedule**
- form: Form - schedule for which grade  
- subjects: Subject[] - full list of subjects for this class  
- timetable: [Subject, [string, number, number], number][] - subject, time (week day, start time, end time), room number  

### **Teacher Schedule**
- forms: Form[] - what grades teach teaches  
- subjects: Subject[] - subjects teach teaches  
- timetable: [Subject, Form, [string, number, number], number][] - subject, form, time (week day, start time, end time), room number  
 

# Notification 
### **imported to**
&nbsp;  

- updateData: number - when changes were made  
- isNewMark: boolean - new mark or new assignment  
- text: string - message  
- title: string - new mark or new assignment (for pupils)  
- watchers: User[] - who gets the notification  


# News
### **imported to** 
&nbsp;  

- title: string - title  
- text: string -text  
- // pic: string  
- watchers: Form[] - who can see  
- author: User - who posted  
- publicationData: number - date  
- comments: Comment[] - who commented  


# Comment
### **imported to** 
*News*  

- author: User - who commented  
- date: number - when commented  
- message: string - comment text  
 