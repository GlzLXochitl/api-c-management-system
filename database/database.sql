-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema credits
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema credits
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `credits` ;
USE `credits` ;

-- -----------------------------------------------------
-- Table `credits`.`course_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`course_type` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type_name` VARCHAR(20) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `credits`.`course_catalog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`course_catalog` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `course_type_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `course_type_id_fk_idx` (`course_type_id` ASC) VISIBLE,
  CONSTRAINT `course_type_id_fk`
    FOREIGN KEY (`course_type_id`)
    REFERENCES `credits`.`course_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2;


-- -----------------------------------------------------
-- Table `credits`.`quarter_catalog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`quarter_catalog` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quarter` VARCHAR(15) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2;


-- -----------------------------------------------------
-- Table `credits`.`user_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`user_type` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(15) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `credits`.`career_catalog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`career_catalog` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `credits`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`user` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_type_id` INT(10) UNSIGNED NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `student_id` VARCHAR(12) NULL,
  `career` INT UNSIGNED NULL,
  `term` INT(11) NULL,
  `credits` INT(11) NULL,
  `email` VARCHAR(64) NULL,
  `phone_number` VARCHAR(20) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `user_user_type_id_fk_idx` (`user_type_id` ASC) VISIBLE,
  UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC) VISIBLE,
  INDEX `carrer_id_fk_idx` (`career` ASC) VISIBLE,
  CONSTRAINT `user_type_id_fk`
    FOREIGN KEY (`user_type_id`)
    REFERENCES `credits`.`user_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `carrer_id_fk`
    FOREIGN KEY (`career`)
    REFERENCES `credits`.`career_catalog` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2;


-- -----------------------------------------------------
-- Table `credits`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`courses` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `coordinator_user_id` INT(10) UNSIGNED NOT NULL,
  `quarter_id` INT(10) UNSIGNED NOT NULL,
  `course_name_id` INT(10) UNSIGNED NOT NULL,
  `description` VARCHAR(150) NULL,
  `schedule` VARCHAR(50) NULL,
  `is_active` TINYINT(1) NOT NULL,
  `credits_obtained` INT(10) UNSIGNED NOT NULL,
  `course_img` VARCHAR(200) NULL DEFAULT NULL,
  `is_open` TINYINT(1) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `user_id_fk_idx` (`coordinator_user_id` ASC) VISIBLE,
  INDEX `quarter_idx` (`quarter_id` ASC) VISIBLE,
  INDEX `course_name_id_fk_idx` (`course_name_id` ASC) VISIBLE,
  CONSTRAINT `course_name_id_fk`
    FOREIGN KEY (`course_name_id`)
    REFERENCES `credits`.`course_catalog` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `quarter_id_fk`
    FOREIGN KEY (`quarter_id`)
    REFERENCES `credits`.`quarter_catalog` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`coordinator_user_id`)
    REFERENCES `credits`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3;


-- -----------------------------------------------------
-- Table `credits`.`enroled_students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `credits`.`enroled_students` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `student_id` VARCHAR(12) NOT NULL,
  `course_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `student_id_fk_idx` (`student_id` ASC) VISIBLE,
  INDEX `course_id_fk_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `course_id_fk`
    FOREIGN KEY (`course_id`)
    REFERENCES `credits`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `student_id_fk`
    FOREIGN KEY (`student_id`)
    REFERENCES `credits`.`user` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
