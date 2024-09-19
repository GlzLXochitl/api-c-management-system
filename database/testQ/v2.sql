describe credits.career_catalog;
describe credits.course_catalog;
describe credits.course_type;
describe credits.courses;
describe credits.enroled_students;
describe credits.quarter_catalog;
describe credits.user;
describe credits.user_type;

select * from credits.career_catalog;
select * from credits.course_catalog;
select * from credits.course_type;
select * from credits.courses;
select * from credits.enroled_students;
select * from credits.quarter_catalog;
select * from credits.user;
select * from credits.user_type;

-- ------------------------------------------------------ 

-- User type
describe credits.user_type;
INSERT INTO `credits`.`user_type` (`type`) VALUES 
('admin'), #1
('student'), #2
('coordinator'); #3
select * from credits.user_type;

-- Career catalog
describe credits.career_catalog;
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES 
('TSU', 'Tecnologias de la informacion area desarrollo de software'), #1
('TSU', 'Nanotecnología área Materiales'), #2
('TSU', 'Mecatrónica área Robótica'), #3
('TSU', 'Tecnologías de la Información Área Inteligencia Artificial'), #4
('TSU', 'Procesos Industriales área Gestión de la Calidad'), #5
('TSU', 'Operaciones Comerciales Área Negocios Internacionales'); #6 
select * from credits.career_catalog;

-- Users
describe credits.user;
 -- admin
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `email`, `phone_number`) VALUES 
('1', 'password', 'Eduardo', 'Corpus', 'eduardocorpus@utma.edu.mx', '4495820032'); #2
 -- coordinadores
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `email`, `phone_number`) VALUES 
('3', 'password', 'Xochitl', 'Leos', 'xochitlleos@utma.edu.mx', '4495103420'), #3
('3', 'password', 'Christian', 'Perez', 'christianperez@utma.edu.mx', '4495397856'); #4
 -- estdiantes
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `student_id`, `career`, `term`, `credits`, `email`, `phone_number`) VALUES 
('2', 'password', 'Jacob', 'Escareño', 'utm22030618', '1', '0', '30', 'jacobescareño@utma.edu.mx', '4495435181'), #5
('2', 'password', 'Erasmo', 'Diaz', 'utm22030660', '1', '0', '40', 'erasmodiaz@utma.edu.mx', '4495434654'); #6
select * from credits.user;

-- ------------------------------------------------------ 

-- Quarter catalog
describe credits.quarter_catalog;
INSERT INTO `credits`.`quarter_catalog` (`quarter`) VALUES 
('Ene-Abr'), #2
('May-Ago'), #3
('Sep-Dic'); #4
select * from credits.quarter_catalog;

-- Course type
describe credits.course_type;
INSERT INTO `credits`.`course_type` (`type_name`) VALUES 
('Deportivo'), #1
('Cultural'), #2
('E-sports'); #3
select * from credits.course_type;

-- Course catalog
describe credits.course_catalog;
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES 
('Soccer', '1'), #2
('Ajedrez', '1'), #3
('Teatro', '2'), #4
('Expresión literaria', '2'), #5
('Valorant', '3'), #6
('League Of Legends', '3'), #7
('Tochito', '1'); #8
select * from credits.course_catalog;

-- Courses	
describe credits.courses;
INSERT INTO `credits`.`courses` (`coordinator_user_id`, `quarter_id`, `course_name_id`, `description`, `schedule`, `is_active`, `credits_obtained`, `course_img`, `is_open`) VALUES 
('3', '2', '2', 'Description 1', ' Lunes, Martes, Miercoles, Jueves 16:00 - 18:00', '1', '20', '', '1'), #3
('3', '2', '3', 'Description 2', 'Martes, Jueves 16:00 - 18:00', '1', '20', '', '0'), #4
('4', '3', '4', 'Description 3', 'Lunes, Miercoles 16:00 - 18:00', '0', '20', '', '1'), #5
('4', '4', '5', 'Description 4', 'Jueves, Viernes 17:00 - 19:00', '0', '20', '', '0'); #6
select * from credits.courses;

-- ------------------------------------------------------ 

-- Enroled students
describe credits.enroled_students;
INSERT INTO `credits`.`enroled_students` (`student_id`, `course_id`) VALUES 
('utm22030618', '3'), #1
('utm22030660', '4'); #2
select * from credits.enroled_students;

