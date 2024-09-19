use credits;

-- Career catalog
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Tecnologias de la informacion area desarrollo de software'); #1
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Nanotecnología área Materiales'); #2
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Mecatrónica área Robótica'); #3
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Tecnologías de la Información Área Inteligencia Artificial'); #4
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Procesos Industriales área Gestión de la Calidad'); #5
INSERT INTO `credits`.`career_catalog` (`type`, `name`) VALUES ('TSU', 'Operaciones Comerciales Área Negocios Internacionales'); #6

-- User type
INSERT INTO `credits`.`user_type` (`type`) VALUES ('admin'); #1
INSERT INTO `credits`.`user_type` (`type`) VALUES ('student'); #2
INSERT INTO `credits`.`user_type` (`type`) VALUES ('coordinator'); #3

-- Course type
INSERT INTO `credits`.`course_type` (`type_name`) VALUES ('Deportivo'); #1
INSERT INTO `credits`.`course_type` (`type_name`) VALUES ('Cultural'); #2
INSERT INTO `credits`.`course_type` (`type_name`) VALUES ('E-sports'); #3

-- Quarter catalog
INSERT INTO `credits`.`quarter_catalog` (`quarter`) VALUES ('Ene-Abr'); #1
INSERT INTO `credits`.`quarter_catalog` (`quarter`) VALUES ('May-Ago'); #2
INSERT INTO `credits`.`quarter_catalog` (`quarter`) VALUES ('Sep-Dic'); #3

-- Users
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `email`, `phone_number`) VALUES ('1', 'password', 'Eduardo', 'Corpus', 'eduardocorpus@utma.edu.mx', '4495820032');
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `student_id`, `career`, `term`, `credits`, `email`, `phone_number`) VALUES ('2', 'password', 'Jacob', 'Escareño', 'utm22030618', '1', '6', '50', 'jacobescareño@utma.edu.mx', '4495435181');
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `email`, `phone_number`) VALUES ('3', 'password', 'Xochitl', 'Leos', 'xochitlleos@utma.edu.mx', '4495103420');
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `student_id`, `career`, `term`, `credits`, `email`, `phone_number`) VALUES ('2', 'password', 'Erasmo', 'Diaz', 'utm22030670', '1', '6', '60', 'erasmodiaz@utma.edu.mx', '4495434654');
INSERT INTO `credits`.`user` (`user_type_id`, `password`, `name`, `last_name`, `email`, `phone_number`) VALUES ('3', 'password', 'Christian', 'Perez', 'christianperez@utma.edu.mx', '4495397856');

-- Course catalog
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Soccer', '1'); #1
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Ajedrez', '1'); #2
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Teatro', '2'); #3
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Expresión literaria', '2'); #4
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Valorant', '3'); #5
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('League Of Legends', '3'); #6
INSERT INTO `credits`.`course_catalog` (`name`, `course_type_id`) VALUES ('Tochito', '1'); #7

-- Courses	
INSERT INTO `credits`.`courses` (`coordinator_user_id`, `quarter_id`, `course_name_id`, `description`, `schedule`, `is_active`, `year`, `credits_obtained`, `is_open`) VALUES ('5', '3', '1', 'Para los verdaderos amantes del futbol y el deporte', ' Lunes, Martes, Miercoles, Jueves 16:00 - 18:00', '1', '2024', '20', '1');
INSERT INTO `credits`.`courses` (`coordinator_user_id`, `quarter_id`, `course_name_id`, `description`, `schedule`, `is_active`, `year`, `credits_obtained`, `is_open`) VALUES ('3', '3', '4', 'Analizaremos obras literarias de escritores celebres del siglo XIX', 'Martes, Jueves 16:00 - 18:00', '1', '2024', '20', '1');
INSERT INTO `credits`.`courses` (`coordinator_user_id`, `quarter_id`, `course_name_id`, `description`, `schedule`, `is_active`, `year`, `credits_obtained`, `is_open`) VALUES ('5', '2', '2', 'Ajedrez basico/intermedio', 'Lunes, Miercoles 16:00 - 18:00', '0', '2024', '20', '0');
INSERT INTO `credits`.`courses` (`coordinator_user_id`, `quarter_id`, `course_name_id`, `description`, `schedule`, `is_active`, `year`, `credits_obtained`, `is_open`) VALUES ('3', '2', '1', 'Futbol para intermedio/avanzado', 'Jueves, Viernes 17:00 - 19:00', '2024', '1', '20', '0');

-- Enroled students
INSERT INTO `credits`.`enroled_students` (`student_id`, `course_id`) VALUES ('utm22030618', '1');
INSERT INTO `credits`.`enroled_students` (`student_id`, `course_id`) VALUES ('utm22030670', '1');
INSERT INTO `credits`.`enroled_students` (`student_id`, `course_id`) VALUES ('utm22030670', '2');
