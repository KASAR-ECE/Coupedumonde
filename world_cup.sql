-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 18, 2022 at 08:42 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


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
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
CREATE TABLE IF NOT EXISTS `countries` (
  `country` varchar(50) NOT NULL,
  `flag` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `match_id` varchar(2) NOT NULL,
  `round_number` varchar(300) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  `home_team` varchar(300) DEFAULT NULL,
  `away_team` varchar(300) DEFAULT NULL,
  `group` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`match_id`, `round_number`, `date`, `location`, `home_team`, `away_team`, `group`) VALUES
('1', '1', '2022-11-20 17:00:00.000000', 'Al Bayt Stadium', 'Qatar', 'Ecuador', 'Group A'),
('10', '1', '2022-11-23 17:00:00.000000', 'Al Thumama Stadium', 'Spain', 'Costa Rica', 'Group E'),
('11', '1', '2022-11-23 14:00:00.000000', 'Khalifa International Stadium', 'Germany', 'Japan', 'Group E'),
('12', '1', '2022-11-23 11:00:00.000000', 'Al Bayt Stadium', 'Morocco', 'Croatia', 'Group F'),
('13', '1', '2022-11-24 11:00:00.000000', 'Al Janoub Stadium', 'Switzerland', 'Cameroon', 'Group G'),
('14', '1', '2022-11-24 14:00:00.000000', 'Education City Stadium', 'Uruguay', 'Korea Republic', 'Group H'),
('15', '1', '2022-11-24 17:00:00.000000', 'Stadium 974', 'Portugal', 'Ghana', 'Group H'),
('16', '1', '2022-11-24 20:00:00.000000', 'Lusail Stadium', 'Brazil', 'Serbia', 'Group G'),
('17', '2', '2022-11-25 11:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'Iran', 'Group B'),
('18', '2', '2022-11-25 14:00:00.000000', 'Al Thumama Stadium', 'Qatar', 'Senegal', 'Group A'),
('19', '2', '2022-11-25 17:00:00.000000', 'Khalifa International Stadium', 'Netherlands', 'Ecuador', 'Group A'),
('2', '1', '2022-11-21 17:00:00.000000', 'Al Thumama Stadium', 'Senegal', 'Netherlands', 'Group A'),
('20', '2', '2022-11-25 20:00:00.000000', 'Al Bayt Stadium', 'England', 'USA', 'Group B'),
('21', '2', '2022-11-26 11:00:00.000000', 'Al Janoub Stadium', 'Tunisia', 'Australia', 'Group D'),
('22', '2', '2022-11-26 14:00:00.000000', 'Education City Stadium', 'Poland', 'Saudi Arabia', 'Group C'),
('23', '2', '2022-11-26 17:00:00.000000', 'Stadium 974', 'France', 'Denmark', 'Group D'),
('24', '2', '2022-11-26 20:00:00.000000', 'Lusail Stadium', 'Argentina', 'Mexico', 'Group C'),
('25', '2', '2022-11-27 11:00:00.000000', 'Ahmad Bin Ali Stadium', 'Japan', 'Costa Rica', 'Group E'),
('26', '2', '2022-11-27 14:00:00.000000', 'Al Thumama Stadium', 'Belgium', 'Morocco', 'Group F'),
('27', '2', '2022-11-27 17:00:00.000000', 'Khalifa International Stadium', 'Croatia', 'Canada', 'Group F'),
('28', '2', '2022-11-27 20:00:00.000000', 'Al Bayt Stadium', 'Spain', 'Germany', 'Group E'),
('29', '2', '2022-11-28 11:00:00.000000', 'Al Janoub Stadium', 'Cameroon', 'Serbia', 'Group G'),
('3', '1', '2022-11-21 14:00:00.000000', 'Khalifa International Stadium', 'England', 'Iran', 'Group B'),
('30', '2', '2022-11-28 14:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Ghana', 'Group H'),
('31', '2', '2022-11-28 17:00:00.000000', 'Stadium 974', 'Brazil', 'Switzerland', 'Group G'),
('32', '2', '2022-11-28 20:00:00.000000', 'Lusail Stadium', 'Portugal', 'Uruguay', 'Group H'),
('33', '3', '2022-11-29 20:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'England', 'Group B'),
('34', '3', '2022-11-29 20:00:00.000000', 'Al Thumama Stadium', 'Iran', 'USA', 'Group B'),
('35', '3', '2022-11-29 16:00:00.000000', 'Khalifa International Stadium', 'Ecuador', 'Senegal', 'Group A'),
('36', '3', '2022-11-29 16:00:00.000000', 'Al Bayt Stadium', 'Netherlands', 'Qatar', 'Group A'),
('37', '3', '2022-11-30 16:00:00.000000', 'Al Janoub Stadium', 'Australia', 'Denmark', 'Group D'),
('38', '3', '2022-11-30 16:00:00.000000', 'Education City Stadium', 'Tunisia', 'France', 'Group D'),
('39', '3', '2022-11-30 20:00:00.000000', 'Stadium 974', 'Poland', 'Argentina', 'Group C'),
('4', '1', '2022-11-21 20:00:00.000000', 'Ahmad Bin Ali Stadium', 'USA', 'Wales', 'Group B'),
('40', '3', '2022-11-30 20:00:00.000000', 'Lusail Stadium', 'Saudi Arabia', 'Mexico', 'Group C'),
('41', '3', '2022-12-01 16:00:00.000000', 'Ahmad Bin Ali Stadium', 'Croatia', 'Belgium', 'Group F'),
('42', '3', '2022-12-01 16:00:00.000000', 'Al Thumama Stadium', 'Canada', 'Morocco', 'Group F'),
('43', '3', '2022-12-01 20:00:00.000000', 'Khalifa International Stadium', 'Japan', 'Spain', 'Group E'),
('44', '3', '2022-12-01 20:00:00.000000', 'Al Bayt Stadium', 'Costa Rica', 'Germany', 'Group E'),
('45', '3', '2022-12-02 16:00:00.000000', 'Al Janoub Stadium', 'Ghana', 'Uruguay', 'Group H'),
('46', '3', '2022-12-02 16:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Portugal', 'Group H'),
('47', '3', '2022-12-02 20:00:00.000000', 'Stadium 974', 'Serbia', 'Switzerland', 'Group G'),
('48', '3', '2022-12-02 20:00:00.000000', 'Lusail Stadium', 'Cameroon', 'Brazil', 'Group G'),
('49', 'Round of 16', '2022-12-03 16:00:00.000000', 'TBA', '1A', '2B', ''),
('5', '1', '2022-11-22 20:00:00.000000', 'Al Janoub Stadium', 'France', 'Australia', 'Group D'),
('50', 'Round of 16', '2022-12-03 20:00:00.000000', 'TBA', '1C', '2D', ''),
('51', 'Round of 16', '2022-12-04 20:00:00.000000', 'TBA', '1B', '2A', ''),
('52', 'Round of 16', '2022-12-04 16:00:00.000000', 'TBA', '1D', '2C', ''),
('53', 'Round of 16', '2022-12-05 16:00:00.000000', 'TBA', '1E', '2F', ''),
('54', 'Round of 16', '2022-12-05 20:00:00.000000', 'TBA', '1G', '2H', ''),
('55', 'Round of 16', '2022-12-06 16:00:00.000000', 'TBA', '1F', '2E', ''),
('56', 'Round of 16', '2022-12-06 20:00:00.000000', 'TBA', '1H', '2G', ''),
('57', 'Quarter Finals', '2022-12-09 20:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('58', 'Quarter Finals', '2022-12-09 16:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('59', 'Quarter Finals', '2022-12-10 20:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('6', '1', '2022-11-22 14:00:00.000000', 'Education City Stadium', 'Denmark', 'Tunisia', 'Group D'),
('60', 'Quarter Finals', '2022-12-10 16:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('61', 'Semi Finals', '2022-12-13 20:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('62', 'Semi Finals', '2022-12-14 20:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('63', 'Finals', '2022-12-17 16:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('64', 'Finals', '2022-12-18 16:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
('7', '1', '2022-11-22 17:00:00.000000', 'Stadium 974', 'Mexico', 'Poland', 'Group C'),
('8', '1', '2022-11-22 11:00:00.000000', 'Lusail Stadium', 'Argentina', 'Saudi Arabia', 'Group C'),
('9', '1', '2022-11-23 20:00:00.000000', 'Ahmad Bin Ali Stadium', 'Belgium', 'Canada', 'Group F');

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

INSERT INTO `predict` (`predict_ID`, `username`, `game_ID`, `score_home`, `score_away`) VALUES
(0, 'userTest', 1, 1000, 1000),
(1, 'userTest', 2, 1, 2);

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
  `score` int(5) DEFAULT '10',
  `mail_confirmed` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `mail`, `mdp`, `score`, `mail_confirmed`) VALUES
('userTest', 'user.test@edu.ece.fr', 'password', 0, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
