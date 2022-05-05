-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2022 at 10:26 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workspace_bdd`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `auteur` varchar(1000) NOT NULL,
  `date` varchar(1000) NOT NULL,
  `titre` varchar(1000) NOT NULL,
  `description` varchar(255) NOT NULL,
  `categorie` int(11) NOT NULL,
  `Structure` longtext NOT NULL,
  `Chemain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `auteur`, `date`, `titre`, `description`, `categorie`, `Structure`, `Chemain`) VALUES
(45, 'admin', '2022-05-04 09:20:41', 'Article-1', 'list , image et vidéo', 1, 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:6:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp4\";s:4:\"TEXT\";}i:3;a:1:{s:9:\"div1comp3\";s:5:\"LISTE\";}i:4;a:1:{s:9:\"div1comp7\";s:4:\"TEXT\";}i:5;a:1:{s:9:\"div1comp8\";s:5:\"IMAGE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:2:{i:0;a:1:{s:10:\"div2comp11\";s:5:\"TITRE\";}i:1;a:1:{s:10:\"div2comp12\";s:5:\"VIDEO\";}}}}}', './Article/Article-1.php'),
(47, 'admin', '2022-05-04 09:36:15', 'Article-2', 'voir map', 5, 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:4:{i:0;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:1;a:1:{s:9:\"div1comp1\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:3;a:1:{s:9:\"div1comp3\";s:3:\"MAP\";}}}}}', './Article/Article-2.php'),
(48, 'admin', '2022-05-04 09:42:48', 'Article-3', 'redirection plus téléchargement', 1, 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:4:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}i:2;a:1:{s:9:\"div1comp2\";s:6:\"BOUTON\";}i:3;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}}}}}', './Article/Article-3.php');

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `nom`) VALUES
(1, 'Non-Defini'),
(5, 'article2');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `type`, `nom`, `date`) VALUES
(30, 'IMAGE', '20220504092937backgroud1.jpg', '2022-05-04'),
(32, 'VIDEO', 'ZA6HhzlTHNE', '2022-05-04'),
(33, 'DOCUMENT', '20220504094415CV_Thierry_Segarra.pdf', '2022-05-04');

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `id` int(11) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `categorie` int(11) NOT NULL,
  `Structure` longtext NOT NULL,
  `Chemain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `auteur`, `date`, `titre`, `description`, `categorie`, `Structure`, `Chemain`) VALUES
(19, 'admin', '2022-05-04 09:24:00', 'Page-1', '', 1, 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:7:\"ARTICLE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:2:{i:0;a:1:{s:9:\"div2comp5\";s:4:\"TEXT\";}i:1;a:1:{s:9:\"div2comp6\";s:7:\"ARTICLE\";}}}}}', './Page/Page-1.php');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
