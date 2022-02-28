-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 27 fév. 2022 à 21:02
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `workspace_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `auteur` varchar(1000) NOT NULL,
  `date` varchar(1000) NOT NULL,
  `titre` varchar(1000) NOT NULL,
  `Structure` longtext NOT NULL,
  `Chemain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `auteur`, `date`, `titre`, `Structure`, `Chemain`) VALUES
(12, 'admin', '2022-02-05 11:55:01', 'TEST', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:5:\"IMAGE\";}}}}}', './Article/TEST.php'),
(15, 'admin', '2022-02-05 12:02:37', 'test2', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:3:{i:0;a:1:{s:9:\"div2comp4\";s:5:\"IMAGE\";}i:1;a:1:{s:9:\"div2comp5\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div2comp6\";s:5:\"TITRE\";}}}}}', './Article/test2.php'),
(16, 'admin', '2022-02-05 12:05:24', 'test3', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:4:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}i:3;a:1:{s:9:\"div1comp4\";s:5:\"IMAGE\";}}}}}', './Article/test3.php'),
(17, 'admin', '2022-02-05 15:24:47', 'Bienvenue', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:1:{i:0;a:1:{s:9:\"div2comp2\";s:5:\"IMAGE\";}}}}}', './Article/Bienvenue.php'),
(18, 'admin', '2022-02-20 12:21:28', 'Artivcle-Cailbair', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp3\";s:5:\"IMAGE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:3:{i:0;a:1:{s:9:\"div2comp4\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div2comp5\";s:5:\"IMAGE\";}i:2;a:1:{s:9:\"div2comp6\";s:5:\"TITRE\";}}}}}', './Article/Artivcle-Cailbair.php'),
(19, 'admin', '2022-02-25 11:13:01', 'test-bienvenue', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp4\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp1\";s:5:\"LISTE\";}i:2;a:1:{s:9:\"div1comp2\";s:5:\"IMAGE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:2:{i:0;a:1:{s:9:\"div2comp5\";s:9:\"undefined\";}i:1;a:1:{s:9:\"div2comp9\";s:5:\"LISTE\";}}}}}', './Article/test-bienvenue.php');

-- --------------------------------------------------------

--
-- Structure de la table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `media`
--

INSERT INTO `media` (`id`, `type`, `nom`, `date`) VALUES
(19, 'Null', 'imagedefaut.png', '2022-02-27'),
(20, '', 'screenshot_2021-04-04_22-05-10.png', '2022-02-27'),
(21, '', 'screenshot_2021-04-04_22-05-10.png', '2022-02-27'),
(22, '', 'screenshot_2021-04-04_22-05-10.png', '2022-02-27'),
(23, '', 'screenshot_2021-04-05_19-56-17.png', '2022-02-27'),
(24, '', 'screenshot_2021-04-09_00-12-49.png', '2022-02-27'),
(25, '', 'screenshot_2021-10-09_14-00-42.png', '2022-02-27'),
(26, '', 'screenshot_2021-10-09_14-00-53.png', '2022-02-27'),
(27, '', 'screenshot_2021-10-15_17-05-53.png', '2022-02-27'),
(28, '', 'screenshot_2021-10-09_14-00-42.png', '2022-02-27'),
(29, '', 'screenshot_2021-10-09_14-00-53.png', '2022-02-27'),
(30, '', 'screenshot_2021-10-15_17-05-53.png', '2022-02-27'),
(31, '', 'screenshot_2021-10-09_14-00-53.png', '2022-02-27'),
(32, '', 'screenshot_2021-04-04_22-05-10.png', '2022-02-27'),
(33, '', 'screenshot_2021-04-05_19-56-17.png', '2022-02-27'),
(34, '', 'screenshot_2021-04-09_00-12-49.png', '2022-02-27'),
(35, '', 'screenshot_2021-10-09_14-00-42.png', '2022-02-27'),
(36, '', 'screenshot_2021-10-09_14-00-53.png', '2022-02-27'),
(37, '', 'screenshot_2021-04-05_19-56-17.png', '2022-02-27'),
(38, '', 'screenshot_2021-10-15_17-05-53.png', '2022-02-27'),
(39, '', 'screenshot_2021-04-04_20-01-44.png', '2022-02-27'),
(40, '', 'screenshot_2021-10-09_14-17-27.png', '2022-02-27'),
(41, '', 'screenshot_2021-10-16_17-35-03.png', '2022-02-27'),
(42, '', 'screenshot_2021-12-23_21-12-08.png', '2022-02-27');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
