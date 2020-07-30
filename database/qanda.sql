-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: localhost    Database: qanda
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--
CREATE database qanda;
USE qanda;
DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` bigint NOT NULL,
  `answer` text,
  `date` datetime(6) DEFAULT NULL,
  `helpful` int NOT NULL,
  `nothelpful` int NOT NULL,
  `questionid` bigint DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (4,'The food was ok, but I\'ve had better','2020-08-01 17:00:00.000000',8,0,3,'chris112'),(5,'My layover was only .5 hours since we got delayed at takoff. ','2020-07-31 17:00:00.000000',7,2,2,'sally432'),(6,'I had a 30 min layover, it was really quick! ','2020-07-31 17:00:00.000000',1,1,2,'jim777'),(7,'It leaves everyday of the week ','2020-07-30 17:00:00.000000',6,4,1,'chris123'),(9,'Not usually, usually several Vegas bound drunk people though.','2020-07-28 17:00:00.000000',2,0,8,'flightrecorder123'),(10,'Don\'t see too many, every now and again. Hope that helps!','2020-07-28 17:00:00.000000',0,0,8,'airforce123'),(11,'The food was so-so, not super impressed.','2020-07-28 17:00:00.000000',3,0,3,'thisguy456'),(37,'Not too bad, mine was only a half hour','2020-07-29 17:00:00.000000',0,0,2,'chris123'),(39,'Food was awesome!','2020-07-29 17:00:00.000000',0,0,3,'chris123'),(42,'Yeah, and they got power outlets too woohoo!','2020-07-29 17:00:00.000000',1,0,41,'brett1234');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (43),(43);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint NOT NULL,
  `airline` varchar(255) DEFAULT NULL,
  `arrivingloc` varchar(255) DEFAULT NULL,
  `departingloc` varchar(255) DEFAULT NULL,
  `flightnumbers` varchar(255) DEFAULT NULL,
  `question` text,
  `questiondate` datetime(6) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'United Airlines','Las Vegas, NV','Honolulu, HI','372, 672','What days of the week does it leave?','2020-07-29 17:00:00.000000','jerry444'),(2,'United Airlines','Las Vegas, NV','Honolulu, HI','372, 672','How long is the layover?','2020-07-21 17:00:00.000000','mike786'),(3,'United Airlines','Las Vegas, NV','Honolulu, HI','372, 672','How was the food?','2020-07-29 17:00:00.000000','jim776'),(8,'United Airlines','Las Vegas, NV','Honolulu, HI','372, 672','Are there usually lots of kids on these flights?','2020-06-29 17:00:00.000000','gz178'),(41,'United Airlines','Las Vegas, NV','Honolulu, HI','372, 672','Did the plane get a remodel recently?','2020-07-29 17:00:00.000000','chris123');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-30 13:07:11
