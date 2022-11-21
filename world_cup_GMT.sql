-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2022 at 02:26 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+01:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `world_cup`
--

-- --------------------------------------------------------

--
-- Table structure for table `cotes`
--

DROP TABLE IF EXISTS `cotes`;
CREATE TABLE IF NOT EXISTS `cotes` (
  `id` int(3) NOT NULL,
  `cote_home` float NOT NULL,
  `cote_away` float NOT NULL,
  `egalite` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cotes`
--

INSERT INTO `cotes` (`id`, `cote_home`, `cote_away`, `egalite`) VALUES
(1, 3.25, 3.1, 2.38),
(2, 1.32, 4.85, 11.5),
(3, 5.85, 3.9, 1.6),
(4, 2.55, 3, 3.1),
(5, 1.15, 7.85, 20),
(6, 1.43, 4.4, 8),
(7, 2.82, 3.05, 2.72),
(8, 1.24, 6.5, 14),
(9, 4.1, 3.3, 2),
(10, 1.47, 4.55, 6.6),
(11, 1.15, 7.3, 21),
(12, 1.5, 4.35, 6.5),
(13, 1.7, 3.55, 5.55),
(14, 1.75, 3.45, 5.3),
(15, 1.4, 4.55, 8.65),
(16, 1.43, 4, 7.3),
(17, 2.35, 3, 3.2),
(18, 3.5, 3.2, 2.12),
(19, 1.58, 3.85, 5.65),
(20, 1.57, 3.8, 5.85),
(21, 2.7, 3, 2.72),
(22, 1.62, 3.65, 5.65),
(23, 1.95, 3.45, 4.1),
(24, 1.53, 5.85, 6.3),
(25, 1.66, 3.55, 5.4),
(26, 1.55, 4, 5.65),
(27, 1.76, 3.6, 4.5),
(28, 2.55, 3.3, 2.68),
(29, 4.45, 3.45, 1.8),
(30, 2.6, 2.95, 2.85),
(31, 1.48, 4.2, 6.4),
(32, 2.1, 3.2, 3.5),
(33, 1.24, 5.7, 11.5),
(34, 2.68, 3.15, 2.65),
(35, 5.75, 3.85, 1.57),
(36, 3.85, 3.3, 1.98),
(37, 6.55, 4, 1.5),
(38, 11.5, 5.55, 1.28),
(39, 4.9, 3.8, 1.66),
(40, 5.3, 3.6, 1.66),
(41, 3, 3.2, 2.35),
(42, 3.2, 3.3, 2.18),
(43, 12, 5.7, 1.23),
(44, 7.1, 4.6, 1.4),
(45, 6.3, 4.2, 1.48),
(46, 4.5, 3.5, 1.78),
(47, 12, 5.65, 1.23),
(48, 2.7, 3.2, 2.58);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `match_id` int(2) NOT NULL AUTO_INCREMENT,
  `round_number` varchar(300) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  `home_team` varchar(300) DEFAULT NULL,
  `away_team` varchar(300) DEFAULT NULL,
  `group` varchar(300) DEFAULT NULL,
  `home_team_score` int(11) DEFAULT NULL,
  `away_team_score` int(11) DEFAULT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`match_id`, `round_number`, `date`, `location`, `home_team`, `away_team`, `group`, `home_team_score`, `away_team_score`) VALUES
(1, '1', '2022-11-20 17:00:00.000000', 'Al Bayt Stadium', 'Qatar', 'Ecuador', 'Group A', 1, 1),
(2, '1', '2022-11-21 13:00:00.000000', 'Khalifa International Stadium', 'England', 'Iran', 'Group B', NULL, NULL),
(3, '1', '2022-11-21 16:00:00.000000', 'Al Thumama Stadium', 'Senegal', 'Netherlands', 'Group A', 2, 33),
(4, '1', '2022-11-21 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'USA', 'Wales', 'Group B', NULL, NULL),
(5, '1', '2022-11-22 19:00:00.000000', 'Lusail Stadium', 'Argentina', 'Saudi Arabia', 'Group C', NULL, NULL),
(6, '1', '2022-11-22 13:00:00.000000', 'Education City Stadium', 'Denmark', 'Tunisia', 'Group D', NULL, NULL),
(7, '1', '2022-11-22 16:00:00.000000', 'Stadium 974', 'Mexico', 'Poland', 'Group C', NULL, NULL),
(8, '1', '2022-11-22 19:00:00.000000', 'Al Janoub Stadium', 'France', 'Australia', 'Group D', NULL, NULL),
(9, '1', '2022-11-23 10:00:00.000000', 'Al Bayt Stadium', 'Morocco', 'Croatia', 'Group F', NULL, NULL),
(10, '1', '2022-11-23 13:00:00.000000', 'Khalifa International Stadium', 'Germany', 'Japan', 'Group E', NULL, NULL),
(11, '1', '2022-11-23 16:00:00.000000', 'Al Thumama Stadium', 'Spain', 'Costa Rica', 'Group E', NULL, NULL),
(12, '1', '2022-11-23 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'Belgium', 'Canada', 'Group F', NULL, NULL),
(13, '1', '2022-11-24 10:00:00.000000', 'Al Janoub Stadium', 'Switzerland', 'Cameroon', 'Group G', NULL, NULL),
(14, '1', '2022-11-24 13:00:00.000000', 'Education City Stadium', 'Uruguay', 'Korea Republic', 'Group H', NULL, NULL),
(15, '1', '2022-11-24 16:00:00.000000', 'Stadium 974', 'Portugal', 'Ghana', 'Group H', NULL, NULL),
(16, '1', '2022-11-24 19:00:00.000000', 'Lusail Stadium', 'Brazil', 'Serbia', 'Group G', NULL, NULL),
(17, '2', '2022-11-25 10:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'Iran', 'Group B', NULL, NULL),
(18, '2', '2022-11-25 13:00:00.000000', 'Al Thumama Stadium', 'Qatar', 'Senegal', 'Group A', NULL, NULL),
(19, '2', '2022-11-25 16:00:00.000000', 'Khalifa International Stadium', 'Netherlands', 'Ecuador', 'Group A', NULL, NULL),
(20, '2', '2022-11-25 19:00:00.000000', 'Al Bayt Stadium', 'England', 'USA', 'Group B', NULL, NULL),
(21, '2', '2022-11-26 10:00:00.000000', 'Al Janoub Stadium', 'Tunisia', 'Australia', 'Group D', NULL, NULL),
(22, '2', '2022-11-26 13:00:00.000000', 'Education City Stadium', 'Poland', 'Saudi Arabia', 'Group C', NULL, NULL),
(23, '2', '2022-11-26 16:00:00.000000', 'Stadium 974', 'France', 'Denmark', 'Group D', NULL, NULL),
(24, '2', '2022-11-26 19:00:00.000000', 'Lusail Stadium', 'Argentina', 'Mexico', 'Group C', NULL, NULL),
(25, '2', '2022-11-27 10:00:00.000000', 'Ahmad Bin Ali Stadium', 'Japan', 'Costa Rica', 'Group E', NULL, NULL),
(26, '2', '2022-11-27 13:00:00.000000', 'Al Thumama Stadium', 'Belgium', 'Morocco', 'Group F', NULL, NULL),
(27, '2', '2022-11-27 16:00:00.000000', 'Khalifa International Stadium', 'Croatia', 'Canada', 'Group F', NULL, NULL),
(28, '2', '2022-11-27 19:00:00.000000', 'Al Bayt Stadium', 'Spain', 'Germany', 'Group E', NULL, NULL),
(29, '2', '2022-11-28 10:00:00.000000', 'Al Janoub Stadium', 'Cameroon', 'Serbia', 'Group G', NULL, NULL),
(30, '2', '2022-11-28 13:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Ghana', 'Group H', NULL, NULL),
(31, '2', '2022-11-28 16:00:00.000000', 'Stadium 974', 'Brazil', 'Switzerland', 'Group G', NULL, NULL),
(32, '2', '2022-11-28 19:00:00.000000', 'Lusail Stadium', 'Portugal', 'Uruguay', 'Group H', NULL, NULL),
(33, '3', '2022-11-29 15:00:00.000000', 'Khalifa International Stadium', 'Ecuador', 'Senegal', 'Group A', NULL, NULL),
(34, '3', '2022-11-29 15:00:00.000000', 'Al Bayt Stadium', 'Netherlands', 'Qatar', 'Group A', NULL, NULL),
(35, '3', '2022-11-29 19:00:00.000000', 'Al Thumama Stadium', 'Iran', 'USA', 'Group B', NULL, NULL),
(36, '3', '2022-11-29 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'England', 'Group B', NULL, NULL),
(37, '3', '2022-11-30 15:00:00.000000', 'Education City Stadium', 'Tunisia', 'France', 'Group D', NULL, NULL),
(38, '3', '2022-11-30 15:00:00.000000', 'Al Janoub Stadium', 'Australia', 'Denmark', 'Group D', NULL, NULL),
(39, '3', '2022-11-30 19:00:00.000000', 'Stadium 974', 'Poland', 'Argentina', 'Group C', NULL, NULL),
(40, '3', '2022-11-30 19:00:00.000000', 'Lusail Stadium', 'Saudi Arabia', 'Mexico', 'Group C', NULL, NULL),
(41, '3', '2022-12-01 15:00:00.000000', 'Ahmad Bin Ali Stadium', 'Croatia', 'Belgium', 'Group F', NULL, NULL),
(42, '3', '2022-12-01 15:00:00.000000', 'Al Thumama Stadium', 'Canada', 'Morocco', 'Group F', NULL, NULL),
(43, '3', '2022-12-01 19:00:00.000000', 'Khalifa International Stadium', 'Japan', 'Spain', 'Group E', NULL, NULL),
(44, '3', '2022-12-01 19:00:00.000000', 'Al Bayt Stadium', 'Costa Rica', 'Germany', 'Group E', NULL, NULL),
(45, '3', '2022-12-02 15:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Portugal', 'Group H', NULL, NULL),
(46, '3', '2022-12-02 15:00:00.000000', 'Al Janoub Stadium', 'Ghana', 'Uruguay', 'Group H', NULL, NULL),
(47, '3', '2022-12-02 19:00:00.000000', 'Stadium 974', 'Serbia', 'Switzerland', 'Group G', NULL, NULL),
(48, '3', '2022-12-02 19:00:00.000000', 'Lusail Stadium', 'Cameroon', 'Brazil', 'Group G', NULL, NULL),
(49, 'Round of 16', '2022-12-03 15:00:00.000000', 'TBA', '1A', '2B', '', NULL, NULL),
(50, 'Round of 16', '2022-12-03 19:00:00.000000', 'TBA', '1C', '2D', '', NULL, NULL),
(51, 'Round of 16', '2022-12-04 19:00:00.000000', 'TBA', '1B', '2A', '', NULL, NULL),
(52, 'Round of 16', '2022-12-04 15:00:00.000000', 'TBA', '1D', '2C', '', NULL, NULL),
(53, 'Round of 16', '2022-12-05 15:00:00.000000', 'TBA', '1E', '2F', '', NULL, NULL),
(54, 'Round of 16', '2022-12-05 19:00:00.000000', 'TBA', '1G', '2H', '', NULL, NULL),
(55, 'Round of 16', '2022-12-06 15:00:00.000000', 'TBA', '1F', '2E', '', NULL, NULL),
(56, 'Round of 16', '2022-12-06 19:00:00.000000', 'TBA', '1H', '2G', '', NULL, NULL),
(57, 'Quarter Finals', '2022-12-09 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(58, 'Quarter Finals', '2022-12-09 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(59, 'Quarter Finals', '2022-12-10 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(60, 'Quarter Finals', '2022-12-10 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(61, 'Semi Finals', '2022-12-13 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(62, 'Semi Finals', '2022-12-14 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(63, 'Finals', '2022-12-17 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL),
(64, 'Finals', '2022-12-18 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', '', NULL, NULL);

--
-- Triggers `games`
--
DROP TRIGGER IF EXISTS `update_scoresV2`;
DELIMITER $$
CREATE TRIGGER `update_scoresV2` BEFORE UPDATE ON `games` FOR EACH ROW begin 
    declare scorea int;
    declare scoreh int;
      declare predh int;
        declare preda int;
          declare coteh float;
           declare cotea float;
         declare coteeq float;

            declare a float;
set a =10;
    set scoreh =  NEW.home_team_score;
    set scorea =  NEW.away_team_score;
    set predh =  (SELECT score_home from predict where game_ID = NEW.match_id);
    set preda =  (SELECT score_away from predict where game_ID = NEW.match_id);
    set coteh =  (SELECT cote_home from cotes where id = NEW.match_id);
    set cotea =  (SELECT cote_away from cotes where id = NEW.match_id);
    set coteeq =  (SELECT egalite from cotes where id = NEW.match_id);


   
if((SELECT SIGN (scorea-scoreh)) = (SELECT SIGN(preda-predh)))
        then 

if(scorea = preda AND scoreh = predh) 
then
set a = 40;
end if;

if(scoreh>scorea)
then
UPDATE user
SET score = score + a*coteh;
end if;

if(scoreh<scorea)
then
UPDATE user
SET score = score + a*cotea;
end if;

if(scoreh = scorea)
then
UPDATE user
SET score = score + a*coteeq;
end if;
        end if ;
    end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `predict`
--

DROP TABLE IF EXISTS `predict`;
CREATE TABLE IF NOT EXISTS `predict` (
  `predict_ID` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `game_ID` int(5) NOT NULL,
  `score_home` int(5) NOT NULL,
  `score_away` int(5) NOT NULL,
  PRIMARY KEY (`predict_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `predict`
--


-- --------------------------------------------------------

--
-- Table structure for table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `schoreh` int(5) NOT NULL,
  `scorea` int(5) NOT NULL,
  `penalties` tinyint(1) NOT NULL DEFAULT '0',
  `overtime` tinyint(1) NOT NULL DEFAULT '0',
  `id` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `score` int(10) DEFAULT '10',
  `mail_confirmed` tinyint(1) DEFAULT '0',
  `is_admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
