-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2022 at 06:38 PM
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
  `Structure` longtext NOT NULL,
  `Chemain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `auteur`, `date`, `titre`, `Structure`, `Chemain`) VALUES
(12, 'admin', '2022-02-05 11:55:01', 'TEST', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:5:\"IMAGE\";}}}}}', './Article/TEST.php'),
(15, 'admin', '2022-02-05 12:02:37', 'test2', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:3:{i:0;a:1:{s:9:\"div2comp4\";s:5:\"IMAGE\";}i:1;a:1:{s:9:\"div2comp5\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div2comp6\";s:5:\"TITRE\";}}}}}', './Article/test2.php'),
(16, 'admin', '2022-02-05 12:05:24', 'test3', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:4:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp3\";s:6:\"BOUTON\";}i:3;a:1:{s:9:\"div1comp4\";s:5:\"IMAGE\";}}}}}', './Article/test3.php'),
(17, 'admin', '2022-02-05 15:24:47', 'Bienvenue', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:1:{i:0;a:1:{s:9:\"div2comp2\";s:5:\"IMAGE\";}}}}}', './Article/Bienvenue.php'),
(18, 'admin', '2022-02-20 12:21:28', 'Artivcle-Cailbair', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:3:{i:0;a:1:{s:9:\"div1comp3\";s:5:\"IMAGE\";}i:1;a:1:{s:9:\"div1comp2\";s:4:\"TEXT\";}i:2;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:3:{i:0;a:1:{s:9:\"div2comp4\";s:5:\"TITRE\";}i:1;a:1:{s:9:\"div2comp5\";s:5:\"IMAGE\";}i:2;a:1:{s:9:\"div2comp6\";s:5:\"TITRE\";}}}}}', './Article/Artivcle-Cailbair.php'),
(20, 'admin', '2022-03-08 16:52:13', 'NIK', 'a:62:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:0:{}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:0:{}}}i:2;a:1:{i:0;a:1:{s:5:\"idiv3\";a:0:{}}}i:3;a:1:{i:0;a:1:{s:5:\"idiv4\";a:0:{}}}i:4;a:1:{i:0;a:1:{s:5:\"idiv5\";a:0:{}}}i:5;a:1:{i:0;a:1:{s:5:\"idiv6\";a:0:{}}}i:6;a:1:{i:0;a:1:{s:5:\"idiv7\";a:0:{}}}i:7;a:1:{i:0;a:1:{s:5:\"idiv8\";a:0:{}}}i:8;a:1:{i:0;a:1:{s:5:\"idiv9\";a:0:{}}}i:9;a:1:{i:0;a:1:{s:6:\"idiv10\";a:0:{}}}i:10;a:1:{i:0;a:1:{s:6:\"idiv11\";a:0:{}}}i:11;a:1:{i:0;a:1:{s:6:\"idiv12\";a:0:{}}}i:12;a:1:{i:0;a:1:{s:6:\"idiv13\";a:0:{}}}i:13;a:1:{i:0;a:1:{s:6:\"idiv14\";a:0:{}}}i:14;a:1:{i:0;a:1:{s:6:\"idiv15\";a:0:{}}}i:15;a:1:{i:0;a:1:{s:6:\"idiv16\";a:0:{}}}i:16;a:1:{i:0;a:1:{s:6:\"idiv17\";a:0:{}}}i:17;a:1:{i:0;a:1:{s:6:\"idiv18\";a:0:{}}}i:18;a:1:{i:0;a:1:{s:6:\"idiv19\";a:0:{}}}i:19;a:1:{i:0;a:1:{s:6:\"idiv20\";a:0:{}}}i:20;a:1:{i:0;a:1:{s:6:\"idiv21\";a:0:{}}}i:21;a:1:{i:0;a:1:{s:6:\"idiv22\";a:0:{}}}i:22;a:1:{i:0;a:1:{s:6:\"idiv23\";a:0:{}}}i:23;a:1:{i:0;a:1:{s:6:\"idiv24\";a:0:{}}}i:24;a:1:{i:0;a:1:{s:6:\"idiv25\";a:0:{}}}i:25;a:1:{i:0;a:1:{s:6:\"idiv26\";a:0:{}}}i:26;a:1:{i:0;a:1:{s:6:\"idiv27\";a:0:{}}}i:27;a:1:{i:0;a:1:{s:6:\"idiv28\";a:0:{}}}i:28;a:1:{i:0;a:1:{s:6:\"idiv29\";a:0:{}}}i:29;a:1:{i:0;a:1:{s:6:\"idiv30\";a:0:{}}}i:30;a:1:{i:0;a:1:{s:6:\"idiv31\";a:0:{}}}i:31;a:1:{i:0;a:1:{s:6:\"idiv32\";a:0:{}}}i:32;a:1:{i:0;a:1:{s:6:\"idiv33\";a:0:{}}}i:33;a:1:{i:0;a:1:{s:6:\"idiv34\";a:0:{}}}i:34;a:1:{i:0;a:1:{s:6:\"idiv35\";a:0:{}}}i:35;a:1:{i:0;a:1:{s:6:\"idiv36\";a:0:{}}}i:36;a:1:{i:0;a:1:{s:6:\"idiv37\";a:0:{}}}i:37;a:1:{i:0;a:1:{s:6:\"idiv38\";a:0:{}}}i:38;a:1:{i:0;a:1:{s:6:\"idiv39\";a:0:{}}}i:39;a:1:{i:0;a:1:{s:6:\"idiv40\";a:0:{}}}i:40;a:1:{i:0;a:1:{s:6:\"idiv41\";a:0:{}}}i:41;a:1:{i:0;a:1:{s:6:\"idiv42\";a:0:{}}}i:42;a:1:{i:0;a:1:{s:6:\"idiv43\";a:0:{}}}i:43;a:1:{i:0;a:1:{s:6:\"idiv44\";a:0:{}}}i:44;a:1:{i:0;a:1:{s:6:\"idiv45\";a:0:{}}}i:45;a:1:{i:0;a:1:{s:6:\"idiv46\";a:0:{}}}i:46;a:1:{i:0;a:1:{s:6:\"idiv47\";a:0:{}}}i:47;a:1:{i:0;a:1:{s:6:\"idiv48\";a:0:{}}}i:48;a:1:{i:0;a:1:{s:6:\"idiv49\";a:0:{}}}i:49;a:1:{i:0;a:1:{s:6:\"idiv50\";a:0:{}}}i:50;a:1:{i:0;a:1:{s:6:\"idiv51\";a:0:{}}}i:51;a:1:{i:0;a:1:{s:6:\"idiv52\";a:0:{}}}i:52;a:1:{i:0;a:1:{s:6:\"idiv53\";a:0:{}}}i:53;a:1:{i:0;a:1:{s:6:\"idiv54\";a:0:{}}}i:54;a:1:{i:0;a:1:{s:6:\"idiv55\";a:0:{}}}i:55;a:1:{i:0;a:1:{s:6:\"idiv56\";a:0:{}}}i:56;a:1:{i:0;a:1:{s:6:\"idiv57\";a:0:{}}}i:57;a:1:{i:0;a:1:{s:6:\"idiv58\";a:0:{}}}i:58;a:1:{i:0;a:1:{s:6:\"idiv59\";a:0:{}}}i:59;a:1:{i:0;a:1:{s:6:\"idiv60\";a:0:{}}}i:60;a:1:{i:0;a:1:{s:6:\"idiv62\";a:0:{}}}i:61;a:1:{i:0;a:1:{s:6:\"idiv63\";a:0:{}}}}', './Article/NIK.php'),
(21, 'admin', '2022-03-08 16:56:27', 'rehrntrn', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}}', './Article/rehrntrn.php'),
(22, 'admin', '2022-03-08 17:24:19', 'heel', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}}', './Article/heel.php'),
(23, 'admin', '2022-03-09 17:22:28', 'test', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:3:\"MAP\";}}}}}', './Article/test.php'),
(24, 'admin', '2022-03-10 09:29:48', 'portfolio', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:4:\"HTML\";}}}}}', './Article/portfolio.php'),
(25, 'admin', '2022-03-10 12:01:56', 'html', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:4:\"HTML\";}}}}}', './Article/html.php'),
(36, 'admin', '2022-03-15 09:22:11', 'fezef', 'a:2:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}i:1;a:1:{i:0;a:1:{s:5:\"idiv2\";a:1:{i:0;a:1:{s:9:\"div2comp5\";s:5:\"IMAGE\";}}}}}', './Article/fezef.php');

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
(5, 'IMAGE', 'screenshot_2021-04-04_22-05-10.png', '2022-03-01'),
(6, 'IMAGE', 'screenshot_2021-04-05_19-56-17.png', '2022-03-01'),
(7, 'IMAGE', 'screenshot_2021-04-09_00-12-49.png', '2022-03-01'),
(8, 'IMAGE', 'screenshot_2021-10-09_14-00-42.png', '2022-03-01'),
(9, 'IMAGE', 'imagedefaut.png', '2022-03-01'),
(11, 'VIDEO', 'htS8QX3OGlg', '2022-03-01'),
(13, 'VIDEO', 'WGQLB7FKu3g', '2022-03-01'),
(16, 'VIDEO', '8V9831zqWXU', '2022-03-01'),
(23, 'VIDEO', 'D7d3Z45VRYk', '2022-03-02'),
(24, 'DOCUMENT', '20220314111627ESTA SEGARRA.pdf', '2022-03-14'),
(25, 'DOCUMENT', '20220314111627Français SEGARRA Thierry.pdf', '2022-03-14'),
(26, 'DOCUMENT', '20220314111628SEGARRA_Thierry-Semestre_2-1ERE_BTS_SIO-N-1651.pdf', '2022-03-14');

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `id` int(11) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `Structure` longtext NOT NULL,
  `Chemain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `auteur`, `date`, `titre`, `Structure`, `Chemain`) VALUES
(2, 'admin', '2022-03-15 15:32:05', 'apge1', 'a:1:{i:0;a:1:{i:0;a:1:{s:5:\"idiv1\";a:1:{i:0;a:1:{s:9:\"div1comp1\";s:5:\"TITRE\";}}}}}', './Page/apge1.php');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
