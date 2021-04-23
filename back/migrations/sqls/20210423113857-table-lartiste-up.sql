/* Replace with your SQL commands */
CREATE TABLE `lartiste` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `bio` text,
  `photo` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;