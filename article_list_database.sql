-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2019 at 11:06 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `article_list_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `article_tbl`
--

CREATE TABLE IF NOT EXISTS `article_tbl` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_title` varchar(255) NOT NULL,
  `article_descrip` varchar(255) NOT NULL,
  `article_author_name` varchar(255) NOT NULL,
  `article_tags` varchar(255) NOT NULL,
  `article_publish_date` varchar(255) NOT NULL,
  `article_timestamp` timestamp NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=817 ;

--
-- Dumping data for table `article_tbl`
--

INSERT INTO `article_tbl` (`article_id`, `article_title`, `article_descrip`, `article_author_name`, `article_tags`, `article_publish_date`, `article_timestamp`) VALUES
(226, 's', 's', 's', 's', '2019-01-24', '2019-01-23 06:35:37'),
(276, 'dd', 'hg', 'SUNDARRAJAN NATARAJAN', 'kkh', '2019-01-16', '2019-01-23 14:55:19'),
(582, 'SUNDAR', 'DEMO', 'SUNDdd ', 'TAQ dd dd', '2019-01-24', '2019-01-23 06:16:52'),
(583, 'dd', 'hjh', 'SUNDARRAJAN NATARAJAN', 'jkj', '2019-01-24', '2019-01-23 14:54:43'),
(599, 'ss123ssss', 'ggg', 'SUNDARRAJAN NATARAJAN', 'mul, hh, hjhj', '2019-01-23', '2019-01-23 14:52:32'),
(720, 'g', 'g', 'g', 'g', '2019-01-30', '2019-01-23 06:36:13'),
(748, 's', 's', 's', 's', '2019-01-30', '2019-01-23 06:57:19'),
(816, 'FF', 'FF', 'FF', 'FFss', '2019-01-28', '2019-01-23 06:15:25');

-- --------------------------------------------------------

--
-- Table structure for table `tags_tbl`
--

CREATE TABLE IF NOT EXISTS `tags_tbl` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(500) NOT NULL,
  `tag_timestamp` timestamp NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
