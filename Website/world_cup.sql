-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 02 nov. 2022 à 21:30
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `world_cup`
--

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `Match Number` int(10) DEFAULT NULL,
  `Round Number` varchar(50) DEFAULT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `Location` varchar(50) DEFAULT NULL,
  `Home Team` varchar(50) DEFAULT NULL,
  `Away Team` varchar(50) DEFAULT NULL,
  `Group` varchar(300) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `games`
--

INSERT INTO `games` (`Match Number`, `Round Number`, `Date`, `Location`, `Home Team`, `Away Team`, `Group`) VALUES
(1, '1', '2022-11-20 16:00:00.000000', 'Al Bayt Stadium', 'Qatar', 'Ecuador', 'Group A'),
(3, '1', '2022-11-21 13:00:00.000000', 'Khalifa International Stadium', 'England', 'Iran', 'Group B'),
(2, '1', '2022-11-21 16:00:00.000000', 'Al Thumama Stadium', 'Senegal', 'Netherlands', 'Group A'),
(4, '1', '2022-11-21 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'USA', 'Wales', 'Group B'),
(8, '1', '2022-11-22 10:00:00.000000', 'Lusail Stadium', 'Argentina', 'Saudi Arabia', 'Group C'),
(6, '1', '2022-11-22 13:00:00.000000', 'Education City Stadium', 'Denmark', 'Tunisia', 'Group D'),
(7, '1', '2022-11-22 16:00:00.000000', 'Stadium 974', 'Mexico', 'Poland', 'Group C'),
(5, '1', '2022-11-22 19:00:00.000000', 'Al Janoub Stadium', 'France', 'Australia', 'Group D'),
(12, '1', '2022-11-23 10:00:00.000000', 'Al Bayt Stadium', 'Morocco', 'Croatia', 'Group F'),
(11, '1', '2022-11-23 13:00:00.000000', 'Khalifa International Stadium', 'Germany', 'Japan', 'Group E'),
(10, '1', '2022-11-23 16:00:00.000000', 'Al Thumama Stadium', 'Spain', 'Costa Rica', 'Group E'),
(9, '1', '2022-11-23 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'Belgium', 'Canada', 'Group F'),
(13, '1', '2022-11-24 10:00:00.000000', 'Al Janoub Stadium', 'Switzerland', 'Cameroon', 'Group G'),
(14, '1', '2022-11-24 13:00:00.000000', 'Education City Stadium', 'Uruguay', 'Korea Republic', 'Group H'),
(15, '1', '2022-11-24 16:00:00.000000', 'Stadium 974', 'Portugal', 'Ghana', 'Group H'),
(16, '1', '2022-11-24 19:00:00.000000', 'Lusail Stadium', 'Brazil', 'Serbia', 'Group G'),
(17, '2', '2022-11-25 10:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'Iran', 'Group B'),
(18, '2', '2022-11-25 13:00:00.000000', 'Al Thumama Stadium', 'Qatar', 'Senegal', 'Group A'),
(19, '2', '2022-11-25 16:00:00.000000', 'Khalifa International Stadium', 'Netherlands', 'Ecuador', 'Group A'),
(20, '2', '2022-11-25 19:00:00.000000', 'Al Bayt Stadium', 'England', 'USA', 'Group B'),
(21, '2', '2022-11-26 10:00:00.000000', 'Al Janoub Stadium', 'Tunisia', 'Australia', 'Group D'),
(22, '2', '2022-11-26 13:00:00.000000', 'Education City Stadium', 'Poland', 'Saudi Arabia', 'Group C'),
(23, '2', '2022-11-26 16:00:00.000000', 'Stadium 974', 'France', 'Denmark', 'Group D'),
(24, '2', '2022-11-26 19:00:00.000000', 'Lusail Stadium', 'Argentina', 'Mexico', 'Group C'),
(25, '2', '2022-11-27 10:00:00.000000', 'Ahmad Bin Ali Stadium', 'Japan', 'Costa Rica', 'Group E'),
(26, '2', '2022-11-27 13:00:00.000000', 'Al Thumama Stadium', 'Belgium', 'Morocco', 'Group F'),
(27, '2', '2022-11-27 16:00:00.000000', 'Khalifa International Stadium', 'Croatia', 'Canada', 'Group F'),
(28, '2', '2022-11-27 19:00:00.000000', 'Al Bayt Stadium', 'Spain', 'Germany', 'Group E'),
(29, '2', '2022-11-28 10:00:00.000000', 'Al Janoub Stadium', 'Cameroon', 'Serbia', 'Group G'),
(30, '2', '2022-11-28 13:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Ghana', 'Group H'),
(31, '2', '2022-11-28 16:00:00.000000', 'Stadium 974', 'Brazil', 'Switzerland', 'Group G'),
(32, '2', '2022-11-28 19:00:00.000000', 'Lusail Stadium', 'Portugal', 'Uruguay', 'Group H'),
(35, '3', '2022-11-29 15:00:00.000000', 'Khalifa International Stadium', 'Ecuador', 'Senegal', 'Group A'),
(36, '3', '2022-11-29 15:00:00.000000', 'Al Bayt Stadium', 'Netherlands', 'Qatar', 'Group A'),
(33, '3', '2022-11-29 19:00:00.000000', 'Ahmad Bin Ali Stadium', 'Wales', 'England', 'Group B'),
(34, '3', '2022-11-29 19:00:00.000000', 'Al Thumama Stadium', 'Iran', 'USA', 'Group B'),
(37, '3', '2022-11-30 15:00:00.000000', 'Al Janoub Stadium', 'Australia', 'Denmark', 'Group D'),
(38, '3', '2022-11-30 15:00:00.000000', 'Education City Stadium', 'Tunisia', 'France', 'Group D'),
(39, '3', '2022-11-30 19:00:00.000000', 'Stadium 974', 'Poland', 'Argentina', 'Group C'),
(40, '3', '2022-11-30 19:00:00.000000', 'Lusail Stadium', 'Saudi Arabia', 'Mexico', 'Group C'),
(41, '3', '2022-12-01 15:00:00.000000', 'Ahmad Bin Ali Stadium', 'Croatia', 'Belgium', 'Group F'),
(42, '3', '2022-12-01 15:00:00.000000', 'Al Thumama Stadium', 'Canada', 'Morocco', 'Group F'),
(43, '3', '2022-12-01 19:00:00.000000', 'Khalifa International Stadium', 'Japan', 'Spain', 'Group E'),
(44, '3', '2022-12-01 19:00:00.000000', 'Al Bayt Stadium', 'Costa Rica', 'Germany', 'Group E'),
(45, '3', '2022-12-02 15:00:00.000000', 'Al Janoub Stadium', 'Ghana', 'Uruguay', 'Group H'),
(46, '3', '2022-12-02 15:00:00.000000', 'Education City Stadium', 'Korea Republic', 'Portugal', 'Group H'),
(47, '3', '2022-12-02 19:00:00.000000', 'Stadium 974', 'Serbia', 'Switzerland', 'Group G'),
(48, '3', '2022-12-02 19:00:00.000000', 'Lusail Stadium', 'Cameroon', 'Brazil', 'Group G'),
(49, 'Round of 16', '2022-12-03 15:00:00.000000', 'TBA', '1A', '2B', ''),
(50, 'Round of 16', '2022-12-03 19:00:00.000000', 'TBA', '1C', '2D', ''),
(52, 'Round of 16', '2022-12-04 15:00:00.000000', 'TBA', '1D', '2C', ''),
(51, 'Round of 16', '2022-12-04 19:00:00.000000', 'TBA', '1B', '2A', ''),
(53, 'Round of 16', '2022-12-05 15:00:00.000000', 'TBA', '1E', '2F', ''),
(54, 'Round of 16', '2022-12-05 19:00:00.000000', 'TBA', '1G', '2H', ''),
(55, 'Round of 16', '2022-12-06 15:00:00.000000', 'TBA', '1F', '2E', ''),
(56, 'Round of 16', '2022-12-06 19:00:00.000000', 'TBA', '1H', '2G', ''),
(58, 'Quarter Finals', '2022-12-09 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(57, 'Quarter Finals', '2022-12-09 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(60, 'Quarter Finals', '2022-12-10 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(59, 'Quarter Finals', '2022-12-10 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(61, 'Semi Finals', '2022-12-13 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(62, 'Semi Finals', '2022-12-14 19:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(63, 'Finals', '2022-12-17 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', ''),
(64, 'Finals', '2022-12-18 15:00:00.000000', 'TBA', 'To be announced', 'To be announced', '');

-- --------------------------------------------------------

--
-- Structure de la table `predict`
--

DROP TABLE IF EXISTS `predict`;
CREATE TABLE IF NOT EXISTS `predict` (
  `Username` varchar(50) NOT NULL,
  `Game_ID` int(10) NOT NULL,
  `ScoreH` int(5) NOT NULL,
  `ScoreA` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `ScoreH` int(5) NOT NULL,
  `ScoreA` int(5) NOT NULL,
  `Penalties` tinyint(1) NOT NULL DEFAULT '0',
  `Overtime` tinyint(1) NOT NULL DEFAULT '0',
  `ID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Username` varchar(50) NOT NULL,
  `Mail` varchar(50) NOT NULL,
  `MDP` varchar(50) NOT NULL,
  `Score` int(5) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
