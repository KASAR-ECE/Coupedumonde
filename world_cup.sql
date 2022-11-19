-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 172.17.0.1:3306
-- Généré le : jeu. 17 nov. 2022 à 11:17
-- Version du serveur : 10.6.10-MariaDB-log
-- Version de PHP : 8.0.25

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
-- Structure de la table `cotes`
--

CREATE TABLE `cotes` (
  `id` int(3) NOT NULL,
  `cote_home` int(3) NOT NULL,
  `cote_away` int(3) NOT NULL,
  `egalite` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

CREATE TABLE `countries` (
  `country` varchar(50) NOT NULL,
  `flag` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

CREATE TABLE `games` (
  `match_id` int(2) PRIMARY KEY NOT NULL AUTO_INCREMENT ,
  `round_number` varchar(300) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  `home_team` varchar(300) DEFAULT NULL,
  `away_team` varchar(300) DEFAULT NULL,
  `group` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `games`
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
-- Structure de la table `predict`
--

CREATE TABLE `predict` (
  `predict_ID` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `game_ID` int(5) NOT NULL,
  `score_home` int(5) NOT NULL,
  `score_away` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `predict`
--

INSERT INTO `predict` (`predict_ID`, `username`, `game_ID`, `score_home`, `score_away`) VALUES
(0, 'userTest', 1, 1000, 1000),
(1, 'userTest', 2, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `schoreh` int(5) NOT NULL,
  `scorea` int(5) NOT NULL,
  `penalties` tinyint(1) NOT NULL DEFAULT 0,
  `overtime` tinyint(1) NOT NULL DEFAULT 0,
  `id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `score` int(5) DEFAULT 10,
  `mail_confirmed` tinyint(1) DEFAULT 0
    `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`username`, `mail`, `mdp`, `score`, `mail_confirmed`) VALUES
('userTest', 'user.test@edu.ece.fr', 'password', 0, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`match_id`);

--
-- Index pour la table `predict`
--
ALTER TABLE `predict`
  ADD PRIMARY KEY (`predict_ID`);

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `predict`
--
ALTER TABLE `games`
  MODIFY `match_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;



ALTER TABLE `predict`
  MODIFY `predict_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
