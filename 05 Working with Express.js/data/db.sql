CREATE TABLE `node`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` TEXT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

INSERT INTO `node`.`products` (`title`, `price`, `description`, `imageUrl`) VALUES ('A Book', '12.99', 'This is an amazing book', 'https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg');
